import React, {ReactNode} from 'react';
import {Button} from 'antd';
import VerifyCode, {VerifyCodeProps} from './VerifyCode';

export interface SMSVerifyProps extends VerifyCodeProps {
  title?: string;
  interval?: number;
  retry?: Function;
  disabled?: boolean;
}

export interface SMSVerifyState {
  timer?: NodeJS.Timeout;
  countdown?: number;
}

export default class VerifySMS extends VerifyCode<
  SMSVerifyProps,
  SMSVerifyState
> {
  static defaultProps = {
    interval: 60
  };

  state: SMSVerifyState = {
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
    const {title = '获取验证码', disabled = false} = this.props;
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
