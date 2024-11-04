import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Icon, Checkbox, Button, Row, Col, Form} from 'antd';
import TableToolbar from './TableToolbar';
import TableSettingsContainer from './tableSettingsContainer';
import './index.less';

const CHECK_TYPE = {
  全选所有: 'checkAll',
  反选所有: 'checkInvert',
  全选当前页: 'checkCurAll',
  反选当前页: 'checkCurInvert',
  单选: 'checkOne'
};
const CHECK_DISABLED_CLASS = 'check-disabled';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: props.columns,
      disabledColumns: props.columns
        .filter(col => col.disabled)
        .map(col => col.dataIndex),
      settings: {
        density: 'small',
        visibleColumns: props.columns.map(col => col.dataIndex),
        sortedInfo: {},
        groupedInfo: {}
      }
    };
    this.namespace = props.namespace || 'default';
  }

  componentDidMount() {
    const savedSettings = JSON.parse(
      localStorage.getItem(`tableSettings_${this.namespace}`)
    );
    if (savedSettings) {
      this.setState(prevState => ({
        settings: {
          ...prevState.settings,
          ...savedSettings,
          visibleColumns:
            savedSettings.visibleColumns || prevState.settings.visibleColumns
        }
      }));
    }
  }

  static defaultProps = {
    page: {},
    prefixCls: 'ant-table',
    pagination: {
      showTotal: total => `共 ${total} 条`,
      size: 'middle',
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100']
    },
    style: {
      width: '100%'
    },
    showConfig: false,
    columns: [],
    showSelectClear: false,
    onRefresh: () => {},
    disabledColumns: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.columns !== this.props.columns) {
      this.setState({
        columns: nextProps.columns,
        disabledColumns: nextProps.columns
          .filter(col => col.disabled)
          .map(col => col.dataIndex)
      });
    }
  }

  handleColumnOrderChange = newColumns => {
    this.setState({
      columns: newColumns.map(col => ({
        ...col,
        sortOrder: col.sortOrder || undefined
      }))
    });
  };

  handleColumnFixedChange = (dataIndex, fixed) => {
    const newColumns = this.state.columns.map(col => {
      if (col.dataIndex === dataIndex) {
        return {...col, fixed};
      }
      return col;
    });

    this.setState({columns: newColumns});
  };

  clear = () => {
    const {clearSelectRows} = this.props;
    clearSelectRows && clearSelectRows();
    this.props.setCheckType('');
  };

  renderTableClear() {
    const {
      showSelectClear,
      rowSelection,
      dataSource = [],
      page,
      checkType
    } = this.props;
    let len =
      rowSelection && rowSelection.selectedRowKeys
        ? rowSelection.selectedRowKeys.length
        : 0;
    if (checkType == CHECK_TYPE.全选所有) {
      len = page?.total;
      if (!!this.props?.disabledCount) {
        len = len - this.props?.disabledCount;
      }
    }
    return dataSource.length > 0 && showSelectClear && rowSelection ? (
      <div className='checkedClear'>
        <span>已选 {len} 项</span>
        <Button type='link' disabled={len === 0} onClick={this.clear}>
          <span style={len == 0 ? {color: '#afb5c7'} : {color: '#3385ff'}}>
            清空
          </span>
        </Button>
      </div>
    ) : null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.settings !== prevProps.settings) {
      this.setState({settings: this.props.settings});
    }
  }

  render() {
    let {
      pagination,
      showConfig,
      page,
      defaultSort,
      showSelectClear,
      clearSelectRows,
      selectedRowKeys,
      setSelectedRowKeys,
      checkType,
      setCheckType,
      checkAll,
      className,
      onRefresh,
      ...otherProps
    } = this.props;
    let {columns} = this.state;

    if (defaultSort) {
      columns = columns.map(it => {
        if (defaultSort.columnKey === it.dataIndex) {
          return {
            ...it,
            defaultSortOrder: defaultSort.order,
            sortOrder: defaultSort.order
          };
        }
        return it;
      });
    }

    if (checkAll) {
      this.props.rowSelection.hideDefaultSelections = true;
      this.props.rowSelection.selections = [
        {
          key: CHECK_TYPE.全选所有,
          text: '全选所有',
          onSelect: changableRowKeys => {
            if (changableRowKeys?.length > 0) {
              setSelectedRowKeys(changableRowKeys);
              setCheckType(CHECK_TYPE.全选所有);
            }
          }
        },
        {
          key: CHECK_TYPE.全选当前页,
          text: '全选当前页',
          onSelect:
            checkType == CHECK_TYPE.全选所有
              ? changableRowKeys => {
                  setCheckType(CHECK_TYPE.全选当前页);
                }
              : changableRowKeys => {
                  let arr = [...selectedRowKeys, ...changableRowKeys];
                  arr = Array.from(new Set(arr));
                  setSelectedRowKeys(arr);
                  setCheckType(CHECK_TYPE.全选当前页);
                }
        },
        {
          key: CHECK_TYPE.反选所有,
          text: (
            <span
              className={`${
                checkType == CHECK_TYPE.全选所有 ||
                checkType == CHECK_TYPE.反选所有 ||
                checkType == ''
                  ? ''
                  : CHECK_DISABLED_CLASS
              }`}>
              反选所有
            </span>
          ),
          onSelect:
            checkType == CHECK_TYPE.全选所有 ||
            checkType == CHECK_TYPE.反选所有 ||
            checkType == ''
              ? changableRowKeys => {
                  if (checkType == '' || checkType == CHECK_TYPE.反选所有) {
                    setSelectedRowKeys(changableRowKeys);
                    setCheckType(CHECK_TYPE.全选所有);
                  } else if (checkType == CHECK_TYPE.全选所有) {
                    setSelectedRowKeys([]);
                    setCheckType(CHECK_TYPE.反选所有);
                  }
                }
              : null
        },
        {
          key: CHECK_TYPE.反选当前页,
          text: (
            <span
              className={`${
                checkType == CHECK_TYPE.全选所有 ? CHECK_DISABLED_CLASS : ''
              }`}>
              反选当前页
            </span>
          ),
          onSelect:
            checkType == CHECK_TYPE.全选所有
              ? null
              : changableRowKeys => {
                  const jiaoji = selectedRowKeys.filter(key =>
                    changableRowKeys.includes(key)
                  );
                  const chaji = changableRowKeys.filter(
                    key => !jiaoji.includes(key)
                  );
                  const arr = selectedRowKeys
                    .filter(key => !jiaoji.includes(key))
                    .concat(chaji);
                  setSelectedRowKeys(arr);
                  setCheckType(CHECK_TYPE.反选当前页);
                }
        }
      ];

      if (!this.props.rowSelection.onSelect) {
        this.props.rowSelection.onSelect = (record, selected, selectedRows) => {
          let arr = [...selectedRowKeys];
          if (selected) {
            arr.push(record?.id);
          } else {
            arr = arr.filter(key => key !== record?.id);
          }
          setCheckType(CHECK_TYPE.单选);
          setSelectedRowKeys(arr);
        };
      }
    }

    const mergedClassName = checkAll ? `${className} custom-table` : className;

    return (
      <TableSettingsContainer
        columns={this.state.columns}
        initialSettings={this.state.settings}
        onSettingsChange={newSettings => {
          this.setState({settings: newSettings});
          localStorage.setItem(
            `tableSettings_${this.namespace}`,
            JSON.stringify(newSettings)
          );
        }}
        namespace={this.namespace}>
        {({
          density,
          visibleColumns,
          updateDensity,
          updateVisibleColumns,
          resetSettings,
          sortedInfo,
          groupedInfo
        }) => {
          let newColumns = columns.filter(
            col =>
              visibleColumns.includes(col.dataIndex) || col.title === '操作'
          );

          return (
            <div className='DataTable DataTableV2'>
              <TableToolbar
                onRefresh={() => {
                  /* 实现刷新逻辑 */
                  onRefresh && onRefresh();
                }}
                onDensityChange={updateDensity}
                columns={columns}
                visibleColumns={visibleColumns}
                onColumnVisibilityChange={updateVisibleColumns}
                onColumnOrderChange={this.handleColumnOrderChange}
                onColumnFixedChange={this.handleColumnFixedChange}
                disabledColumns={this.state.disabledColumns}
                resetSettings={resetSettings}
                density={density}
                loading={this.props.loading}
              />
              <Table
                className={mergedClassName}
                {...otherProps}
                columns={newColumns.map(col => ({
                  ...col,
                  sorter: col.sorter,
                  sortOrder: sortedInfo[col.dataIndex],
                  fixed: col.fixed
                }))}
                pagination={
                  !pagination ? false : Object.assign({}, pagination, page)
                }
                size={density}
                onChange={(pagination, filters, sorter, extra) => {
                  // 处理排序变化
                  if (sorter) {
                    const newSortedInfo = {};
                    if (Array.isArray(sorter)) {
                      sorter.forEach(item => {
                        newSortedInfo[item.field] = item.order;
                      });
                    } else {
                      newSortedInfo[sorter.field] = sorter.order;
                    }
                    if (typeof this.props.onSettingsChange === 'function') {
                      this.props.onSettingsChange({
                        ...this.state.settings,
                        sortedInfo: newSortedInfo
                      });
                    }
                  }
                  // 调用原有的 onChange 函数
                  if (otherProps.onChange) {
                    otherProps.onChange(pagination, filters, sorter, extra);
                  }
                }}
              />
              {this.renderTableClear()}
            </div>
          );
        }}
      </TableSettingsContainer>
    );
  }
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
  defaultSort: PropTypes.object,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  showSelectClear: PropTypes.bool,
  clearSelectRows: PropTypes.func
};

DataTable.CHECK_TYPE = CHECK_TYPE;

export default DataTable;
