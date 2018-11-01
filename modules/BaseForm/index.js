import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Form} from 'antd'

const FormCreate = Form.create

class BaseForm extends Component{
  static childContextTypes = {
     formRef : PropTypes.any,
     formLayout:PropTypes.object
  }
  static propTypes={
     layout:PropTypes.oneOf(['horizontal','inline','vertical']),
     itemLayout:PropTypes.object
  }

  static defaultProps = {
    prefixCls: 'ant-form',
    layout:'horizontal',
    itemLayout:{
      labelCol:{
        span:6
      },
      wrapperCol:{
        span:18
      }
    }
  }
  getChildContext(){
     var { form,itemLayout } =this.props;
    //  console.log("getChildContext",form)
     return {
         formRef:form,
         formLayout:itemLayout
     };
  }
  render(){
    const {autoSubmitForm,itemLayout,children,...otherProps} = this.props
    // console.log(otherProps.form)
  	return React.createElement(Form,otherProps,children)
  }
}

const SubmitForm =FormCreate()(BaseForm)

export default SubmitForm
/**
 * [AdvancedForm  高级Form组件带valuesChange特征]
 * @extends BaseForm
 */

class AdvancedForm extends SubmitForm{
  static propTypes={
    layout:PropTypes.oneOf(['horizontal','inline','vertical']),
    itemLayout:PropTypes.object
  }
  static defaultProps = {
     // containerTo:true,
    prefixCls: 'ant-form',
    layout:"horizontal",
    itemLayout:{
      labelCol:{
        span:6
      },
      wrapperCol:{
        span:18
      }
    }
  }
}




export {AdvancedForm}
