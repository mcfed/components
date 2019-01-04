import React,{Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Select from 'antd/lib/select'
import Input from 'antd/lib/input'
import Form from 'antd/lib/form'
import DatePicker from 'antd/lib/date-picker'
import fetch from 'cross-fetch'
import WrapperDatePicker from '../WrapperDatePicker'
import {TreeSelectPicker} from '../TreeView'

const Option=Select.Option

export default class FormItem extends Component{
  constructor(props) {
    super(props);
    let {children} = props
    let field=children;
    if(children.props.options instanceof Array){
      this.state={
        childData:children.props.options
      }
    }else{
      this.state={
        childData:[]
      }
    }
    if(typeof(field.props.fetch)=== 'string' && field.props.fetch.length>-1){
        this.fetchData(field.props.fetch,field.props.params)
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

    if(field.props.fetch && typeof(field.props.fetch) === 'string' && field.props.fetch !==this.props.children.props.fetch)
    {
        this.fetchData(field.props.fetch,field.props.fetchCallback)
    }
  }
  componentWillMount() {
  }
  /**
   * [fetchData 获取远程接口数据]
   * @param  {[type]} fetchUrl [description]
   * @return {[type]}          [description]
   */
  fetchData(fetchUrl,params){
    // let body={}
    fetch(fetchUrl,{
      method:'GET'
    }).then((json) => {
      return json.json()
    }).then(result=>{
      if(result.code==0){
        this.setState({
          childData:result.data.items
        })
      }
    });

  }
  renderField(){
    let {children,containerTo} = this.props
    let {childData} = this.state;
    let field=children;
    let {defaultValue,...otherProps}= field.props
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
    if(field.type.name==="PickerWrapper"){
      let {children,otherProps}=field.props
        return React.createElement(WrapperDatePicker,otherProps,field)
    }else{
      if(childData.length===0){
        return React.createElement(field.type,Object.assign({},otherProps,containerToProp,treeDataProp))
      }else if(field.props.renderItem){
        return React.createElement(field.type,Object.assign({key:new Date().valueOf()},otherProps,containerToProp,treeDataProp),childData.map((d,idx) =>field.props.renderItem && field.props.renderItem(d,idx)))
      }else{
        return React.createElement(field.type,Object.assign({},otherProps,containerToProp,treeDataProp))
      }
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
    return (<Form.Item label={label} {...Object.assign({},{},formLayout,this.props)} {...styles}>
      {getFieldDecorator(name,{...otherProps,initialValue:defaultValue,hidden:element.props.hidden||false})(this.renderField())}
    </Form.Item>)
  }
}
