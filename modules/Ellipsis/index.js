import React from 'react'
import PropTypes from 'prop-types'
import {Tooltip} from 'antd'
import './index.less'

  /**
   * 超出截断
   * guor
   * 2019-04-19 16:02:02
   */
  class Ellipsis extends React.Component{
    render(){
      let {text,tooltiptext,...otherProps} =  this.props;
      if(typeof tooltiptext === 'undefined'){
        tooltiptext = text
      }
      return(
        <Tooltip placement="bottomLeft" title={tooltiptext} arrowPointAtCenter>
            <div className="td-ellipsis" {...Object.assign({},otherProps)}>
                {text}
            </div>
        </Tooltip>
      )
    }
  }

  Ellipsis.propTypes = {
    /**
    需要显示的text文本
    **/
    text: PropTypes.string.isRequired,
    /**
    扩展显示的tooltipText文本，在出现text与tooltipText不一样的场景时使用
    **/
    tooltiptext: PropTypes.string
  }
  Ellipsis.defaultProps = {
    text: 'Ellipsis',
  }
  export default Ellipsis
