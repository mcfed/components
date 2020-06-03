import * as React from 'react';
import Switch, {SwitchProps} from 'antd/es/switch';
import Modal, {ModalFuncProps} from 'antd/es/modal';

interface SwitchConfirmProps extends SwitchProps {
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
      checked: this.translateChecked(this.props.checked)
    });
  }
  componentWillReceiveProps(nextProps: SwitchConfirmProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        checked: this.translateChecked(nextProps.checked)
      });
    }
  }
  translateChecked(checkedProp: boolean | undefined) {
    return checkedProp !== undefined ? checkedProp : false;
  }
  handleChange(checked: boolean) {
    const _this = this;
    const {modalConfirmProps} = this.props;
    Modal.confirm({
      ...modalConfirmProps,
      onOk: () => {
        _this.setState({
          checked: checked
        });
      }
    });
  }

  render() {
    const {confirm, modalConfirmProps, onChange, ...otherProps} = this.props;
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
