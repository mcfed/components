import React from 'react'
import PropTypes from 'prop-types'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Input from 'antd/lib/input'
import Modal from 'antd/lib/modal'
import Button from 'antd/lib/button'
// import Transfer from 'antd/lib/Transfer'
import message from 'antd/lib/message'
import Select from 'antd/lib/select'
import classNames from 'classnames'
import SubmitForm from '../BaseForm'
import FormItem from '../FormItem'
import Permission from '../Permission'

// import './AdvancedSearch.less'

const Option = Select.Option


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
  }
  componentWillMount(){
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

  handleReset = () => {
    this.form.resetFields();
  }

  toggleExpand = () => {
    const {expand} = this.state;
    this.setState({
      expand: !expand
    });
  }

  // To generate mock Form.Item
  getFields() {
    const {children,layout,classNames} = this.props
    let renderChildren;
    const formItemLayout = layout && layout!=='inline'? {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    }:{};
    // console.log(formItemLayout)
    if(React.Children.count(children)===0){
      return (null)
    }
    // if(this.state.expand==false ){
    //   renderChildren = children.filter((ch,idx)=>idx<3)
    // }else if(this.props.showConfig){  //高级配置后，前三固定 后四配置
    if(this.props.showConfig){  //高级配置后，前三固定 后四配置
      renderChildren = React.Children.toArray(children).filter((ch,idx)=>{
        //return this.state.displayItem.indexOf(ch.props.name)>=0 || idx<3
        return this.state.displayItem.indexOf(ch.props.name)>=0 || idx < this.props.showExpand
      })
    }else{
      renderChildren = React.Children.toArray(children).filter((ch,idx)=>idx< (this.props.showExpand + 4) )
    }
    return renderChildren.map((it, i) => {
      return (
        <Col span={6} key={i}>
          <FormItem colon={true} {...formItemLayout} containerTo={false} className={classNames}>
            {React.cloneElement(it) }
          </FormItem>
        </Col>
      )
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
  render() {
    let {showConfig,children,className,autoSubmitForm,layout} = this.props
    return (
      <div className={classNames("advanced-search-panel",className)}>
        <SubmitForm layout={layout} autoSubmitForm={autoSubmitForm} className="advanced-search-form" onSubmit={this.handleSearch.bind(this)} wrappedComponentRef={this.saveFormRef.bind(this)}>
          { this.renderKeyword() }
          <div className="advanced-search-toolbar">
							<Button htmlType="submit" onClick={this.handleSearch.bind(this)} type="primary">搜索</Button>
							<Button htmlType="reset" onClick={this.handleReset.bind(this)}>重置</Button>
          </div>
        </SubmitForm>
      </div>
    );
  }
}

AdvancedSearchForm.propTypes = {
  filterSubmitHandler: PropTypes.func,
  showConfig:PropTypes.bool,
  footer:PropTypes.element,
  showExpand:PropTypes.number
}

AdvancedSearchForm.defaultProps = {
  autoSubmitForm:false,
  showConfig:false,
  module:"",
  filterSubmitHandler: function() {},
	showExpand:3,
	layout:'horizontal'
}

//export default AdvancedSearchForm = Form.create()(AdvancedSearchForm)
