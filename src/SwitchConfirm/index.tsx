import * as React from 'react';
// import Switch, {SwitchProps} from 'antd/es/switch';
// import Modal, {ModalFuncProps} from 'antd/es/modal';
import {SwitchProps} from 'antd/es/switch';
import {ModalFuncProps} from 'antd/es/modal';
import {Switch, Modal} from 'antd';

interface SwitchConfirmProps extends SwitchProps {
  uncheckedOption?: any;
  checkedOption?: any;
  currentOption?: any;
  onConfirm: (currentOption: any, action?: () => void) => void;
  confirm?: boolean;
  modalConfirmProps?: ModalFuncProps;
}
interface SwitchConfirmState {
  checked: boolean;
}

export default class SwitchConfirm extends React.Component<
  SwitchConfirmProps,
  SwitchConfirmState
> {
  static defaultProps = {
    prefixCls: 'ant-switch'
  };
  constructor(props: SwitchConfirmProps) {
    super(props);
    this.state = {
      checked: false
    };
  }
  componentDidMount() {
    this.setState({
      checked: this.translateChecked(this.props, this.props.checked)
    });
  }
  componentWillReceiveProps(nextProps: SwitchConfirmProps) {
    if (
      this.props.checked !== nextProps.checked ||
      this.props.currentOption !== nextProps.currentOption
    ) {
      this.setState({
        checked: this.translateChecked(nextProps, nextProps.checked)
      });
    }
  }
  translateChecked(currentProps: SwitchConfirmProps, checkedProp?: boolean) {
    const {currentOption, checkedOption} = currentProps;
    if (currentOption !== undefined && checkedOption !== undefined) {
      return currentOption == checkedOption;
    }
    return checkedProp !== undefined ? checkedProp : false;
  }
  translateCustomChecked(checked: boolean) {
    const {uncheckedOption, checkedOption} = this.props;
    if (uncheckedOption !== undefined && checkedOption !== undefined) {
      return checked ? checkedOption : uncheckedOption;
    }
    return checked;
  }
  handleChange(checked: boolean) {
    const _this = this;
    const {modalConfirmProps, onConfirm} = this.props;
    const currentOption = this.translateCustomChecked(checked);
    Modal.confirm({
      ...modalConfirmProps,
      onOk: () => {
        onConfirm(currentOption, () =>
          _this.setState({
            checked: checked
          })
        );
      }
    });
  }

  render() {
    const {
      confirm,
      modalConfirmProps,
      onChange,
      onConfirm,
      currentOption,
      checkedOption,
      uncheckedOption,
      ...otherProps
    } = this.props;
    const {checked} = this.state;
    return (
      <Switch
        {...otherProps}
        checked={checked}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}
