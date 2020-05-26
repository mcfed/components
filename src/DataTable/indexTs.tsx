import * as React from 'react';
import Table, {ColumnProps, TableProps} from 'antd/es/table';

interface ColumnsType {
  visible?: boolean;
  key: React.Key;
}

interface sortType {
  columnKey: string;
  order: string;
}

interface DataTableState<T> {
  visible: boolean;
  columns: ColumnProps<T>[];
  displayColumns: object[];
}

interface DataTableProps<T> extends TableProps<T> {
  page?: object;
  defaultSort?: sortType;
}

export default class DataTable<T> extends React.Component<DataTableProps<T>> {
  static defaultProps = {
    // page: {},
    prefixCls: 'ant-table',
    // pagination: {
    //   showTotal: (total: any) => `共 ${total} 条`,
    //   // showQuickJumper:true,
    //   size: 'middle',
    //   showSizeChanger: true,
    //   pageSizeOptions: ['10', '20', '50', '100']
    // },
    //  scroll:{ y: 500 },
    style: {
      width: '100%'
    },
    showConfig: false,
    columns: []
  };

  // constructor(props: CDataTableProps<T>) {
  //   super(props);
  //   this.state = {
  //     visible: false,
  //     displayColumns: [],
  //     columns: props.columns
  //   };
  // }
  // componentWillReceiveProps(nextProps: CDataTableProps<T>): void {
  //   const {columns} = nextProps;

  //   this.setState({
  //     columns: columns
  //   });
  // }
  // showPopover(): void {
  //   this.onPopupVisibleChange(true);
  // }
  // onClosePopup(): void {
  //   this.onPopupVisibleChange(false);
  // }
  // onPopupVisibleChange(bool: boolean): void {
  //   this.setState({
  //     visible: bool
  //   });
  // }

  // onSelectChange(checkedValues: React.Key[]): void {
  //   this.setState({
  //     columns: this.state.columns.map((col: any) => {
  //       if (checkedValues.indexOf(col.key) >= 0) {
  //         col.visible = true;
  //       } else {
  //         col.visible = false;
  //       }
  //       return col;
  //     })
  //   });
  // }
  render() {
    let {pagination, ...otherProps} = this.props;
    // let {columns} = this.state;
    // let newColumns = columns;
    // if (defaultSort !== undefined) {
    //   newColumns = columns.map(it => {
    //     defaultSort && defaultSort.columnKey == it.dataIndex
    //       ? (it = Object.assign(it, {defaultSortOrder: defaultSort.order}))
    //       : null;
    //     return it;
    //   });
    // }
    // let pagaSetting = pagination ? Object.assign({}, pagination, page) : false;
    return <Table {...this.props} />;
  }
}
