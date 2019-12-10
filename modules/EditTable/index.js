import React from "react";
import propTypes from "prop-types";
import { Table, Popconfirm, Form, Button, message } from "antd";

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      editingKey: "",
      keyList: [],
      columns: [ ]
    };
  }
  componentDidMount() {
    if (this.props.columns && this.props.columns.length > 0) {
      this.setState(
        {
          data: this.props.data === undefined ? [] : this.props.data,
          columns: [...this.props.columns, ...this.state.columns]
        },
        () => {
          let keyList = this.state.columns.map(c => c.dataIndex);
          this.setState({
            keyList
          });
        }
      );
    }
  }
  isEditing = record => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    if (this.state.editingKey !== "") {
      message.error("请先保存编辑项再进行其他编辑操作！");
      return false;
    }
    this.setState({ editingKey: key });
  }
  delete(key) {
    let newData = [...this.state.data];
    this.setState(
      {
        data: newData.filter(c => c.key !== key),
        editingKey: ""
      },
      () => {
        this.props.onChange(this.state.data);
      }
    );
  }
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      console.log(row)
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
      } else {
        newData.push(row);
      }
      console.log(newData)
      this.setState({ data: newData, editingKey: "" }, () => {
        this.props.onChange(newData);
      });
    });
  }

  cancel = (form, key) => {
    let obj = this.state.data.filter(d => d.key === key)[0];
    let Bdelete = false;
    for (let b in obj) {
      if (obj[b] === "") {
        Bdelete = true;
        break;
      }
    }
    if (Bdelete) {
      this.delete(key);
    }
    this.setState({ editingKey: "" });
  };
  addNew = () => {
    if (this.state.editingKey !== "") {
      message.error("请先保存编辑项再进行添加操作！");
      return false;
    }
    let key = new Date().valueOf() + "" + Math.floor(Math.random() * 10 + 1);
    let obj = {
      key: key
    };
    let keyList = [...this.state.keyList];
    if (keyList.length > 1) {
      keyList.length = keyList.length - 1;
    }
    keyList.forEach(d => {
      obj[d] = "";
    });
    let data = [...this.state.data];
    data.push(obj);
    this.setState({
      data,
      editingKey: key
    });
  };

  renderCell(text, record,cellConfig){
    const {
      dataIndex,
      editComponent,
      editConfig,
    } = cellConfig;
    const instance = this
    const {mode} = this.props
    return (<EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          const component = editComponent(text, record, instance, form)
          return (
              <FormItem style={{ margin: 0 }}>
                {getFieldDecorator(dataIndex, {
                  ...editConfig,
                  initialValue:
                    record[dataIndex] === ""
                      ? editConfig && editConfig.initialValue
                      : record[dataIndex]
                })(React.createElement(component.type, { ...component.props, ...(mode !== "row" ? { onChange: function (e) {
                  // e is event
                  if (e.target){
                    form.setFieldsValue({[dataIndex]:e.target.value})
                  }else{
                    form.setFieldsValue({[dataIndex]:e})
                  }
                  instance.save(form, record.key)
                  }}:{})}))}
              </FormItem>
          );
        }}
      </EditableContext.Consumer>)
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        // cell: EditableCell
      }
    };
    const {mode} = this.props
    const instance = this

    const columns = this.state.columns.map(col => {
      if (!col.editComponent) {
        return col;
      }
      return {
        ...col,
        // onCellClick: (record,index)=>{
        //   console.log(record,index)
        // },
        render:(text,row)=>{
          return (mode==='full' || this.isEditing(row)) ? this.renderCell(text, row, col) : (col.render ? col.render(text, row, instance):text)
        }
      };
    });

    return (
      <Table
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row"
        footer={() => (
          <Button icon="plus" onClick={this.addNew} style={{ width: "100%" }}>
            新增
          </Button>
        )}
      />
    );
  }
}

EditTable.defaultProps={
  mode:"row"
}

EditTable.propTypes = {
  /**
  表格列配置
  **/
  columns: propTypes.array.isRequired,
  /**
  数据数组
  **/
  data: propTypes.array,
  mode: propTypes.oneOf(["full", "row"]),
};

export default EditTable;
