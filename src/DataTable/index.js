import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table, Icon, Checkbox, Button, Row, Col, Form} from 'antd';
// import './style/index.less'

const CHECK_TYPE = {
  全选所有: 'checkAll',
  反选所有: 'checkInvert',
  全选当前页: 'checkCurAll',
  反选当前页: 'checkCurInvert',
  单选: 'checkOne'
};
const CHECK_DISABLED_CLASS = 'check-disabled';

export class TableMenu extends Component {
  state = {
    visible: true,
    columns: []
  };
  //请求远程数据接口
  componentWillMount() {
    let {actions} = this.props;
  }
  // //处理表格提交后动作
  handleOk() {
    const {columns} = this.state;
    const {onSelectChange, onClosePopup} = this.props;
    //  console.log(columns)
    onSelectChange(columns);
    //  this.form.onSubmit()
    onClosePopup();
  }
  saveFormRef = form => (this.form = form);
  handleSubmit(values) {
    var {onSelectChange} = this.props;
    this.setState({
      columns: values
    });
  }
  handleChange(values) {
    const {onSelectChange} = this.props;
    this.setState({
      columns: values
    });
  }
  render() {
    const {
      form,
      initialValues,
      handleSubmit,
      children,
      defaultValue,
      columns,
      onClosePopup
    } = this.props;
    const saveFormRef = this.saveFormRef;
    const formFullItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    };
    return (
      <div
        className=''
        style={{
          width: 400,
          height: 200,
          padding: '10px',
          border: '1px solid #cfdae5',
          background: '#fff'
        }}>
        <Form onSubmit={handleSubmit} ref={saveFormRef} layout='inline'>
          <Checkbox.Group
            name='isShowArr'
            style={{width: '100%'}}
            defaultValue={defaultValue}
            onChange={this.handleChange.bind(this)}>
            <Row>
              {columns
                .filter(it => {
                  return it.title != '操作';
                })
                .map((it, idx) => {
                  return (
                    <Col span={8} key={idx}>
                      <Checkbox
                        value={it.key}
                        disabled={it.isRead == 1 ? true : false}>
                        {it.title}
                      </Checkbox>
                    </Col>
                  );
                })}
            </Row>
          </Checkbox.Group>
          <div style={{textAlign: 'right'}}>
            <Button size='small' onClick={onClosePopup}>
              取消
            </Button>
            <Button
              size='small'
              type='primary'
              onClick={this.handleOk.bind(this)}
              style={{marginLeft: '10px'}}>
              确定
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

class DataTable extends Component {
  state = {
    visible: false,
    columns: [],
    displayColumns: []
  };
  static defaultProps = {
    page: {},
    prefixCls: 'ant-table',
    pagination: {
      showTotal: total => `共 ${total} 条`,
      // showQuickJumper:true,
      size: 'middle',
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100']
    },
    //  scroll:{ y: 500 },
    style: {
      width: '100%'
    },
    showConfig: false,
    columns: [],
    showSelectClear: false
  };
  showPopover() {
    this.setState({
      visible: true
    });
  }
  constructor(props) {
    super(props);
    this.state.columns = props.columns;
  }
  componentWillReceiveProps(nextProps) {
    let {columns} = nextProps;
    this.setState({
      columns: columns
    });
  }

  onSelectChange(checkedValues) {
    //console.log(checkedValues)
    this.setState({
      columns: this.state.columns.map(col => {
        if (checkedValues.indexOf(col.key) >= 0) {
          col.visible = true;
        } else {
          col.visible = false;
        }
        return col;
      })
    });
  }
  onClosePopup() {
    this.setState({
      visible: false
    });
  }
  onPopupVisibleChange(boolean) {
    // console.log('show',arguments)
    this.setState({
      visible: boolean
    });
  }

  renderTableMenu() {
    let {columns} = this.state;
    var defaultValue = columns
      .filter(
        col =>
          col.type != 'config' &&
          (col.visible === true || col.visible === undefined)
      )
      .map(col => col.key);
    return (
      <TableMenu
        defaultValue={defaultValue}
        columns={columns}
        onSelectChange={this.onSelectChange.bind(this)}
        onClosePopup={this.onClosePopup.bind(this)}
      />
    );
  }

  clear() {
    const {clearSelectRows} = this.props;
    clearSelectRows && clearSelectRows();
    this.props.setCheckType('');
  }

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
        <Button
          type='link'
          disabled={len === 0}
          onClick={this.clear.bind(this)}>
          <span style={len == 0 ? {color: '#afb5c7'} : {color: '#3385ff'}}>
            清空
          </span>
        </Button>
      </div>
    ) : null;
  }

  // 取两个数组的交集
  getIntersection = (arr1, arr2) => {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
  };

  // 取出数组B中存在但数组A中不存在的元素
  getDifference = (arrA, arrB) => {
    const setA = new Set(arrA);
    return arrB.filter(item => !setA.has(item));
  };

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
      ...otherProps
    } = this.props;
    let {visible, columns} = this.state;
    let newColumns;
    // console.log(this.props,"datatablerender")
    if (showConfig) {
      // if(true){
      newColumns = columns.filter(col => {
        return col.visible == true || col.visible == undefined;
        // return true
      });
      // .concat([{
      //     title:" ",
      //     filterDropdown:(
      //       this.renderTableMenu()
      //     ),
      //     filterDropdownVisible:visible,
      //     onFilterDropdownVisibleChange:this.onPopupVisibleChange.bind(this),
      //     width:30,
      //     fixed:'right',
      //     type:'config'
      // }])
    } else {
      newColumns = columns;
    }
    /*增加是否有排序判断 增加列配置*/
    // console.log("defaultSort", defaultSort);
    if (defaultSort) {
      newColumns = newColumns.map(it => {
        defaultSort.columnKey == it.dataIndex
          ? (it = Object.assign(it, {defaultSortOrder: defaultSort.order}))
          : null;
        return it;
      });
    }
    /**
     * checkbox-全部选择功能支持
     */
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
        /** 目前【全选所有】的场景下可以全选当前页, 清空其他页面的选择，当前页面勾选保持不置灰 */
        {
          key: CHECK_TYPE.全选当前页,
          text: '全选当前页',
          onSelect:
            checkType == CHECK_TYPE.全选所有
              ? changableRowKeys => {
                  // setSelectedRowKeys([])
                  // setSelectedRowKeys(changableRowKeys)
                  setCheckType(CHECK_TYPE.全选当前页);
                }
              : changableRowKeys => {
                  let arr = [];
                  arr = [...selectedRowKeys, ...changableRowKeys];
                  arr = Array.from(new Set(arr));
                  setSelectedRowKeys(arr);
                  setCheckType(CHECK_TYPE.全选当前页);
                }
        },
        /** 目前只有【初始状态】或者【全选所有】的情况下才可以反选所有,其他情况暂不放开 */
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
                  // 如果是初始状态(反选所有==全选所有)
                  // 如果是全选所有状态，则清空
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
        /** 目前【全选所有】的场景下才不支持反选所有 */
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
                  // 当前页已选中的
                  let jiaoji = this.getIntersection(
                    selectedRowKeys,
                    changableRowKeys
                  );
                  // 当前页未选中的
                  let chaji = this.getDifference(jiaoji, changableRowKeys);
                  // 所有的key，去除当前页已选中的，添加当前页未选中的
                  let arr = [];
                  arr = this.getDifference(jiaoji, selectedRowKeys);
                  arr = arr.concat(chaji);
                  setSelectedRowKeys(arr);
                  setCheckType(CHECK_TYPE.反选当前页);
                }
        }
      ];
      const onSelect = (record, selected, selectedRows) => {
        let arr = [].concat(selectedRowKeys);
        if (selected == true) {
          arr.push(record?.id);
        } else {
          arr?.map((key, index) => {
            if (key == record?.id) {
              arr.splice(index, 1);
            }
          });
        }
        setCheckType(CHECK_TYPE.单选);
        setSelectedRowKeys(arr);
      };
      this.props.rowSelection.onSelect = onSelect;
    }

    // console.log("newColumns", newColumns);
    const mergedClassName = checkAll ? `${className} custom-table` : className;
    return (
      <div className='DataTable'>
        <Table
          className={mergedClassName}
          key={defaultSort && defaultSort.columnKey}
          {...otherProps}
          columns={newColumns}
          pagination={!pagination ? false : Object.assign({}, pagination, page)}
        />
        {this.renderTableClear()}
      </div>
    );
  }
}

DataTable.propTypes = {
  /**
    表格列的配置描述 同antd table columns
  **/
  columns: PropTypes.array.isRequired,
  /**
  数据数组，同antd table dataSource
  **/
  dataSource: PropTypes.array.isRequired,
  /**
  默认排序参数  {columnKey,order} columnkey代表需要排序的columns的dataIndex order 选项为‘descend ascend’之一
  e.g. {columnKey:'name',order:'descend'}
  **/
  defaultSort: PropTypes.object,
  /**
  分页器  同antd table pagination
  **/
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
  是否展示清空勾选项的按钮 默认为false
  **/
  showSelectClear: PropTypes.bool,
  /**
  传入清空勾选项按钮点击事件
  **/
  clearSelectRows: PropTypes.func
};
DataTable.CHECK_TYPE = CHECK_TYPE;
export default DataTable;
