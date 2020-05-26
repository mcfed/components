import React, {Component} from 'react';
import {Switch} from 'antd';

interface SwitchFixedProps {
  value: any;
  onChange: any;
}

interface SwitchFixedStates {
  checked: boolean;
}

export default class SwitchFixed extends Component<
  SwitchFixedProps,
  SwitchFixedStates
> {
  constructor(props: SwitchFixedProps) {
    super(props);
    this.state = {
      checked: false
    };
  }
  componentDidMount() {
    this.setState({
      checked: this.props.value ? true : false
    });
  }
  componentWillReceiveProps(nextProps: SwitchFixedProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        checked: nextProps.value ? true : false
      });
    }
  }
  handleSwitchChange(checked: boolean) {
    this.setState(
      {
        checked: checked
      },
      () => {
        this.props.onChange(checked);
      }
    );
  }
  render() {
    const {value, ...otherProps} = this.props;
    const {checked} = this.state;
    return (
      <Switch
        onChange={this.handleSwitchChange.bind(this)}
        {...otherProps}
        checked={checked}
      />
    );
  }
}
