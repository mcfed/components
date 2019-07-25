import React, { Component } from "react";
import { Collapse } from "antd";
import PropTypes from "prop-types";
import FormItem from "../FormItem/index";

import "./index.less";
const Panel = Collapse.Panel;

export default class CollapsePanel extends Component {
  state = {
    active: true
  };
  static contextTypes = {
    formRef: PropTypes.object
  };
  componentDidMount() {
    this.setActiveStatus();
  }
  componentWillReceiveProps() {
    this.setActiveStatus();
  }
  setActiveStatus() {
    const { formRef } = this.context;
    const { control } = this.props;
    this.setState({
      active: this.isExtraIsReactDom(control)
        ? Boolean(formRef.getFieldValue(control.props.name))
        : true
    });
  }
  isExtraIsReactDom(extra) {
    return typeof extra === "object" && typeof extra.$$typeof === "symbol";
  }

  renderHeader() {
    let { title } = this.props;
    return (
      <div className="CollapsePanel-header">
        <h5 className="CollapsePanel-title">
          {title}
          <div className="CollapsePanel-extra">{this.renderExtra()}</div>
        </h5>
      </div>
    );
  }
  renderExtra() {
    let { control } = this.props;
    return this.isExtraIsReactDom(control)
      ? React.createElement(FormItem, {}, control)
      : control;
  }
  render() {
    const { children, title, control, ...otherProps } = this.props;
    let { active } = this.state;
    return (
      <Panel header={this.renderHeader()} {...otherProps} isActive={active}>
        {children}
      </Panel>
    );
  }
}

CollapsePanel.propTypes = {
  // showExpand: PropTypes.number
};
