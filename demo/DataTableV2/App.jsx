import React from 'react';
import {Alert, Button, Progress, Radio, Switch, Tag} from 'antd';
import {
  AppstoreOutlined,
  CheckSquareOutlined,
  CloseCircleOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

import DataTableV2 from '../../src/DataTableV2';
import {
  SCENARIO_KEYS,
  getScenarioConfig,
  getSelectableRowKeys,
  getSelectedCount,
} from './scenarios';

import './style.css';

const CHECK_TYPE = DataTableV2.CHECK_TYPE;

const statusColor = {
  running: 'blue',
  pending: 'gold',
  success: 'green',
  blocked: 'red',
};

const statusText = {
  running: '进行中',
  pending: '待处理',
  success: '已完成',
  blocked: '阻塞',
};

const priorityColor = {
  P0: 'red',
  P1: 'orange',
  P2: 'blue',
  P3: 'default',
};

function getColumnFilters(values) {
  return values.map((value) => ({
    text: statusText[value] || value,
    value,
  }));
}

function compareValue(a, b, dataIndex) {
  if (typeof a[dataIndex] === 'number') {
    return a[dataIndex] - b[dataIndex];
  }

  return String(a[dataIndex]).localeCompare(String(b[dataIndex]), 'zh-CN');
}

function materializeColumns(columns, onInspect) {
  return columns.map((column) => {
    const nextColumn = {...column};

    if (column.filterValues) {
      nextColumn.filters = getColumnFilters(column.filterValues);
      nextColumn.onFilter = (value, record) =>
        record[column.dataIndex] === value;
      delete nextColumn.filterValues;
    }

    if (column.sortable) {
      nextColumn.sorter = (a, b) => compareValue(a, b, column.dataIndex);
      delete nextColumn.sortable;
    }

    if (column.renderType === 'status') {
      nextColumn.render = (value) => (
        <Tag color={statusColor[value]}>{statusText[value]}</Tag>
      );
    }

    if (column.renderType === 'priority') {
      nextColumn.render = (value) => (
        <Tag color={priorityColor[value]}>{value}</Tag>
      );
    }

    if (column.renderType === 'amount') {
      nextColumn.render = (value) => `¥ ${value.toLocaleString('zh-CN')}`;
    }

    if (column.renderType === 'progress') {
      nextColumn.render = (value) => (
        <Progress
          percent={value}
          size='small'
          strokeWidth={6}
          status={value > 85 ? 'success' : 'active'}
        />
      );
    }

    if (column.renderType === 'operation') {
      nextColumn.render = (_, record) => (
        <Button
          type='link'
          size='small'
          disabled={record.disabled}
          onClick={() => onInspect(record)}>
          查看
        </Button>
      );
    }

    delete nextColumn.renderType;
    return nextColumn;
  });
}

function createInitialState() {
  const scenario = getScenarioConfig('standard');
  return {
    scenarioKey: scenario.key,
    dataSource: scenario.dataSource,
    columns: scenario.columns,
    scenarioNote: scenario.note,
    loading: scenario.loading,
    manualLoading: false,
    paginationEnabled: true,
    checkAllEnabled: true,
    showSelectClear: true,
    selectedRowKeys: [],
    checkType: '',
    page: {
      current: 1,
      pageSize: scenario.pageSize,
      total: scenario.dataSource.length,
    },
    scroll: scenario.scroll,
    lastAction: '等待操作',
  };
}

class DataTableV2DemoApp extends React.Component {
  state = createInitialState();

  refreshTimer = null;

  componentWillUnmount() {
    this.clearRefreshTimer();
  }

  clearRefreshTimer = () => {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
  };

  applyScenario = (scenarioKey) => {
    const scenario = getScenarioConfig(scenarioKey);
    this.clearRefreshTimer();
    this.setState({
      scenarioKey: scenario.key,
      dataSource: scenario.dataSource,
      columns: scenario.columns,
      scenarioNote: scenario.note,
      loading: scenario.loading,
      manualLoading: false,
      selectedRowKeys: [],
      checkType: '',
      page: {
        current: 1,
        pageSize: scenario.pageSize,
        total: scenario.dataSource.length,
      },
      scroll: scenario.scroll,
      lastAction: `切换到「${scenario.title}」`,
    });
  };

  clearSelectRows = () => {
    this.setState({
      selectedRowKeys: [],
      checkType: '',
      lastAction: '清空选择',
    });
  };

  handleRefresh = () => {
    this.clearRefreshTimer();
    this.setState({
      manualLoading: true,
      lastAction: '触发刷新',
    });
    this.refreshTimer = setTimeout(() => {
      this.setState({
        manualLoading: false,
        lastAction: '刷新完成',
      });
    }, 650);
  };

  handleTableChange = (pagination, filters, sorter) => {
    this.setState((prevState) => ({
      page: {
        ...prevState.page,
        current: pagination.current,
        pageSize: pagination.pageSize,
      },
      lastAction:
        sorter && sorter.field
          ? `排序字段：${sorter.field}`
          : `分页到第 ${pagination.current} 页`,
    }));
  };

  handleInspect = (record) => {
    this.setState({
      lastAction: `查看 ${record.orderNo}`,
    });
  };

  selectVisibleRows = () => {
    const {dataSource, page} = this.state;
    const start = (page.current - 1) * page.pageSize;
    const end = start + page.pageSize;

    this.setState({
      selectedRowKeys: getSelectableRowKeys(dataSource.slice(start, end)),
      checkType: CHECK_TYPE.全选当前页,
      lastAction: '选择当前页可选行',
    });
  };

  selectAllRows = () => {
    const {dataSource} = this.state;
    this.setState({
      selectedRowKeys: getSelectableRowKeys(dataSource),
      checkType: CHECK_TYPE.全选所有,
      lastAction: '选择全部可选行',
    });
  };

  resetLocalSettings = () => {
    const {scenarioKey} = this.state;
    localStorage.removeItem(`tableSettings_datatable-v2-demo-${scenarioKey}`);
    this.applyScenario(scenarioKey);
  };

  renderScenarioButtons() {
    const {scenarioKey} = this.state;

    return (
      <Radio.Group
        value={scenarioKey}
        onChange={(event) => this.applyScenario(event.target.value)}
        className='dtv2-scenario-list'>
        {SCENARIO_KEYS.map((key) => {
          const scenario = getScenarioConfig(key);
          return (
            <Radio.Button value={key} key={key}>
              {scenario.title}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    );
  }

  renderControlPanel() {
    const {
      checkAllEnabled,
      manualLoading,
      paginationEnabled,
      scenarioNote,
      showSelectClear,
    } = this.state;

    return (
      <aside className='dtv2-panel'>
        <div className='dtv2-panel-header'>
          <div className='dtv2-kicker'>DataTableV2 Demo</div>
          <h1>交互测试台</h1>
        </div>

        <section className='dtv2-control-block'>
          <div className='dtv2-control-title'>测试场景</div>
          {this.renderScenarioButtons()}
          <Alert message={scenarioNote} type='info' showIcon />
        </section>

        <section className='dtv2-control-block'>
          <div className='dtv2-control-title'>开关</div>
          <label className='dtv2-switch-row'>
            <span>分页</span>
            <Switch
              checked={paginationEnabled}
              onChange={(checked) =>
                this.setState({paginationEnabled: checked})
              }
            />
          </label>
          <label className='dtv2-switch-row'>
            <span>全选菜单</span>
            <Switch
              checked={checkAllEnabled}
              onChange={(checked) => this.setState({checkAllEnabled: checked})}
            />
          </label>
          <label className='dtv2-switch-row'>
            <span>已选清空条</span>
            <Switch
              checked={showSelectClear}
              onChange={(checked) => this.setState({showSelectClear: checked})}
            />
          </label>
          <label className='dtv2-switch-row'>
            <span>模拟加载</span>
            <Switch
              checked={manualLoading}
              onChange={(checked) => this.setState({manualLoading: checked})}
            />
          </label>
        </section>

        <section className='dtv2-control-block'>
          <div className='dtv2-control-title'>选择测试</div>
          <div className='dtv2-action-grid'>
            <Button onClick={this.selectVisibleRows}>
              <CheckSquareOutlined />
              当前页
            </Button>
            <Button onClick={this.selectAllRows}>
              <AppstoreOutlined />
              全部
            </Button>
            <Button onClick={this.clearSelectRows}>
              <CloseCircleOutlined />
              清空
            </Button>
            <Button onClick={this.resetLocalSettings}>
              <ReloadOutlined />
              重置列
            </Button>
          </div>
        </section>
      </aside>
    );
  }

  renderTableArea() {
    const {
      checkAllEnabled,
      checkType,
      columns,
      dataSource,
      loading,
      manualLoading,
      page,
      paginationEnabled,
      scenarioKey,
      scroll,
      selectedRowKeys,
      showSelectClear,
      lastAction,
    } = this.state;

    const selectedCount = getSelectedCount(
      checkType,
      dataSource,
      selectedRowKeys,
      page.total,
    );
    const disabledCount = dataSource.filter((record) => record.disabled).length;
    const materializedColumns = materializeColumns(columns, this.handleInspect);
    const rowSelection = {
      selectedRowKeys,
      getCheckboxProps: (record) => ({
        disabled: record.disabled,
      }),
      onChange: (nextSelectedRowKeys) => {
        this.setState({
          selectedRowKeys: nextSelectedRowKeys,
          checkType: CHECK_TYPE.单选,
          lastAction: `手动选择 ${nextSelectedRowKeys.length} 项`,
        });
      },
    };

    return (
      <main className='dtv2-main'>
        <div className='dtv2-statusbar'>
          <div>
            <div className='dtv2-status-title'>当前状态</div>
            <div className='dtv2-status-meta'>
              已选 {selectedCount} 项 / 禁用 {disabledCount} 项 / 共{' '}
              {page.total} 条
            </div>
          </div>
          <div className='dtv2-tag-row'>
            <Tag color='blue'>{checkType || '未选择'}</Tag>
            <Tag color='green'>{lastAction}</Tag>
          </div>
        </div>

        <div className='dtv2-table-shell'>
          <DataTableV2
            namespace={`datatable-v2-demo-${scenarioKey}`}
            rowKey='id'
            columns={materializedColumns}
            dataSource={dataSource}
            loading={loading || manualLoading}
            checkAll={checkAllEnabled}
            showSelectClear={showSelectClear}
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
            pagination={
              paginationEnabled
                ? {
                    showSizeChanger: true,
                    showQuickJumper: true,
                    pageSizeOptions: ['10', '20', '50', '100'],
                    showTotal: (total) => `共 ${total} 条测试数据`,
                  }
                : false
            }
            scroll={scroll}
            defaultSort={{
              columnKey: 'amount',
              order: 'descend',
            }}
            onRefresh={this.handleRefresh}
            onChange={this.handleTableChange}
          />
        </div>
      </main>
    );
  }

  render() {
    return (
      <div className='dtv2-demo-page'>
        {this.renderControlPanel()}
        {this.renderTableArea()}
      </div>
    );
  }
}

export default DataTableV2DemoApp;
