import React,{Component} from 'react'
import {Input,Select} from 'antd'
import PropTypes from 'prop-types'
import './index.less'


export default class FormItemFixed extends Component {

  render(){
    return <div className={ this.props.isResetCss ? "element-text-box" : "element-noreset" }>
      {this.props.children}
    </div>
  }
}


FormItemFixed.propsTypes = {
  isResetCss:PropTypes.bool
}
FormItemFixed.defaultProps = {
  isResetCss:true
}
