import React, {Component} from 'react';
import {Collapse} from 'antd';
import FormItem from '../FormItem/index';

import './index.less';
const Panel = Collapse.Panel;

interface CollapsePanelState {
  active: boolean;
}

interface CollapsePanelProps {
  children?: React.ReactNode;
}

interface CollapsePanelP {}

export default class CollapsePanel extends Component<
  CollapsePanelProps,
  CollapsePanelState
> {
  render() {
    const {children} = this.props;
    return <div></div>;
  }
}
