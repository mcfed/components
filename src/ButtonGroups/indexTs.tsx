import * as React from 'react';
import {BaseButtonProps} from 'antd/es/button';
// import Tooltip from 'antd/es/tooltip';
// import Menu from 'antd/es/menu';
// import Icon from 'antd/es/icon';
// import Dropdown from 'antd/es/dropdown';
// import Modal, {ModalFuncProps} from 'antd/es/modal';
import {ModalFuncProps} from 'antd/es/modal';
import {Button, Tooltip, Menu, Icon, Dropdown, Modal} from 'antd';

interface ButtonGroupsType {
  handleClick: (actionkey: string) => void;
  children: React.ReactElement<CustomButton>[];
  mode: 'ButtonGroup' | 'ButtonMenu';
  showSize: number;
  viewMode: 'text' | 'icon' | 'both'; //todo
}

interface ConfirmType extends ModalFuncProps {
  children: any;
  onConfirm: () => void;
}

class Confirm extends React.Component<ConfirmType> {
  handleConfirmClick() {
    const {title, content, onConfirm} = this.props;
    return Modal.confirm({
      title: title,
      content: content,
      onOk: onConfirm
    });
  }
  //此处的createElement 直接用children 无法正常使用 小坑
  render() {
    const {children} = this.props;
    return React.createElement(
      children.type,
      {
        ...children.props,
        onClick: this.handleConfirmClick.bind(this)
      },
      children.props.children
    );
  }
}

export class ButtonGroups extends React.Component<ButtonGroupsType> {
  static CustomButton: typeof CustomButton;
  static defaultProps = {
    showSize: 5,
    handleClick: function(actionkey: string) {},
    viewMode: 'text',
    mode: 'ButtonGroup'
  };
  // static CustomButton: typeof CustomButton;
  filterChildren(childrenArray: any) {
    return childrenArray.filter((it: React.ReactElement) => {
      if (it.props.permission === undefined) {
        return true;
      } else {
        return it.props.permission && it.props.permission === true;
      }
    });
  }
  formatTooltipTitle(item: any): string {
    return item.tip || item.children;
  }
  completeIconProp() {}
  renderNormalChild(it: any, idx: number): React.ReactNode {
    const {handleClick} = this.props;
    const {
      actionkey,
      tip,
      confirm,
      confirmTitle,
      children,
      ...btnProps
    } = it.props;
    const title = this.formatTooltipTitle(it.props);
    return React.createElement(
      Tooltip,
      {key: idx, title: title},
      React.createElement(
        //@ts-ignore
        Button,
        {
          ...btnProps,
          onClick: () => {
            handleClick(actionkey);
          }
        },
        children
      )
    );
  }
  renderConfirmChild(it: any, idx: number): React.ReactNode {
    const {handleClick} = this.props;
    const {
      tip,
      confirm,
      confirmTitle,
      actionkey,
      children,
      ...otherProps
    } = it.props;
    const title = this.formatTooltipTitle(it.props);
    return React.createElement(
      Confirm,
      //@ts-ignore
      {
        key: idx,
        title: confirmTitle,
        content: confirm,
        onConfirm: () => {
          handleClick(actionkey);
        }
      },
      React.createElement(
        Tooltip,
        {
          key: idx,
          title: title
        },
        React.createElement(
          //@ts-ignore
          Button,
          {...otherProps},
          children
        )
      )
    );
  }
  renderReactElement(it: any, idx: number) {
    const {disabled, confirm} = it.props;
    if (confirm && !disabled) {
      return this.renderConfirmChild(it, idx);
    } else {
      return this.renderNormalChild(it, idx);
    }
  }
  renderButtonOnly(): React.ReactNode[] {
    const childrenArray = React.Children.toArray(this.props.children);

    return this.filterChildren(childrenArray).map((it: any, idx: number) => {
      return this.renderReactElement(it, idx);
    });
  }
  renderMenuChild(it: any, idx: number): React.ReactNode {
    let {tip, children} = it.props;
    return React.createElement(
      Tooltip,
      Object.assign({}, {key: idx, title: tip}),
      React.cloneElement(it, Object.assign({}, it.props), children)
    );
  }
  renderMenuItem(itemList: any) {
    const {handleClick} = this.props;
    return (
      <Menu onClick={handleClick.bind(this, 'menu')}>
        {itemList.map((it: any, idx: number) => {
          return (
            <Menu.Item key={idx}>{this.renderMenuChild(it, idx)}</Menu.Item>
          );
        })}
      </Menu>
    );
  }
  renderMixButtonMenu(): React.ReactNode {
    let {children, showSize} = this.props;
    let childrenArray = React.Children.toArray(children);
    let endArray = childrenArray.splice(showSize);
    return (
      <React.Fragment>
        {childrenArray.map((it, idx) => {
          return this.renderReactElement(it, idx);
        })}
        <Dropdown overlay={this.renderMenuItem(endArray)}>
          <Button>
            <Icon type='ellipsis' />
          </Button>
        </Dropdown>
      </React.Fragment>
    );
  }
  renderChildren() {
    const {mode} = this.props;
    return (
      <Button.Group>
        {mode === 'ButtonGroup'
          ? this.renderButtonOnly()
          : this.renderMixButtonMenu()}
      </Button.Group>
    );
  }
  render() {
    return <div className='button-groups'>{this.renderChildren()}</div>;
  }
}

type CustomButtonProps = BaseButtonProps & {
  actionkey: string;
  tip?: string;
  confirm?: string;
  confirmTitle?: string;
};

export class CustomButton extends React.Component<CustomButtonProps> {
  render() {
    const {actionkey, tip, confirm, confirmTitle, ...otherProps} = this.props;
    return <Button {...otherProps} href='undefined' />;
  }
}

ButtonGroups.CustomButton = CustomButton;

export default ButtonGroups;
