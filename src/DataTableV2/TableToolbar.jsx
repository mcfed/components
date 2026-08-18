import React, {useState, useEffect, useRef} from 'react';

import {
  ColumnHeightOutlined,
  MenuOutlined,
  RedoOutlined,
  SettingOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';

import {Button, Dropdown, Menu, Checkbox, Tooltip} from 'antd';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {t} from '../i18n';
import {TABLE_OPERATION_COLUMN} from '../constants/chineseContracts';
import './index.less';

const TableToolbar = ({
  onRefresh,
  onDensityChange,
  columns,
  visibleColumns,
  onColumnVisibilityChange,
  onColumnOrderChange,
  onColumnFixedChange,
  updateVisibleColumns,
  disabledColumns,
  resetSettings,
  density,
  loading,
}) => {
  const [columnSettingsVisible, setColumnSettingsVisible] = useState(false);
  const [currentDensity, setCurrentDensity] = useState(density || 'small');

  const resizeObserverRef = useRef(null);
  const columnsRef = useRef(columns);
  columnsRef.current = columns;

  useEffect(() => {
    const targetElement = document.querySelector(
      '.ant-table > .ant-table-content > .ant-table-scroll table tbody tr',
    );
    if (targetElement) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const {width, height} = entry.contentRect;
          requestAnimationFrame(() => {
            const allLeftNode = document.querySelectorAll(
              '.ant-table > .ant-table-content > .ant-table-fixed-left table tbody tr',
            );
            const allRightNode = document.querySelectorAll(
              '.ant-table > .ant-table-content > .ant-table-fixed-right table tbody tr',
            );

            allLeftNode?.forEach((item, index) => {
              item.style.height = `${height}px`;
              if (
                currentDensity === 'small' &&
                index === allLeftNode.length - 1
              ) {
                item.style.height = `${height - 1}px`;
              }
            });
            allRightNode?.forEach((item, index) => {
              item.style.height = `${height}px`;
              if (
                currentDensity === 'small' &&
                index === allRightNode.length - 1
              ) {
                item.style.height = `${height - 1}px`;
              }
            });
          });
        }
      });
      resizeObserver.observe(targetElement);
      resizeObserverRef.current = resizeObserver;
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [currentDensity]);

  const densityMenu = (
    <Menu
      onClick={({key}) => {
        onDensityChange(key);
        setCurrentDensity(key);
      }}
      mode='vertical'
      selectedKeys={[currentDensity]}
      className='density-menu'>
      <Menu.Item key='small' className='density-menu-item'>
        {t('common.default')}
      </Menu.Item>
      <Menu.Item key='middle' className='density-menu-item'>
        {t('common.medium')}
      </Menu.Item>
      <Menu.Item key='default' className='density-menu-item'>
        {t('common.comfortable')}
      </Menu.Item>
    </Menu>
  );

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newColumns = Array.from(columnsRef.current);
    const [reorderedItem] = newColumns.splice(result.source.index, 1);
    newColumns.splice(result.destination.index, 0, reorderedItem);

    onColumnOrderChange(newColumns);
  };

  const moveColumn = (index, direction) => {
    const newColumns = Array.from(columnsRef.current);
    const [movedItem] = newColumns.splice(index, 1);
    newColumns.splice(index + direction, 0, movedItem);
    onColumnOrderChange(newColumns);
  };

  const columnSettingsMenu = (
    <div className='column-settings-dropdown'>
      <div className='column-settings-header'>
        <Checkbox
          checked={columns.every(
            (col, index) =>
              index === columns.length - 1 ||
              visibleColumns.includes(col.dataIndex),
          )}
          onChange={(e) => {
            const newVisibleColumns = e.target.checked
              ? columns.slice(0, -1).map((col) => col.dataIndex)
              : [TABLE_OPERATION_COLUMN];
            onColumnVisibilityChange(newVisibleColumns);
          }}>
          {t('dataTable.columnDisplay')}
        </Checkbox>
        <Button
          type='link'
          onClick={() => {
            console.log('Reset button clicked');
            resetSettings();
          }}>
          {t('common.reset')}
        </Button>
      </div>
      <div className='column-settings-list'>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='column-list'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {renderColumnGroups()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );

  const getColumnGroups = () => {
    const leftFixedColumns = columns.filter((col) => col.fixed === 'left');
    const rightFixedColumns = columns.filter((col) => col.fixed === 'right');
    const unfixedColumns = columns.filter((col) => !col.fixed);

    return [
      {title: t('common.fixedLeft'), columns: leftFixedColumns},
      {title: t('common.unfixed'), columns: unfixedColumns},
      {title: t('common.fixedRight'), columns: rightFixedColumns},
    ].filter((group) => group.columns.length > 0);
  };

  const renderColumnGroups = () => {
    const groups = getColumnGroups();
    return (
      <>
        {groups.map((group) => renderColumnGroup(group.title, group.columns))}
      </>
    );
  };

  const renderColumnGroup = (title, groupColumns) => (
    <div className='column-group'>
      <div className='column-group-title'>{title}</div>
      {groupColumns.map((col, index) => {
        const isDisabled = disabledColumns.includes(col.dataIndex);
        return (
          <Draggable
            key={col.dataIndex}
            draggableId={col.dataIndex}
            index={columns.findIndex((c) => c.dataIndex === col.dataIndex)}
            isDragDisabled={
              isDisabled || col.dataIndex === TABLE_OPERATION_COLUMN
            }>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={`column-settings-item ${
                  isDisabled ? 'disabled-column' : ''
                }`}>
                <MenuOutlined style={{marginRight: 16}} />
                <Checkbox
                  checked={visibleColumns.includes(col.dataIndex)}
                  onChange={(e) => {
                    if (isDisabled || col.dataIndex === TABLE_OPERATION_COLUMN)
                      return;
                    const newVisibleColumns = e.target.checked
                      ? [...visibleColumns, col.dataIndex]
                      : visibleColumns.filter((c) => c !== col.dataIndex);
                    onColumnVisibilityChange(newVisibleColumns);
                  }}
                  disabled={
                    isDisabled || col.dataIndex === TABLE_OPERATION_COLUMN
                  }>
                  {col.titleTableSet ? col.titleTableSet : col.title}
                </Checkbox>
                <div className='column-settings-item-actions'>
                  {!isDisabled && (
                    <>
                      {col.fixed !== 'left' && (
                        <Tooltip title={t('common.fixedLeft')}>
                          <Button
                            onClick={() =>
                              onColumnFixedChange(col.dataIndex, 'left')
                            }
                            className='toolbar-btn'>
                            <VerticalAlignTopOutlined />
                          </Button>
                        </Tooltip>
                      )}
                      {col.fixed && (
                        <Tooltip title={t('common.cancelFixed')}>
                          <Button
                            onClick={() =>
                              onColumnFixedChange(col.dataIndex, undefined)
                            }
                            className='toolbar-btn'>
                            <VerticalAlignMiddleOutlined />
                          </Button>
                        </Tooltip>
                      )}
                      {col.fixed !== 'right' && (
                        <Tooltip title={t('common.fixedRight')}>
                          <Button
                            onClick={() =>
                              onColumnFixedChange(col.dataIndex, 'right')
                            }
                            className='toolbar-btn'>
                            <VerticalAlignBottomOutlined />
                          </Button>
                        </Tooltip>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </Draggable>
        );
      })}
    </div>
  );

  return (
    <div className='ToolBar'>
      <Tooltip title={t('common.refresh')}>
        <Button onClick={onRefresh} className='toolbar-btn'>
          <RedoOutlined spin={loading} />
        </Button>
      </Tooltip>
      <Tooltip title={t('dataTable.density')}>
        <Dropdown overlay={densityMenu}>
          <Button className='toolbar-btn'>
            <ColumnHeightOutlined />
          </Button>
        </Dropdown>
      </Tooltip>
      <Tooltip title={t('dataTable.columnSettings')}>
        <Dropdown
          overlay={columnSettingsMenu}
          visible={columnSettingsVisible}
          onVisibleChange={setColumnSettingsVisible}
          trigger={['click']}
          overlayClassName='column-settings-overlay'>
          <Button className='toolbar-btn'>
            <SettingOutlined />
          </Button>
        </Dropdown>
      </Tooltip>
    </div>
  );
};

export default TableToolbar;
