import React, {Component} from 'react';
import {TimePicker, Input} from 'antd';
import moment from 'moment';
import './index.less';

const InputGroup = Input.Group;

export default class TimeRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.translateTime(props.value)};
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.value) !== JSON.stringify(nextProps.value)) {
      this.setState({...this.translateTime(nextProps.value)});
    }
  }
  translateTime(val) {
    return {
      startTime: val && val[0] ? moment(val[0], ['hh:mm']) : '',
      endTime: val && val[1] ? moment(val[1], ['hh:mm']) : ''
    };
  }
  hanldeChange(type, val) {
    let {onChange} = this.props;
    val = val ? val : '';

    if (type === 'start') {
      this.setState(
        {
          startTime: val
        },
        () => {
          onChange([
            this.formatTime(this.state.startTime),
            this.formatTime(this.state.endTime)
          ]);
        }
      );
    } else if (type === 'end') {
      this.setState(
        {
          endTime: val
        },
        () => {
          onChange([
            this.formatTime(this.state.startTime),
            this.formatTime(this.state.endTime)
          ]);
        }
      );
    }
  }

  formatTime(momentTime) {
    let {format} = this.props;
    return momentTime ? moment(momentTime, ['hh:mm']).format(format) : '';
  }

  render() {
    let {format} = this.props;
    let {startTime, endTime} = this.state;
    console.log(startTime, endTime);
    return (
      <InputGroup compact className='TimeRangePicker-compact'>
        <TimePicker
          onChange={this.hanldeChange.bind(this, 'start')}
          value={startTime}
          format={format}
        />
        <TimePicker
          onChange={this.hanldeChange.bind(this, 'end')}
          value={endTime}
          format={format}
        />
      </InputGroup>
    );
  }
}
