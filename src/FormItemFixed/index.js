import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.less';

export default class FormItemFixed extends Component {
  render() {
    const firstChildType = React.Children.toArray(this.props.children).length
      ? typeof React.Children.toArray(this.props.children)[0]
      : 'string';
    const isResetCss = this.props.isResetCss;
    return (
      <div
        className={classNames({
          'element-text-box': isResetCss,
          'element-noreset': !isResetCss,
          isBeteen: firstChildType === 'string'
        })}
        style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

FormItemFixed.propsTypes = {
  isResetCss: PropTypes.bool
};
FormItemFixed.defaultProps = {
  isResetCss: true
};
