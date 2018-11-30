import React,{Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Select,Input,Form,DatePicker} from 'antd'
import {TreeSelectPicker} from '../TreeView'

const Option=Select.Option
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class FormItem extends Component{
  constructor(props) {
    super(props);
    if(props.children.props.options instanceof Array){
      this.state={
        childData:props.children.props.options
      }
    }else{
      this.state={
        childData:[]
      }
    }
  }

  static defaultProps = {
    containerTo:true,
  }
  static contextTypes = {
      formRef: PropTypes.object,
      formLayout:PropTypes.object
  }

  componentWillReceiveProps(nextProps){
    let {children} = nextProps
    let field=children
  //  console.log(JSON.stringify(field.props.options),JSON.stringify(this.props.children.props.options))
    if(JSON.stringify(field.props.options)!==JSON.stringify(this.props.children.props.options)){
      this.setState({
           childData:field.props.options
      });
    }

    // if(field.props.fetch instanceof Array){
    //   this.setState({
    //     childData:field.props.fetch
    //   });
    // }
    // if(field.props.fetch && typeof(field.props.fetch) === 'string' && field.props.fetch !==this.props.children.props.fetch)
    // {
    //     this.fetchData(field.props.fetch,field.props.params)
    //     11
    // }

  }
  componentWillMount() {
    let {children} = this.props
    let field=children;
    if(typeof(field.props.fetch)=== 'string' && field.props.fetch.length>0){
        this.fetchData(field.props.fetch,field.props.params)
    }
  }
  /**
   * [fetchData 获取远程接口数据]
   * @param  {[type]} fetchUrl [description]
   * @return {[type]}          [description]
   */
  fetchData(fetchUrl,params){
    // let body={}
    console.error("xhr还未实现!")
  }
  renderField(){
    let {children,containerTo} = this.props
    let {childData} = this.state;
    let field=children;
    let {defaultValue,allowClear,...otherProps}= field.props
    // console.log(ReactDOM.findDOMNode(this));
    // getPopupContainer
    let containerToProp={}
    let treeDataProp={}
    if(containerTo && field.type===Select && !field.props.changeCalendarContainer ){
      containerToProp={
        getPopupContainer:triggerNode => triggerNode.parentNode
      }
    }

    if(field.type == TreeSelectPicker){
      treeDataProp={
        treeData:this.loopTreeData(childData)
      }
    }
    if(childData.length===0){
      return React.createElement(field.type,Object.assign({},otherProps,containerToProp,treeDataProp))
    }else if(field.props.renderItem){
                                                        /**********有坑 ，待坑**************/
      return React.createElement(field.type,Object.assign({key:new Date().valueOf()},otherProps,containerToProp,treeDataProp),childData.map((d,idx) =>field.props.renderItem && field.props.renderItem(d,idx)))
    }else{
      return React.createElement(field.type,Object.assign({},otherProps,containerToProp,treeDataProp))
    }
  }
  loopTreeData(data){
    return data.map((item) => {
			if (item.children && item.children.length) {
				return Object.assign(item,{title:item.text,value:item.id,key:item.id},{children:this.loopTreeData(item.children)})
			}else{
	      return Object.assign(item,{title:item.text,value:item.id,key:item.id})
      }
		})
  }
  render(){
    let element=this.props.children
    let {name,label,format} = element.props
    let {defaultValue,allowClear,...otherProps} =element.props
    let {formRef:{getFieldDecorator},formLayout}= this.context
    let styles={}
    let normalizeDefault={}
    if(element.type.name==RangePicker.name){
      if( defaultValue == Array){
       defaultValue=defaultValue && [(defaultValue[0]==""|| !defaultValue[0]) ?null:moment(defaultValue[0]),(defaultValue[1]==""|| !defaultValue[1])?null:moment(defaultValue[1])]
     }else{
       defaultValue=(defaultValue==""|| !defaultValue) ?null:moment(defaultValue)
     }
       // normalizeDefault={
       //   normalize:function(values){
       //     console.log("normalize",values && [values[0].format(format),values[1].format(format)])
       //     return values && [values[0].format(format),values[1].format(format)]
       //   }
       // }
    }

    // if(element.type==DatePicker ||  element.type==MonthPicker || element.type==WeekPicker){
    //    defaultValue=(defaultValue==""|| !defaultValue) ?null:moment(defaultValue)
    //    normalizeDefault={
    //      normalize:function(values){
    //        return values && values.format(format)
    //      }
    //    }
    // }

    if(element.type===Input && element.props.type==="hidden"){
      styles={
        style:{marginBottom:0}
      }
    }
    if(element.props.hidden==true){
      styles={
        style:{display:"none"}
      }
    }
    return (<Form.Item label={label} {...Object.assign({},{},formLayout,this.props)} colon={false} {...styles}>
      {getFieldDecorator(name,{...otherProps,initialValue:defaultValue,hidden:element.props.hidden||false,...normalizeDefault})(this.renderField())}
    </Form.Item>)
  }
}
