import * as React from 'react';
import Switch, {SwitchProps} from 'antd/es/switch';
import Modal, {ModalFuncProps} from 'antd/es/modal';

interface SwitchConfirmProps extends SwitchProps {
  checkedOption?: any;
  currentOption?: any;
  onConfirm: (checked: boolean, action?: () => void) => void;
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
    if (this.props.checked !== nextProps.checked) {
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
  handleChange(checked: boolean) {
    const _this = this;
    const {modalConfirmProps, onConfirm} = this.props;
    Modal.confirm({
      ...modalConfirmProps,
      onOk: () => {
        onConfirm(checked, () =>
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
