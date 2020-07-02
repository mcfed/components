import * as React from 'react';
// import Button from 'antd/es/button';
import {
  NativeButtonProps,
  ButtonType,
  BaseButtonProps
} from 'antd/es/button/button';
import {Button} from 'antd';

type CustomButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    actionkey: string;
    tip?: string;
    confirm?: string;
    confirmTitle?: string;
    permission?: boolean;
    disabled?: any;
    href?: undefined;
  };

export default class CustomButton extends React.Component<CustomButtonProps> {
  render() {
    const {
      actionkey,
      tip,
      confirm,
      confirmTitle,
      permission,
      ...otherProps
    } = this.props;
    //@ts-ignore
    return <Button {...otherProps} href={undefined} />;
  }
}
