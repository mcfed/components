import * as React from 'react';
// import Button from 'antd/es/button';
import {NativeButtonProps, ButtonType} from 'antd/es/button/button';
import {Button} from 'antd';

type CustomButtonProps = NativeButtonProps & {
  actionkey: string;
  tip?: string;
  confirm?: string;
  confirmTitle?: string;
  permission?: boolean;
  disabled?: any;
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
    return <Button {...otherProps} />;
  }
}
