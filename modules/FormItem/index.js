import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {Select,Input,Form} from 'antd'
import {TreeSelectPicker} from '../TreeView/index'

export default class FormItem extends Component{
  constructor(props) {
    super(props);

    if(props.fetch instanceof Array){
      this.state={
        childData:props.fetch
      }
    }else{
      this.state={
        childData:[]
      }
    }
  }

  static defaultProps = {
    containerTo:true
  }
  static contextTypes = {
      formRef: PropTypes.object,
      formLayout:PropTypes.object
  }

  componentWillReceiveProps(nextProps){
    let {children} = nextProps
    let field=children
    if(field.props.fetch instanceof Array){
      this.setState({
        childData:field.props.fetch
      });
    }
    if(field.props.fetch && typeof(field.props.fetch) === 'string' && field.props.fetch !==this.props.children.props.fetch)
    {
        this.fetchData(field.props.fetch,field.props.params)
    }

  }
  componentWillMount() {
    let {children} = this.props
    let field=children;
    if(typeof(field.props.fetch)=== 'string' && field.props.fetch.length>0){
        this.fetchData(field.props.fetch,field.props.params)
    }else if(field.props.fetch instanceof Array){
        this.setState({
          childData:field.props.fetch
        });
      }
  }
  /**
   * [fetchData 获取远程接口数据]
   * @param  {[type]} fetchUrl [description]
   * @return {[type]}          [description]
   */
  fetchData(fetchUrl,params){
    // let body={}
    if(params && /\/listJson?$/.test(fetchUrl)?'POST':'GET'){
      // body={body:params}
    }
    // new FetchAPI().fetch(fetchUrl,{
    //   ...body,
		// 	method:/\/listJson?$/.test(fetchUrl)?'POST':'GET' //兼容listJSON 使用POST请求处理
    // }).then((json) => {
    //     this.setState({
    //       childData:json.list|| json ||[]
    //     });
    // });
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
        getPopupContainer:()=>ReactDOM.findDOMNode(this)
      }
    }

    // console.log("TreeSelectPicker",field.type.name)
    if(field.type == TreeSelectPicker){
      treeDataProp={
        treeData:this.loopTreeData(childData)
      }
    //  console.log(treeDataProp)
    }
    if(childData.length===0){
      return React.createElement(field.type,Object.assign({},otherProps,containerToProp,treeDataProp))
    }else if(field.props.renderItem){
      return React.createElement(field.type,Object.assign({},otherProps,containerToProp,treeDataProp),childData.map((d,idx) =>field.props.renderItem && field.props.renderItem(d,idx)))
      // return (
      //   <field.type {...otherProps} {...containerToProp} >
      //     {childData.map((d,idx) =>field.props.renderItem && field.props.renderItem(d,idx))}
      //   </field.type>)
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
    let {name,label} = element.props
    let {defaultValue,allowClear,...otherProps} =element.props
    let {formRef:{getFieldDecorator},formLayout}= this.context
//    console.log(formRef)
    let styles={}
    // 类型转换
    // if(element.type.name=='CalendarPicker'){
    //   defaultValue=[(defaultValue[0]==""|| !defaultValue[0]) ?null:moment(defaultValue[0]),(defaultValue[1]==""|| !defaultValue[1])?null:moment(defaultValue[1])]
    // }
    //  reset antd-form-item  marginBottom value
    if(element.type===Input && element.props.type==="hidden"){
      styles={
        style:{marginBottom:0}
      }
    }
		//console.log(otherProps)
    /*
      {getFieldDecorator(name,{...otherProps,initialValue:defaultValue})(this.renderField())}
    */
    return (<Form.Item label={label} {...Object.assign({},{},this.props)} colon={false} {...styles}>
      {getFieldDecorator(name,{...otherProps,initialValue:defaultValue})(this.renderField())}
    </Form.Item>)
  }
}
