const STATUS_LIST = ['running', 'pending', 'success', 'blocked'];
const PRIORITY_LIST = ['P0', 'P1', 'P2', 'P3'];
const OWNER_LIST = ['张明', '李思', '王越', '赵琳', '陈可', '周航'];
const CITY_LIST = ['上海', '北京', '深圳', '杭州', '成都', '南京'];

export const SCENARIO_KEYS = [
  'standard',
  'dense',
  'wide',
  'longText',
  'empty',
  'loading',
];

const scenarioMeta = {
  standard: {
    title: '标准数据',
    note: '分页、排序、筛选、选择、刷新、列设置的常规组合。',
    length: 36,
    scrollX: 1600,
    pageSize: 10,
  },
  dense: {
    title: '高密度数据',
    note: '更多行数和更紧凑的状态分布，用来观察分页与滚动表现。',
    length: 88,
    scrollX: 1600,
    pageSize: 20,
  },
  wide: {
    title: '宽表横滚',
    note: '增加多列与固定列，用来测试横向滚动、列宽拖拽和列显示配置。',
    length: 42,
    scrollX: 2200,
    pageSize: 10,
    wide: true,
  },
  longText: {
    title: '长文本溢出',
    note: '客户名和备注被拉长，用来观察 ellipsis、列宽和布局稳定性。',
    length: 24,
    scrollX: 1800,
    pageSize: 10,
    longText: true,
  },
  empty: {
    title: '空数据',
    note: '无数据状态，用来确认工具栏、分页和清空选择是否稳定。',
    length: 0,
    scrollX: 1200,
    pageSize: 10,
  },
  loading: {
    title: '加载中',
    note: '固定 loading 状态，用来观察刷新、遮罩和布局占位。',
    length: 18,
    scrollX: 1600,
    pageSize: 10,
    loading: true,
  },
};

function pad(value) {
  return String(value).padStart(3, '0');
}

function createRecord(index, options = {}) {
  const id = index + 1;
  const amount = 18000 + ((id * 7319) % 86000);
  const progress = 12 + ((id * 17) % 89);
  const isRiskRow = index % 5 === 0;
  const customerSuffix = String.fromCharCode(65 + (index % 26));

  return {
    id,
    key: id,
    orderNo: `DT202606${pad(id)}`,
    customer: options.longText
      ? `测试客户 ${customerSuffix} - 华东交付中心跨区域联合作业项目 ${pad(id)}`
      : `测试客户 ${customerSuffix}`,
    owner: OWNER_LIST[index % OWNER_LIST.length],
    city: CITY_LIST[index % CITY_LIST.length],
    status: STATUS_LIST[index % STATUS_LIST.length],
    priority: PRIORITY_LIST[index % PRIORITY_LIST.length],
    amount,
    progress,
    startDate: `2026-06-${String((index % 28) + 1).padStart(2, '0')}`,
    deadline: `2026-07-${String(((index + 6) % 28) + 1).padStart(2, '0')}`,
    disabled: index % 9 === 0,
    contractNo: `HT-${20260000 + id * 17}`,
    region: index % 2 === 0 ? '华东一区' : '华南二区',
    source: index % 3 === 0 ? '线上商机' : '客户转介绍',
    score: 60 + ((id * 7) % 40),
    remark: options.longText
      ? '包含跨部门协作、第三方交付、历史数据迁移和验收口径调整，需要关注列宽、悬浮、换行和横向滚动下的展示稳定性。'
      : isRiskRow
        ? '包含跨部门协作，需要关注交付风险'
        : '常规交付流程',
  };
}

function createDataSource(length, options) {
  return Array.from({length}).map((_, index) => createRecord(index, options));
}

const baseColumns = [
  {
    title: '订单编号',
    dataIndex: 'orderNo',
    key: 'orderNo',
    width: 150,
    fixed: 'left',
    disabled: true,
  },
  {
    title: '客户名称',
    dataIndex: 'customer',
    key: 'customer',
    width: 180,
  },
  {
    title: '负责人',
    dataIndex: 'owner',
    key: 'owner',
    width: 110,
    filterValues: OWNER_LIST.slice(0, 3),
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
    width: 110,
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 120,
    filterValues: STATUS_LIST,
    renderType: 'status',
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    key: 'priority',
    width: 100,
    sortable: true,
    renderType: 'priority',
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    width: 130,
    align: 'right',
    sortable: true,
    renderType: 'amount',
  },
  {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
    width: 140,
    sortable: true,
    renderType: 'progress',
  },
  {
    title: '开始日期',
    dataIndex: 'startDate',
    key: 'startDate',
    width: 130,
    sortable: true,
  },
  {
    title: '截止日期',
    dataIndex: 'deadline',
    key: 'deadline',
    width: 130,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: 260,
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 130,
    fixed: 'right',
    renderType: 'operation',
  },
];

const wideColumns = [
  {
    title: '合同编号',
    dataIndex: 'contractNo',
    key: 'contractNo',
    width: 150,
  },
  {
    title: '区域',
    dataIndex: 'region',
    key: 'region',
    width: 120,
  },
  {
    title: '来源',
    dataIndex: 'source',
    key: 'source',
    width: 130,
  },
  {
    title: '评分',
    dataIndex: 'score',
    key: 'score',
    width: 110,
    sortable: true,
  },
];

function cloneConfig(config) {
  return {
    ...config,
    columns: config.columns.map((column) => ({...column})),
    dataSource: config.dataSource.map((record) => ({...record})),
  };
}

function createColumns(options = {}) {
  const columns = baseColumns.map((column) => ({...column}));
  if (!options.wide) {
    return columns;
  }

  return [
    ...columns.slice(0, -2),
    ...wideColumns.map((column) => ({...column})),
    ...columns.slice(-2),
  ];
}

export function getScenarioConfig(key) {
  const scenarioKey = scenarioMeta[key] ? key : 'standard';
  const meta = scenarioMeta[scenarioKey];
  const config = {
    key: scenarioKey,
    title: meta.title,
    note: meta.note,
    loading: Boolean(meta.loading),
    pageSize: meta.pageSize,
    scroll: {x: meta.scrollX},
    columns: createColumns(meta),
    dataSource: createDataSource(meta.length, meta),
  };

  return cloneConfig(config);
}

export function getSelectableRowKeys(dataSource, rowKey = 'id') {
  return dataSource
    .filter((record) => !record.disabled)
    .map((record) => record[rowKey]);
}

export function getSelectedCount(
  checkType,
  dataSource,
  selectedRowKeys,
  total,
) {
  if (checkType === 'checkAll') {
    return Math.max(
      total - dataSource.filter((record) => record.disabled).length,
      0,
    );
  }

  return selectedRowKeys.length;
}
