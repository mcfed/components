import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'
import './index.less' 

export default class Panel extends Component{
  renderHeader(){
    let header
    const {prefixCls,title,extra}= this.props
    if (title || extra) {
      header = React.createElement(
        "div",
        { className: prefixCls + "-head" },
        React.createElement(
            "div",
            { className: prefixCls + "-head-wrapper" },
            title && React.createElement(
                "div",
                { className: prefixCls + "-head-title" },
                title
            ),
            extra && React.createElement(
                "div",
                { className: prefixCls + "-extra" },
                extra
            )
        ),
      );
    }
    return header
  }
  renderBody(){
    const {props} = this
    const {prefixCls} = this.props
    return  React.createElement("div", { className: prefixCls + '-body' }, props.children);
  }
  renderFooter(){
    let footer

    const {props} = this
    const {prefixCls,onOk,onCancel,okText,cancelText} = this.props
    console.log(this.props)
    const defaultFooter=(props)=>{
      return [
        <Button onClick={onOk} type="primary">{okText}</Button>,
        <Button onClick={onCancel}>{cancelText}</Button>
      ]
    }

    footer = React.createElement("div", { className: prefixCls + '-footer' }, props.footer|| defaultFooter());

    return footer
  }
  render(){

    const {prefixCls} = this.props
    return (
      <div className={`${prefixCls}`}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    )
  }
}


Panel.propTypes = {
  onOK: PropTypes.func.isRequired,
  onCancel:PropTypes.func.isRequired,
  title:PropTypes.string,
  okText:PropTypes.string,
  cancelText:PropTypes.string,
  footer:PropTypes.element,
  confirmLoading:PropTypes.bool
}
Panel.defaultProps = {
  prefixCls:"ant-panel",
  onOK: function(){},
  onCancel:function(){},
  title:"",
  okText:"保存",
  cancelText:"取消",
  footer:undefined,
  confirmLoading:false
}
