import React, {FunctionComponent} from 'react';

interface IToolBarProps {
  className?: string;
}

const ToolBar: FunctionComponent<IToolBarProps> = props => {
  const {children, className = ''} = props;
  return <div className={`tool-bar ${className}`}>{children}</div>;
};

export default ToolBar;
