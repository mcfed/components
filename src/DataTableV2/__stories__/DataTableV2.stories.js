import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'antd';
import {action} from '@storybook/addon-actions';

import DataTableV2 from '../index';
import {demoColumns, demoData} from './mock';

const stories = storiesOf('DataTableV2', module);

const CHECK_TYPE = DataTableV2.CHECK_TYPE;

class DataTableV2Demo extends React.Component {
  state = {
    dataSource: demoData,
    loading: false,
    selectedRowKeys: [],
    checkType: '',
    page: {
      current: 1,
      pageSize: 10,
      total: demoData.length,
    },
  };

  refreshTimer = null;

  componentWillUnmount() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
  }

  handleRefresh = () => {
    action('DataTableV2 onRefresh')();
    this.setState({loading: true});
    this.refreshTimer = setTimeout(() => {
      this.setState({loading: false});
    }, 600);
  };

  handleTableChange = (pagination, filters, sorter, extra) => {
    action('DataTableV2 onChange')({
      pagination,
      filters,
      sorter,
      extra,
    });
    this.setState((prevState) => ({
      page: {
        ...prevState.page,
        current: pagination.current,
        pageSize: pagination.pageSize,
      },
    }));
  };

  clearSelectRows = () => {
    this.setState({
      selectedRowKeys: [],
      checkType: '',
    });
  };

  render() {
    const {dataSource, loading, selectedRowKeys, checkType, page} = this.state;
    const disabledCount = dataSource.filter((item) => item.disabled).length;

    const rowSelection = {
      selectedRowKeys,
      getCheckboxProps: (record) => ({
        disabled: record.disabled,
      }),
      onChange: (nextSelectedRowKeys) => {
        this.setState({
          selectedRowKeys: nextSelectedRowKeys,
          checkType: CHECK_TYPE.单选,
        });
      },
    };

    return (
      <div style={{padding: 24, background: '#f5f7fb'}}>
        <div
          style={{
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <div>
            <h3 style={{margin: 0}}>DataTableV2 功能测试</h3>
            <div style={{marginTop: 6, color: '#667085'}}>
              已选 {selectedRowKeys.length} 项，当前选择模式：
              {checkType || '未选择'}
            </div>
          </div>
          <Button onClick={this.clearSelectRows}>清空选择状态</Button>
        </div>
        <div
          style={{
            padding: '52px 16px 16px',
            background: '#fff',
            border: '1px solid #e6e9f0',
            borderRadius: 4,
          }}>
          <DataTableV2
            className=''
            namespace='datatable-v2-story-demo'
            rowKey='id'
            columns={demoColumns}
            dataSource={dataSource}
            loading={loading}
            checkAll
            showSelectClear
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={(nextSelectedRowKeys) => {
              this.setState({selectedRowKeys: nextSelectedRowKeys});
            }}
            checkType={checkType}
            setCheckType={(nextCheckType) => {
              this.setState({checkType: nextCheckType});
            }}
            clearSelectRows={this.clearSelectRows}
            disabledCount={disabledCount}
            rowSelection={rowSelection}
            page={page}
            pagination={{
              showSizeChanger: true,
              showQuickJumper: true,
              pageSizeOptions: ['10', '20', '50'],
              showTotal: (total) => `共 ${total} 条测试数据`,
            }}
            scroll={{x: 1600}}
            defaultSort={{
              columnKey: 'amount',
              order: 'descend',
            }}
            onRefresh={this.handleRefresh}
            onChange={this.handleTableChange}
          />
        </div>
      </div>
    );
  }
}

stories.add('功能测试页', () => <DataTableV2Demo />);

stories.add('无分页基础页', () => (
  <div style={{padding: 24, background: '#fff'}}>
    <DataTableV2
      className=''
      namespace='datatable-v2-basic-demo'
      rowKey='id'
      columns={demoColumns.slice(0, 6)}
      dataSource={demoData.slice(0, 8)}
      pagination={false}
      onRefresh={action('DataTableV2 basic onRefresh')}
    />
  </div>
));
