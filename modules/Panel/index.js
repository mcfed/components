import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'antd/lib/button'
import Spin from 'antd/lib/spin'
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
    const {prefixCls,onOk,onCancel,okText,cancelText,confirmLoading} = this.props
    // console.log(this.props)
    const defaultFooter=props.footer ? props.footer: (props)=>{
      return [
        <Button loading={confirmLoading} onClick={onOk} type="primary">{okText}</Button>,
        <Button onClick={onCancel}>{cancelText}</Button>
      ]
    }
    if( props.footer !=false){
      footer = React.createElement("div", { className: prefixCls + '-footer' }, defaultFooter());
    }
    return footer
  }
  render(){
    const {prefixCls,loading} = this.props
    return (
      <div className={`${prefixCls}-wrapper`}>
        <Spin spinning={loading}>
          <div className={`${prefixCls}`}>
            {this.renderHeader()}
            {this.renderBody()}
            {this.renderFooter()}
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
  loading:PropTypes.bool
}
Panel.defaultProps = {
  prefixCls:"ant-panel",
  onOk: function(){},
  loading:false,
  onCancel:function(){},
  title:"",
  okText:"确认",
  cancelText:"取消",
  // footer:function(){},
  confirmLoading:false
}
