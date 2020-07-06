import React, {useEffect, FunctionComponent} from 'react';
import {Tooltip} from 'antd';

interface EllipsisProps {
  text: string;
  tooltiptext?: string;
}

/**
 * 超出截断
 */
const Ellipsis: FunctionComponent<EllipsisProps> = ({
  text,
  tooltiptext,
  ...otherProps
}) => {
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
