import React, {useEffect} from 'react';
import {Tooltip} from 'antd';
import './index.less';

/**
 * 超出截断
 */
const Ellipsis = ({text, tooltiptext}) => {
  useEffect(() => {}, [text, tooltiptext]);
  if (typeof tooltiptext === 'undefined') {
    tooltiptext = text;
  }
  return (
    <Tooltip autoAdjustOverflow title={tooltiptext} arrowPointAtCenter>
      <div className='td-ellipsis' {...Object.assign({}, otherProps)}>
        {text}
      </div>
    </Tooltip>
  );
};

Ellipsis.defaultProps = {
  text: ''
};
export default Ellipsis;
