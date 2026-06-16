import React from 'react';
import {Button, Tag} from 'antd';

const statusColor = {
  running: 'blue',
  pending: 'gold',
  success: 'green',
  blocked: 'red',
};

const priorityColor = {
  P0: 'red',
  P1: 'orange',
  P2: 'blue',
  P3: 'default',
};

const statusText = {
  running: '进行中',
  pending: '待处理',
  success: '已完成',
  blocked: '阻塞',
};

export const demoData = Array.from({length: 36}).map((_, index) => {
  const id = index + 1;
  const statusList = ['running', 'pending', 'success', 'blocked'];
  const priorityList = ['P0', 'P1', 'P2', 'P3'];
  const ownerList = ['张明', '李思', '王越', '赵琳', '陈可', '周航'];
  const cityList = ['上海', '北京', '深圳', '杭州', '成都', '南京'];
  const amount = 18000 + ((id * 7319) % 86000);
  const progress = 12 + ((id * 17) % 89);

  return {
    id,
    key: id,
    orderNo: `DT202606${String(id).padStart(3, '0')}`,
    customer: `测试客户 ${String.fromCharCode(65 + (index % 26))}`,
    owner: ownerList[index % ownerList.length],
    city: cityList[index % cityList.length],
    status: statusList[index % statusList.length],
    priority: priorityList[index % priorityList.length],
    amount,
    progress,
    startDate: `2026-06-${String((index % 28) + 1).padStart(2, '0')}`,
    deadline: `2026-07-${String(((index + 6) % 28) + 1).padStart(2, '0')}`,
    disabled: index % 9 === 0,
    remark:
      index % 5 === 0 ? '包含跨部门协作，需要关注交付风险' : '常规交付流程',
  };
});

export const demoColumns = [
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
    width: 160,
  },
  {
    title: '负责人',
    dataIndex: 'owner',
    key: 'owner',
    width: 110,
    filters: [
      {text: '张明', value: '张明'},
      {text: '李思', value: '李思'},
      {text: '王越', value: '王越'},
    ],
    onFilter: (value, record) => record.owner === value,
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
    filters: [
      {text: '进行中', value: 'running'},
      {text: '待处理', value: 'pending'},
      {text: '已完成', value: 'success'},
      {text: '阻塞', value: 'blocked'},
    ],
    onFilter: (value, record) => record.status === value,
    render: (value) => (
      <Tag color={statusColor[value]}>{statusText[value]}</Tag>
    ),
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    key: 'priority',
    width: 100,
    sorter: (a, b) => a.priority.localeCompare(b.priority),
    render: (value) => <Tag color={priorityColor[value]}>{value}</Tag>,
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    width: 130,
    align: 'right',
    sorter: (a, b) => a.amount - b.amount,
    render: (value) => `¥ ${value.toLocaleString('zh-CN')}`,
  },
  {
    title: '进度',
    dataIndex: 'progress',
    key: 'progress',
    width: 110,
    sorter: (a, b) => a.progress - b.progress,
    render: (value) => `${value}%`,
  },
  {
    title: '开始日期',
    dataIndex: 'startDate',
    key: 'startDate',
    width: 130,
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
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
    width: 240,
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: '操作',
    key: 'operation',
    width: 130,
    fixed: 'right',
    render: (_, record) => (
      <Button type='link' size='small' disabled={record.disabled}>
        查看
      </Button>
    ),
  },
];
