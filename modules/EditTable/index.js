import React from 'react'
import propTypes from 'prop-types'
import Table from 'antd/lib/table'
import Form from 'antd/lib/form'
import Popconfirm from 'antd/lib/popconfirm'
import Button from 'antd/lib/button'
import message from 'antd/lib/message'
// import { Table, Popconfirm, Form, Button, message } from 'antd'

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  render() {
    const {
      editing,
      dataIndex,
      title,
      record,
      index,
      editDom,
      editConfig,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    ...editConfig,
                    initialValue:record[dataIndex] === ''?editConfig.initialValue : record[dataIndex],
                  })(editDom())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      editingKey: '',
      keyList: [],
      columns: [
      {
        title: '操作',
        dataIndex: '操作',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a onClick={() => this.save(form, record.key)} style={{ marginRight: 8 }}>
                        保存
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <EditableContext.Consumer>
                    {form => (
                  <Popconfirm
                    title="确认取消?"
                    onConfirm={() => this.cancel(form,record.key)}
                  >
                    <a>取消</a>
                  </Popconfirm>
                  )}
                  </EditableContext.Consumer>
                </span>
              ) : (
                <span>
                  <a style={{ marginRight: 8 }} onClick={() => this.edit(record.key)}>编辑</a>
                  <Popconfirm
                    title="确认删除?"
                    onConfirm={() => this.delete(record.key)}
                  >
                    <a>删除</a>
                  </Popconfirm>
                </span>
              )}
            </div>
          );
        },
      }
    ]
   }
  }
  componentDidMount () {
    if(this.props.columns && this.props.columns.length>0) {
      this.setState({
        data: this.props.data === undefined ? [] : this.props.data,
        columns: [...this.props.columns,...this.state.columns]
      },() => {
        let keyList = this.state.columns.map(c=>c.dataIndex)
        this.setState({
          keyList
        })
      })
    }
  }
  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    if (this.state.editingKey !== '') {
      message.error('请先保存编辑项再进行其他编辑操作！')
      return false
    }
    this.setState({ editingKey: key });
  }
  delete (key){
    let newData = [...this.state.data]
    this.setState({
      data: newData.filter(c=>c.key !== key),
      editingKey: ''
    },()=>{
      this.props.onChange(this.state.data)
    })
  }
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' },()=>{
          this.props.onChange(newData)
        });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' },()=>{
          this.props.onChange(newData)
        });
      }
    });
  }

  cancel = (form,key) => {
    let obj = this.state.data.filter(d=>d.key === key)[0]
    let Bdelete = false
    for(let b in obj) {
      if (obj[b] === '') {
        Bdelete = true
        break
      }
    }
    if (Bdelete) {
      this.delete(key)
    }
    this.setState({ editingKey: '' });
  };
  addNew = () => {
    if (this.state.editingKey !== '') {
      message.error('请先保存编辑项再进行添加操作！')
      return false
    }
    let key = (new Date()).valueOf() + '' + Math.floor((Math.random()*10)+1)
    let obj = {
      key: key
    }
    let keyList = [...this.state.keyList]
    if (keyList.length > 1) {
      keyList.length = keyList.length - 1
    }
    keyList.forEach(d=>{
      obj[d]= ''
    })
    let data = [...this.state.data]
    data.push(obj)
    this.setState({
      data,
      editingKey: key
    })
  }
  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.state.columns.map((col) => {
      if (!col.editComponent) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editConfig: col.editConfig,
          editDom: col.editComponent,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <Table
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row"
        footer={()=><Button icon='plus' onClick={this.addNew} style={{width:'100%'}}>新增</Button>}
      />
    );
  }
}

EditTable.propTypes = {
  columns: propTypes.array.isRequired,
}

export default EditTable
