import React from 'react';
import {Button, Modal, Icon} from 'antd';
import {TableProps} from 'antd/es/table/interface';
import {ModalProps} from 'antd/es/modal/Modal';
import {DataTable} from '../index';
interface CProps {
  tableProps?: (value: any, onChange: any) => TableProps<any> | TableProps<any>;
  modalProps: (
    value: any,
    onChange: any,
    changeModalShow: any
  ) => ModalProps | ModalProps;
  customRenderContent?: () => React.ReactNode;
  trggierELement: (value: any, changeModalShow: any) => any;
  value?: any;
  onChange?: any;
}

export default class ModalSelect extends React.Component<CProps, any> {
  state = {
    isModalShow: false
  };

  handleChangeModalVisible(isShow: boolean) {
    this.setState({
      isModalShow: isShow
    });
  }

  renderTriggerElement() {
    const {trggierELement, value} = this.props;
    return trggierELement(value, this.handleChangeModalVisible.bind(this));
  }

  renderContent() {
    const {customRenderContent} = this.props;
    if (customRenderContent !== undefined) {
      return customRenderContent();
    }
    return this.renderDataTable();
  }

  renderDataTable() {
    const {tableProps, value, onChange} = this.props;
    const formatTableProps =
      typeof tableProps === 'function'
        ? tableProps(value, onChange)
        : tableProps;
    if (formatTableProps === undefined) {
      return <DataTable />;
    }
    return <DataTable {...formatTableProps} />;
  }

  render() {
    const {modalProps, value, onChange} = this.props;
    const formatModalProps =
      typeof modalProps === 'function'
        ? modalProps(value, onChange, this.handleChangeModalVisible.bind(this))
        : modalProps;
    return (
      <div>
        {this.renderTriggerElement()}
        <Modal
          onCancel={() => this.handleChangeModalVisible(false)}
          title='select'
          width={700}
          maskClosable={false}
          {...formatModalProps}
          visible={this.state.isModalShow}>
          {this.renderContent()}
        </Modal>
      </div>
    );
  }
}
