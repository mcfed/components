import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Button,Spin} from 'antd'
import LocaleReceiver from 'antd/lib/locale-provider/LocaleReceiver'
import Locale from './locale.js'
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

  renderFooterButton(locale){
    const {onOk,onCancel,confirmLoading} = this.props
    return [
      <Button key="submit" loading={confirmLoading} onClick={onOk} type="primary">{locale.okText}</Button>,
      <Button key="cancel" onClick={onCancel}>{locale.cancelText}</Button>
    ]
  }

  renderFooterLocale(locale){
    const {props} = this
    return props.footer ? props.footer(): this.renderFooterButton(locale);
  }
  
  renderFooter(locale){
    let footer
    const {props} = this
    const {prefixCls} = this.props
    if( props.footer !=false){
      footer = React.createElement("div", { className: prefixCls + '-footer' }, this.renderFooterLocale(locale));
    }else{
      footer=null
    }
    return footer
  }
  render(){
    const {prefixCls,loading,locale} = this.props
    return (
      <div className={`${prefixCls}-wrapper`}>
        <Spin spinning={loading}>
          <div className={`${prefixCls}`}>
            {this.renderHeader()}
            {this.renderBody()}
            {
            React.createElement(
              LocaleReceiver,
              {
                componentName:'Panel',
                defaultLocale:Locale
              },
              this.renderFooter.bind(this)
            )
          }
          </div>
        </Spin>
      </div>
    )
  }
}


Panel.propTypes = {
  onOK: PropTypes.func,
  onCancel:PropTypes.func,
  title:PropTypes.string,
  okText:PropTypes.string,
  cancelText:PropTypes.string,
  footer:PropTypes.oneOfType([PropTypes.bool,PropTypes.element,PropTypes.func]),
  confirmLoading:PropTypes.bool,
  locale:PropTypes.object,
  loading:PropTypes.bool
}
Panel.defaultProps = {
  prefixCls:"ant-panel",
  onOk: function(){},
  loading:false,
  onCancel:function(){},
  title:"",
  confirmLoading:false
}
