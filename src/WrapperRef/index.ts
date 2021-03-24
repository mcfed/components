import * as React from 'react';

interface WrapperRefProps {
  /**
   * 包裹的子组件
   */
  children: React.ReactElement;
}
export default class WrapperRef extends React.Component<WrapperRefProps> {
  render() {
    const {children} = this.props;
    return React.cloneElement(children, {
      ...children.props,
      ...this.props
    });
  }
}
