import React, {ReactNode} from 'react';
import {Button} from 'antd';
import VerifyCode, {VerifyCodeProps} from './VerifyCode';

export interface PhoneServiceVerifyProps extends VerifyCodeProps {
  title?: string;
  interval?: number;
  retry?: Function;
  disabled?: boolean;
}

export interface PhoneServiceVerifyState {
  timer?: NodeJS.Timeout;
  countdown?: number;
}

export default class VerifyPhoneService extends VerifyCode<
  PhoneServiceVerifyProps,
  PhoneServiceVerifyState
> {
  static defaultProps = {
    interval: 60
  };

  state: PhoneServiceVerifyState = {
    timer: undefined,
    countdown: undefined
  };

  handleClick() {
    if (this.state.countdown) return;
    const {retry, interval} = this.props;
    retry && retry();
    this.setState({
      countdown: interval
    });
    const timer = setInterval(() => {
      if (this.state.countdown) {
        this.setState(({countdown}) => ({
          countdown: (countdown as number) - 1
        }));
      } else if (this.state.timer) {
        clearInterval(this.state.timer);
      }
    }, 1000);
    this.setState({timer});
  }

  renderAddon(): ReactNode {
    const {countdown} = this.state;
    const {title = '发送', disabled = false} = this.props;
    if (countdown) {
      return <Button className='sms-btn' disabled>{`${countdown}s`}</Button>;
    }
    return (
      <Button
        type='default'
        className='sms-btn'
        disabled={disabled}
        onClick={this.handleClick.bind(this)}>
        {title}
      </Button>
    );
  }
}
