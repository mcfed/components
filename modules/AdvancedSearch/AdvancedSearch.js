import React from 'react'
import PropTypes from 'prop-types'
import {Row,Col,Icon,Button,Input} from 'antd'
import LocaleReceiver from 'antd/lib/locale-provider/LocaleReceiver'
import classNames from 'classnames'
import SubmitForm from '../BaseForm'
import FormItem from '../FormItem'
import Permission from '../Permission'
import Locale from './locale.js'
import style from  './AdvancedSearch.less'

export default class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
    defKeyType:null,
    placeHolder:"",
    items:[],
    show:false,
    displayItem:[]
  }

  constructor(props) {
    super(props);
    this.state.loading=props.loading
  }

  handleSearch = (e,values) => {
    e.preventDefault()
    let {filterSubmitHandler} = this.props
    if(values){
      filterSubmitHandler.call(this,values);
    }else{
      this.form.validateFieldsAndScroll((err, values) => {
        // console.log(this.form.getFieldsValue())
        // console.log(values)
        filterSubmitHandler.call(this,values);
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loading !== this.props.loading){
      this.setState({
        loading:nextProps.loading
      })
    }
  }

  handleReset = () => {
    const form=this.form
    const values=form.getFieldsValue();
    let emptyValue={}
    // this.form.resetFields();
    for(var v in values){
      // console.log(v)
      if(values.hasOwnProperty(v)){
        emptyValue[v]=undefined
      }
    }
    // console.log(emptyValue)
    form.setFieldsValue(emptyValue)
  }

  toggleExpand(){
    const {expand} = this.state;
    this.setState({
      expand: !expand
    });
  }

  // To generate mock Form.Item
  getFields() {
    const {children,layout,classNames,showExpand} = this.props
    let renderChildren;
    let formItemLayout = layout && layout!=='inline'? {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16
      }
    }:{};
    if(React.Children.count(children)===0){
      return (null)
    }

    if(this.state.expand==false ){
      renderChildren =[].concat(children).filter((ch,idx)=>idx<showExpand)
    }else if(this.props.showConfig){  //高级配置后，前三固定 后四配置
      renderChildren = React.Children.toArray(children).filter((ch,idx)=>{
        //return this.state.displayItem.indexOf(ch.props.name)>=0 || idx<3
        return this.state.displayItem.indexOf(ch.props.name)>=0 || idx < showExpand
      })
    }else{
      renderChildren = React.Children.toArray(children).filter((ch,idx)=>idx< (showExpand + 4) )
    }
    return renderChildren.map((it, i) => {

      let columns = it.props.columns || 1
      let labelNum = Math.round(8/columns),
        spancols = 8 * columns
      formItemLayout = Object.assign({},formItemLayout,{
        labelCol:{
          span:labelNum
        },
        wrapperCol:{
          span: 24 - labelNum
        }
      })

      // console.log(it.type.name,123)
      if(it.type.name === "Input"){
        return (
          <Col span={ spancols }  key={i}>
            <FormItem colon={true} {...formItemLayout} containerTo={false} className={classNames}>
              {React.cloneElement(it) }
            </FormItem>
          </Col>
        )
      }else{
        return (
          <Col span={ spancols } key={i}>
            <FormItem colon={true} {...formItemLayout} containerTo={false} className={classNames}>
              {React.cloneElement(it ,{allowClear : it.props.allowClear == false ? false : true }) }
            </FormItem>
          </Col>
        )
      }
    })
    //return children;
  }

  onTypeChange(value,option){
    this.setState({
      placeHolder:option.props.placeholder
    })
  }
  handleAdvancedMenu(obj) {
    if (obj.key === 'advanced') {
      alert("call advanced")
    } else if (obj.key === 'clear') {
      this.handleReset()
    } else if (obj.key === 'preview') {
      alert("call restore")
    }
  }

  handleClose(){
    this.setState({
      show:false
    })
  }
  saveFormRef(insta) {
    if(insta){
      this.form = insta.props.form;
    }
  }

  renderKeyword(){
    return (
      <Row gutter={20}>
        {/* this.renderKeyCatalog() */}
        { this.getFields()}
      </Row>
    )
  }
  renderSearchToolbar(locale){
    let {loading,expand} = this.state
    const {children,showExpand} = this.props
    // console.log(this)
    return (
      <div className="advanced-search-toolbar">
				<Button htmlType="submit" disabled={loading} onClick={this.handleSearch.bind(this)} type="primary">{locale.searchText}</Button>
        {
          children.length>showExpand?
    				<Button type="ghost" onClick={this.toggleExpand.bind(this)} >{expand?locale.upText:locale.downText}<Icon type={expand?"up":"down"} /></Button>
          :""
        }
      </div>)
  }
  render() {
    let {showConfig,children,className,autoSubmitForm,layout,locale} = this.props
    return (
      <div className={classNames("advanced-search-panel",className)}>
        <SubmitForm layout={layout} autoSubmitForm={autoSubmitForm} className="advanced-search-form" onSubmit={this.handleSearch.bind(this)} wrappedComponentRef={this.saveFormRef.bind(this)}>
          { this.renderKeyword() }
          {
            React.createElement(
              LocaleReceiver,
              {
                componentName:'AdvancedSearch',
                defaultLocale:Locale
              },
              this.renderSearchToolbar.bind(this)
            )
          }
        </SubmitForm>
      </div>
    );
  }
}

AdvancedSearchForm.propTypes = {
  filterSubmitHandler: PropTypes.func,
  showConfig:PropTypes.bool,
  loading:PropTypes.bool,
  footer:PropTypes.element,
  locale:PropTypes.object,
  showExpand:PropTypes.number,
}

AdvancedSearchForm.defaultProps = {
  autoSubmitForm:false,
  showConfig:false,
  loading:false,
  filterSubmitHandler: function() {},
	showExpand:3,
	layout:'horizontal'
}

//export default AdvancedSearchForm = Form.create()(AdvancedSearchForm)
