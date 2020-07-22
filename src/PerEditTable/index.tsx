import React from 'react';
import {ColumnProps, TableProps} from 'antd/es/table/interface';
import {WrappedFormUtils, GetFieldDecoratorOptions} from 'antd/es/form/Form';
import LocaleReceiver from 'antd/lib/locale-provider/LocaleReceiver';
import EditTableRow, {EditTableContext} from './EditTableRow';
import {Popconfirm, Table, Button, Form, message} from 'antd';
import Locale from './locale';

const FormItem = Form.Item;

//在可编辑表格内唯一的区分表格行的key
const edit_table_key = 'edit_table_key';

type editConfigFnType<T> = (
  text: any,
  record: T,
  form: WrappedFormUtils
) => GetFieldDecoratorOptions;
type optionType = 'add' | 'edit' | 'del';
type optionCallbackType = () => void;

interface EditTableColProps<T> extends ColumnProps<T> {
  editComponent?: (
    text: any,
    record: T,
    form: WrappedFormUtils
  ) => React.ReactElement;
  editConfig?: GetFieldDecoratorOptions | editConfigFnType<T>;
  dataIndex: string;
  addInitValue?: any;
}

type wrapData<T> = (T & {edit_table_key: string})[];

interface EditTableState<T> {
  data: wrapData<T>[];
  editingKey: string;
  rowKey: string;
  keyList: string[];
  columns: any[];
}

interface EditTableProps<T> extends TableProps<T> {
  columns: EditTableColProps<T>[];
  data: T[];
  mode?: 'row' | 'full';
  rowKey: string;
  hideOperation?: boolean;
  hideCancelConfirm?: boolean;
  onOption?: (data: T, type: optionType, callback: optionCallbackType) => void;
  footer: () => React.ReactNode;
}

export default class EditTable<A = {}> extends React.Component<
  EditTableProps<A>,
  EditTableState<A>
> {
  constructor(props: EditTableProps<A>) {
    super(props);
    this.state = {
      editingKey: '',
      rowKey: '',
      columns: props.hideOperation ? [] : this.optionColumns(),
      keyList: [],
      data: []
    };
  }
  static defaultProps = {
    hideOperation: false,
    hideCancelConfirm: false,
    mode: 'row',
    data: []
  };
  componentDidMount() {
    const {columns, data, rowKey} = this.props;
    if (columns !== undefined && columns.length > 0) {
      const keyList = columns.map((it: EditTableColProps<A>) => it.dataIndex);
      this.setState({
        data: this.compileDataSource(data),
        columns: [...columns, this.state.columns],
        rowKey: rowKey,
        keyList: keyList
      });
    }
  }
  getDerivedStateFromProps(
    nextProps: EditTableProps<A>,
    prevState: EditTableState<A>
  ) {
    if (JSON.stringify(prevState.data) !== JSON.stringify(nextProps.data)) {
      return {
        data: this.compileDataSource(nextProps.data)
      };
    }
    return null;
  }
  private compileDataSource(data: any): wrapData<A>[] {
    return data.map((it: A, index: number) => {
      return Object.assign({}, it, {[edit_table_key]: String(index)});
    });
  }
  optionColumns() {
    const {rowKey} = this.props;
    return [
      {
        title: '操作',
        dataIndex: '操作',
        render: (text: any, record: any) => {
          const isCurrentEdit = this.isEditing(record);
          return React.createElement(
            LocaleReceiver,
            {
              componentName: 'EditTablePer',
              defaultLocale: Locale,
              children: () => undefined //为通过类型检查
            },
            isCurrentEdit
              ? this.renderEditOption.bind(this, record)
              : this.renderShowOption.bind(this, record)
          );
        }
      }
    ];
  }
  renderEditOption(record: any, locale: any) {
    const contextLocale = Object.assign({}, locale, this.props.locale);
    const {hideCancelConfirm} = this.props;
    return (
      <span>
        <EditTableContext.Consumer>
          {(form: any) => (
            <a
              onClick={() => this.save(form, record, contextLocale)}
              style={{marginRight: 8}}>
              {contextLocale.saveText}
            </a>
          )}
        </EditTableContext.Consumer>
        <EditTableContext.Consumer>
          {(form: any) =>
            hideCancelConfirm ? (
              <Popconfirm
                title={contextLocale.confirmCancelText}
                onConfirm={() => this.cancel(record, contextLocale)}>
                <a>{contextLocale.cancelText}</a>
              </Popconfirm>
            ) : (
              <a onClick={() => this.cancel(record, contextLocale)}>
                {contextLocale.cancelText}
              </a>
            )
          }
        </EditTableContext.Consumer>
      </span>
    );
  }
  renderShowOption(record: any, locale: any) {
    const contextLocale = Object.assign({}, locale, this.props.locale);
    return (
      <span>
        <a
          style={{marginRight: 8}}
          onClick={() => this.edit(record, contextLocale)}>
          {contextLocale.editText}
        </a>
        <Popconfirm
          title={contextLocale.confirmDeleteText}
          onConfirm={() => this.delete(record)}>
          <a> {contextLocale.deleteText}</a>
        </Popconfirm>
      </span>
    );
  }
  isEditing(record: any) {
    //用editable 内部自定义key 作为唯一值
    return record[edit_table_key] === this.state.editingKey;
  }
  private save(form: WrappedFormUtils, record: A, locale: any) {
    const _this = this;
    const {data} = this.state;
    const {onOption} = this.props;
    const isCurrentAdd = this.isRecordAdd(record);
    const isHasOptionFn = this.isOptionFnExist();
    form.validateFieldsAndScroll((error: any, row: any) => {
      if (error) {
        return;
      }
      const concatData = Object.assign(record, row);
      const addCallBack = () => {
        _this.setState({
          data: [...data, concatData],
          editingKey: ''
        });
      };
      const editCallBack = () => {
        _this.setState({
          data: data.map((it: any) => {
            if (it[edit_table_key] === concatData[edit_table_key]) {
              return concatData;
            }
            return it;
          }),
          editingKey: ''
        });
      };

      if (isCurrentAdd) {
        isHasOptionFn
          ? onOption?.call(this, concatData, 'add', addCallBack)
          : addCallBack();
      } else {
        isHasOptionFn
          ? onOption?.call(this, concatData, 'edit', editCallBack)
          : editCallBack();
      }
    });
  }
  private cancel(record: any, locale: any): void {
    const {data, rowKey} = this.state;
    if (this.isRecordAdd(record)) {
      //add
      this.setState({
        data: data.filter(
          (it: any) => it[edit_table_key] !== record[edit_table_key]
        )
      });
    }
    this.setState({
      editingKey: ''
    });
  }
  private edit(record: any, locale: any) {
    if (this.state.editingKey !== '') {
      message.error(locale.endEditBeforeEditText);
      return false;
    }
    this.setState({
      editingKey: record[edit_table_key]
    });
  }
  private delete(record: any): void {
    const {onOption} = this.props;
    const {data} = this.state;

    const delCallBack = () => {
      this.setState({
        data: data.filter((it: any) => {
          return it[edit_table_key] !== record[edit_table_key];
        })
      });
    };

    if (this.isOptionFnExist()) {
      onOption?.call(this, record, 'del', delCallBack);
    } else {
      delCallBack();
    }
  }
  private isOptionFnExist(): boolean {
    return this.props.onOption !== undefined;
  }
  private isRecordAdd(record: any): boolean {
    return record[this.state.rowKey] === '';
  }
  private renderAddButton(locale: any) {
    const contextLocale = Object.assign({}, locale, this.props.locale);
    return (
      <Button
        icon='plus'
        onClick={this.addNew.bind(this, contextLocale)}
        style={{width: '100%'}}>
        {contextLocale.addText}
      </Button>
    );
  }
  private addNew(locale: any) {
    if (this.state.editingKey !== '') {
      message.error(locale.endEditBeforeAddText);
    }
    const newRow = this.newRowInit();
    this.setState({
      data: [...this.state.data, newRow],
      editingKey: newRow[edit_table_key]
    });
  }
  private newRowInit(): any {
    let row = {
      [edit_table_key]:
        new Date().valueOf() + '' + Math.floor(Math.random() * 10 + 1)
    };
    this.props.columns.map((it: EditTableColProps<A>) => {
      const {dataIndex, addInitValue} = it;
      if (addInitValue !== undefined) {
        row = {...row, [dataIndex]: addInitValue};
      } else {
        row = {...row, [dataIndex]: ''};
      }
    });
    return row;
  }
  renderFooter() {
    const {footer, hideOperation} = this.props;
    if (footer !== undefined) {
      return footer();
    }
    if (hideOperation) {
      return null;
    }
    return React.createElement(
      LocaleReceiver,
      {
        componentName: 'EditTablePer',
        defaultLocale: Locale,
        children: () => undefined //为通过类型检查
      },
      this.renderAddButton.bind(this)
    );
  }
  compileEditConfig(
    editConfig: GetFieldDecoratorOptions | editConfigFnType<A> | undefined,
    text: any,
    row: A,
    form: any
  ) {
    if (editConfig === undefined) {
      return {};
    }
    if (typeof editConfig === 'function') {
      return editConfig(text, row, form);
    }
    return {
      ...editConfig,
      initialValue: editConfig.initialValue || text
    };
  }
  renderEditCell(text: any, row: A, col: EditTableColProps<A>) {
    const {editComponent, editConfig, dataIndex} = col;
    const {mode} = this.props;
    if (editComponent === undefined) {
      return text;
    }
    return (
      <EditTableContext.Consumer>
        {(form: any) => {
          const {getFieldDecorator} = form;
          const component = editComponent(text, row, form);
          const initialConfig = this.compileEditConfig(
            editConfig,
            text,
            row,
            form
          );
          return (
            <FormItem>
              {getFieldDecorator(
                dataIndex,
                initialConfig
              )(
                React.createElement(component.type, {
                  ...component.props,
                  ...(mode !== 'row'
                    ? {
                        onChange: function(e: any) {
                          let val;
                          if (e.target) {
                            val = e.target.value;
                          } else {
                            val = e;
                          }
                          form.setFieldsValue({
                            [dataIndex]: val
                          });
                        }
                      }
                    : {})
                })
              )}
            </FormItem>
          );
        }}
      </EditTableContext.Consumer>
    );
  }
  formatColumns() {
    const {mode} = this.props;
    const {columns} = this.state;
    return columns.map((col: EditTableColProps<A>) => {
      if (col.editComponent === undefined) {
        return col;
      }
      return {
        ...col,
        render: (text: any, row: A, index: number) => {
          if (mode === 'full' || this.isEditing(row)) {
            return this.renderEditCell(text, row, col);
          }
          if (col.render !== undefined) {
            return col.render(text, row, index);
          }
          return text;
        }
      };
    });
  }
  render() {
    const {
      hideOperation,
      hideCancelConfirm,
      onOption,
      columns,
      data,
      footer,
      mode,
      ...otherProps
    } = this.props;
    const components = {
      body: {
        row: EditTableRow
      }
    };
    const finalCols = this.formatColumns();
    return (
      <Table
        {...otherProps}
        components={components}
        footer={() => this.renderFooter()}
      />
    );
  }
}
