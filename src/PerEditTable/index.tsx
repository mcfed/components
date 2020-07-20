import React from 'react';
import {ColumnProps, TableProps} from 'antd/es/table/interface';
import {WrappedFormUtils, GetFieldDecoratorOptions} from 'antd/es/form/Form';
import LocaleReceiver from 'antd/lib/locale-provider/LocaleReceiver';
import EditTableRow, {EditTableContext} from './EditTableRow';
import {Popconfirm, Table, Button, Form, message} from 'antd';
import Locale from './locale';

const FormItem = Form.Item;

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
}

interface EditTableState<T> {
  data: T[];
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
        data: data,
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
        data: nextProps.data
      };
    }
    return null;
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
    const {rowKey, hideCancelConfirm} = this.props;
    const optionKey = record[rowKey];
    return (
      <span>
        <EditTableContext.Consumer>
          {(form: any) => (
            <a
              onClick={() => this.save(form, optionKey)}
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
                onConfirm={() => this.cancel(form, optionKey)}>
                <a>{contextLocale.cancelText}</a>
              </Popconfirm>
            ) : (
              <a onClick={() => this.cancel(form, optionKey)}>
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
    const optionKey = record[this.props.rowKey];
    return (
      <span>
        <a style={{marginRight: 8}} onClick={() => this.edit(optionKey)}>
          {contextLocale.editText}
        </a>
        <Popconfirm
          title={contextLocale.confirmDeleteText}
          onConfirm={() => this.delete(optionKey)}>
          <a> {contextLocale.deleteText}</a>
        </Popconfirm>
      </span>
    );
  }
  isEditing(record: any) {
    const {rowKey, editingKey} = this.state;
    return record[rowKey] === editingKey;
  }
  save(form: WrappedFormUtils, optionKey: string) {}
  cancel(form: WrappedFormUtils, optionKey: string) {}
  edit(optionKey: string) {}
  delete(optionKey: string) {}
  renderAddButton(locale: any) {
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
  addNew(locale: any) {
    if (this.state.editingKey !== '') {
      message.error(locale.endEditBeforeAddText);
    }
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
