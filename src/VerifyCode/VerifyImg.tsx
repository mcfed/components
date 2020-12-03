import React, {ReactNode} from 'react';
import VerifyCode, {VerifyCodeProps} from './VerifyCode';

export interface IMGVerifyCodeProps extends VerifyCodeProps {
  /**
   * 点击按钮之后调用的回调函数
   */
  retry: any;
  /**
   * 图片的url地址
   */
  url: string;
}

export interface IMGVerifyCodeState {
  random: number;
}

export default class ImgVerifyCode extends VerifyCode<
  IMGVerifyCodeProps,
  IMGVerifyCodeState
> {
  handlerClick() {
    const {retry} = this.props;
    retry && retry();
    this.setState({
      random: new Date().valueOf()
    });
  }
  renderAddon(): ReactNode {
    const {url} = this.props;
    const {random} = this.state;
    return (
      <img
        className='addon-content'
        src={`${url}?d=${random}`}
        alt='看不清，换一张'
        onClick={this.handlerClick.bind(this)}
      />
    );
  }
}
