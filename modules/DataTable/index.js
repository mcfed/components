import React,{Component} from 'react'

import Table from 'antd/lib/table'
import Icon from 'antd/lib/icon'
import Checkbox from 'antd/lib/checkbox'
import Button from 'antd/lib/button'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Form from 'antd/lib/form'
//import BaseForm,{FormItem} from 'components/BaseForm'

class TableMenu extends Component{
  state = {
    visible: true,
    columns:[]
  }
  //请求远程数据接口
  componentWillMount() {
    let {actions} = this.props;

  }
  // //处理表格提交后动作
  handleOk(){
    const {columns} = this.state;
    const { onSelectChange,onClosePopup } =this.props
  //  console.log(columns)
    onSelectChange(columns)
  //  this.form.onSubmit()
    onClosePopup()
  }
  saveFormRef=(form)=>this.form=form
  handleSubmit(values){
    var {onSelectChange}=this.props
      this.setState({
        columns:values
      })
  //  console.log(values)
     // return new API().fetchTableColumns(values).then(json => {
     //   onSelectChange(values.isShowArr)
     //   // console.log(json,values)
     // }).catch(ex => {
     //   return "error"
     // })
  }
  handleChange(values){

    const {onSelectChange}=this.props
    this.setState({
      columns:values
    })
      // console.log(value)
    // const { onSelectChange } =this.props
    // onSelectChange(value)
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
    } = this.props
    const saveFormRef=this.saveFormRef
    const formFullItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    }
    // onChange={this.onSelectChange.bind(this)}
  //  console.log(defaultValue,columns)
    return (
      <div className="" style={{width:400,height:200,padding:'10px',border:'1px solid #cfdae5',background:'#fff'}}>
        <Form onSubmit={handleSubmit} ref={saveFormRef} layout="inline">
            <Checkbox.Group name="isShowArr" style={{ width: '100%' }} defaultValue={defaultValue} onChange={this.handleChange.bind(this)}>
              <Row>
                {
                 columns.filter(it=>{
                   return it.title!='操作'
                 }).map((it,idx)=>{
                   return (<Col span={8} key={idx}><Checkbox value={it.key} disabled ={it.isRead==1?true:false} >{it.title}</Checkbox></Col>)
                 })
                }
              </Row>
            </Checkbox.Group>
            <div style={{textAlign:'right'}}>
             <Button size="small" onClick={onClosePopup}>取消</Button>
             <Button size="small" type="primary" onClick={this.handleOk.bind(this)} style={{marginLeft:'10px'}}>确定</Button>
            </div>
        </Form>
      </div>
    )
  }
}


class DataTable extends Component{
  state={
    visible:false,
    newColumns:[],
    displayColumns:[]
  }
  static defaultProps={
    page:{},
    prefixCls: 'ant-table',
    pagination:{
       showTotal:total => `共 ${total} 条`,
       // showQuickJumper:true,
       size:"middle",
       showSizeChanger:true,
       pageSizeOptions:['10','20','50','100'],
    },
  //  scroll:{ y: 500 },
    style:{
      width:"100%"
    },
    showConfig:false,
    columns:[]
  }
  showPopover(){
    this.setState({
      visible:true
    })
  }
  constructor(props) {
    super(props)
    this.state.columns=props.columns
  }
  componentWillReceiveProps(nextProps){
    let {columns} = nextProps
      this.setState({
        columns:columns,
      });
  }

  onSelectChange(checkedValues){
    //console.log(checkedValues)
    this.setState({
      columns:this.state.columns.map((col)=>{
        if(checkedValues.indexOf(col.key)>=0){
          col.visible=true
        }else{
          col.visible=false
        }
        return col
      })
    })
  }
  onClosePopup(){
    this.setState({
      visible:false
    })
  }
  onPopupVisibleChange(boolean){
     // console.log('show',arguments)
    this.setState({
      visible:boolean
    })
  }

  renderTableMenu(){
    let {columns}= this.state
    var defaultValue=columns.filter(col=>(col.type!='config' && (col.visible===true || col.visible===undefined))).map((col)=>col.key)
    return (
      <TableMenu defaultValue={defaultValue} columns={columns} onSelectChange={this.onSelectChange.bind(this)} onClosePopup={this.onClosePopup.bind(this)} ></TableMenu>
    )
  }
  render(){
    let {pagination,showConfig,page,...otherProps}= this.props
    let {visible,columns}=this.state
    let newColumns;
     if(showConfig){
    // if(true){
      newColumns =columns.filter((col)=>{
         return col.visible==true || col.visible==undefined
         // return true
      })
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
    }else{
      newColumns=columns
    }
    //console.log(newColumns,columns)
    return (<Table {...otherProps} columns={newColumns} pagination={!pagination?false:Object.assign({},pagination,page)}/>)
  }
}


export default DataTable
