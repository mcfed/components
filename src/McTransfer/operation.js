import React from 'react';
import {LeftOutlined, RightOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import PropTypes from 'prop-types';

export function noop() {}

const Operation = ({
  moveToLeft,
  moveToRight,
  leftArrowText,
  rightArrowText,
  leftActive,
  rightActive,
  className
}) => {
  const moveToLeftButton = (
    <Button
      type='primary'
      size='small'
      disabled={!leftActive}
      onClick={moveToLeft}>
      {
        <span>
          <LeftOutlined />
          {leftArrowText}
        </span>
      }
    </Button>
  );
  const moveToRightButton = (
    <Button
      type='primary'
      size='small'
      disabled={!rightActive}
      onClick={moveToRight}>
      {
        <span>
          {rightArrowText}
          <RightOutlined />
        </span>
      }
    </Button>
  );
  return (
    <div className={className}>
      {moveToRightButton}
      {moveToLeftButton}
    </div>
  );
};

Operation.defaultProps = {
  leftArrowText: '',
  rightArrowText: '',
  moveToLeft: noop,
  moveToRight: noop
};

Operation.propTypes = {
  moveToLeft: PropTypes.func,
  moveToRight: PropTypes.func,
  leftArrowText: PropTypes.string,
  rightArrowText: PropTypes.string,
  leftActive: PropTypes.bool.isRequired,
  rightActive: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired
};

export default Operation;
