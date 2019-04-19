import React from 'react'
import {Tooltip} from 'antd'

  /**
   * 超出截断
   * guor
   * 2019-04-19 16:02:02
   */
  class Ellipsis extends React.Component{
    render(){
      let {text,tooltipText} =  this.props;
      if(typeof tooltipText === 'undefined'){
        tooltipText = text
      }
      return(
        <Tooltip placement="top" title={tooltipText} arrowPointAtCenter>
            <div className="td-ellipsis" {...Object.assign({},this.props)}>
                {text}
            </div>
        </Tooltip>
      )          
    }
  }

  Ellipsis.propTypes = {
    text: propTypes.string.isRequired,
    tooltipText: PropTypes.string
  }  
  Ellipsis.defaultProps = {
    text: 'Ellipsis',
    tooltipText: ''
  }
  export default Ellipsis