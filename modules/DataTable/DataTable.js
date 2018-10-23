import React,{Component} from "react"
import {Table,Icon,Checkbox,Button,Row,Col } from 'antd'
//import BaseForm,{FormItem} from 'components/BaseForm'


class DataTable extends Component{
  state={
    visible:false,
    newColumns:[],
    displayColumns:[]
  }
  static defaultProps={
    page:{},
    prefixCls: 'ant-table',
    showQuickJumper:true,
    pagination:{
       showTotal:total => `共 ${total} 条`,
       // showQuickJumper:true,
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
    // console.log("menu")
    let {columns}= this.state
    var defaultValue=columns.filter(col=>(col.type!='config' && col.visible==true)).map((col)=>col.key)
    // return (
    //     <div className="" style={{width:400,height:200,padding:'10px',border:'1px solid #cfdae5'}}>
    //       <TableMenu defaultValue={defaultValue} columns={columns} onSelectChange={this.onSelectChange.bind(this)} onClosePopup={this.onClosePopup.bind(this)} ></TableMenu>
    //     </div>
    //   )
    return (null)
  }
  render(){
    let {pagination,showConfig,page,...otherProps}= this.props
    let {visible,columns}=this.state
    let newColumns;
    if(showConfig){
      newColumns =columns.filter((col)=>{
        return col.visible==true
      }).concat([{
          title:" ",
          filterDropdown:(
            this.renderTableMenu()
          ),
          filterDropdownVisible:visible,
          onFilterDropdownVisibleChange:this.onPopupVisibleChange.bind(this),
          width:30,
          fixed:'right',
          type:'config'
      }])
    }else{
      newColumns=columns
    }
    return (<Table {...otherProps} columns={newColumns} pagination={!pagination?false:Object.assign({},pagination,page)}/>)
  }
}


export default DataTable
