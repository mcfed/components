import React, {useState, useEffect, useRef} from 'react';
import {Button, Dropdown, Menu, Checkbox, Tooltip, Icon} from 'antd';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
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
  loading
}) => {
  const [columnSettingsVisible, setColumnSettingsVisible] = useState(false);
  const [currentDensity, setCurrentDensity] = useState(density || 'small');

  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const targetElement = document.querySelector(
      '.ant-table > .ant-table-content > .ant-table-scroll table tbody tr'
    );
    if (targetElement) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const {width, height} = entry.contentRect;
          requestAnimationFrame(() => {
            const allLeftNode = document.querySelectorAll(
              '.ant-table > .ant-table-content > .ant-table-fixed-left table tbody tr'
            );
            const allRightNode = document.querySelectorAll(
              '.ant-table > .ant-table-content > .ant-table-fixed-right table tbody tr'
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
        默认
      </Menu.Item>
      <Menu.Item key='middle' className='density-menu-item'>
        中等
      </Menu.Item>
      <Menu.Item key='default' className='density-menu-item'>
        宽松
      </Menu.Item>
    </Menu>
  );

  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const newColumns = Array.from(columns);
    const [reorderedItem] = newColumns.splice(result.source.index, 1);
    newColumns.splice(result.destination.index, 0, reorderedItem);

    onColumnOrderChange(newColumns);
  };

  const moveColumn = (index, direction) => {
    const newColumns = Array.from(columns);
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
              visibleColumns.includes(col.dataIndex)
          )}
          onChange={e => {
            const newVisibleColumns = e.target.checked
              ? columns.slice(0, -1).map(col => col.dataIndex)
              : ['操作'];
            onColumnVisibilityChange(newVisibleColumns);
          }}>
          列展示
        </Checkbox>
        <Button
          type='link'
          onClick={() => {
            console.log('Reset button clicked');
            resetSettings();
          }}>
          重置
        </Button>
      </div>
      <div className='column-settings-list'>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='column-list'>
            {provided => (
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
    const leftFixedColumns = columns.filter(col => col.fixed === 'left');
    const rightFixedColumns = columns.filter(col => col.fixed === 'right');
    const unfixedColumns = columns.filter(col => !col.fixed);

    return [
      {title: '固定在左侧', columns: leftFixedColumns},
      {title: '不固定', columns: unfixedColumns},
      {title: '固定在右侧', columns: rightFixedColumns}
    ].filter(group => group.columns.length > 0);
  };

  const renderColumnGroups = () => {
    const groups = getColumnGroups();
    return (
      <>{groups.map(group => renderColumnGroup(group.title, group.columns))}</>
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
            index={columns.findIndex(c => c.dataIndex === col.dataIndex)}
            isDragDisabled={isDisabled || col.dataIndex === '操作'}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={`column-settings-item ${
                  isDisabled ? 'disabled-column' : ''
                }`}>
                <Icon type='menu' style={{marginRight: 16}} />
                <Checkbox
                  checked={visibleColumns.includes(col.dataIndex)}
                  onChange={e => {
                    if (isDisabled || col.dataIndex === '操作') return;
                    const newVisibleColumns = e.target.checked
                      ? [...visibleColumns, col.dataIndex]
                      : visibleColumns.filter(c => c !== col.dataIndex);
                    onColumnVisibilityChange(newVisibleColumns);
                  }}
                  disabled={isDisabled || col.dataIndex === '操作'}>
                  {col.titleTableSet ? col.titleTableSet : col.title}
                </Checkbox>
                <div className='column-settings-item-actions'>
                  {!isDisabled && (
                    <>
                      {col.fixed !== 'left' && (
                        <Tooltip title='固定在左侧'>
                          <Button
                            onClick={() =>
                              onColumnFixedChange(col.dataIndex, 'left')
                            }
                            className='toolbar-btn'>
                            <Icon type='vertical-align-top' />
                          </Button>
                        </Tooltip>
                      )}
                      {col.fixed && (
                        <Tooltip title='取消固定'>
                          <Button
                            onClick={() =>
                              onColumnFixedChange(col.dataIndex, undefined)
                            }
                            className='toolbar-btn'>
                            <Icon type='vertical-align-middle' />
                          </Button>
                        </Tooltip>
                      )}
                      {col.fixed !== 'right' && (
                        <Tooltip title='固定在右侧'>
                          <Button
                            onClick={() =>
                              onColumnFixedChange(col.dataIndex, 'right')
                            }
                            className='toolbar-btn'>
                            <Icon type='vertical-align-bottom' />
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
      <Tooltip title='刷新'>
        <Button onClick={onRefresh} className='toolbar-btn'>
          <Icon type='redo' spin={loading} />
        </Button>
      </Tooltip>
      <Tooltip title='密度'>
        <Dropdown overlay={densityMenu}>
          <Button className='toolbar-btn'>
            <Icon type='column-height' />
          </Button>
        </Dropdown>
      </Tooltip>
      <Tooltip title='列设置'>
        <Dropdown
          overlay={columnSettingsMenu}
          visible={columnSettingsVisible}
          onVisibleChange={setColumnSettingsVisible}
          trigger={['click']}
          overlayClassName='column-settings-overlay'>
          <Button className='toolbar-btn'>
            <Icon type='setting' />
          </Button>
        </Dropdown>
      </Tooltip>
    </div>
  );
};

export default TableToolbar;
