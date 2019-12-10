import React, {Component} from 'react';
import {Switch} from 'antd';

export default class SwitchFixed extends Component {
  constructor(props) {
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
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        checked: nextProps.value ? true : false
      });
    }
  }
  handleSwitchChange(checked) {
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
