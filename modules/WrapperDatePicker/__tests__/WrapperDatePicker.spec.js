import React from 'react';
import {shallow} from 'enzyme';
import {DatePicker} from 'antd';
import moment from 'moment';
import WrapperDatePicker from '../index';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

const setup = props => {
  // 模拟 props

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<WrapperDatePicker {...props} />);
  return {
    props,
    wrapper
  };
};

describe('DatePicker 组件是否渲染', () => {
  const {wrapper, props} = setup({
    children: MonthPicker,
    value: '2018-12-12'
  });
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it.skip('DataTable Component should be render', () => {
    // console.log(wrapper.find("input"))
    expect(wrapper.find('MonthPicker').exists()).toBe(true);
  });

  it.skip('测试 props.value 自动转换moment 类型', () => {
    expect(wrapper.state('value')).toEqual(moment(props.value));
    // expect(wrapper.state('value')).extend(moment)
  });
});
describe('componentWillReceiveProps 测试', () => {
  it('componentWillReceiveProps if true', () => {
    const {wrapper} = setup({
      children: DatePicker,
      value: '2019-04-20',
      format: 'YYYY-MM-DD'
    });
    const instance = wrapper.instance();
    instance.translateVal2State = jest.fn();
    instance.componentWillReceiveProps({
      value: '2019-05-31'
    });

    expect(instance.translateVal2State).toHaveBeenCalled();
  });

  it('componentWillReceiveProps if false', () => {
    const {wrapper, props} = setup({
      children: DatePicker,
      value: '2019-04-20',
      format: 'YYYY-MM-DD'
    });
    const instance = wrapper.instance();
    instance.componentWillReceiveProps({
      value: '2019-04-20'
    });
    expect(wrapper.state('value')).toEqual(
      new moment(props.value, 'YYYY-MM-DD')
    );
  });

  it('translateVal2State if true', () => {
    const {wrapper} = setup({
      children: DatePicker
    });
    const instance = wrapper.instance();
    const value = ['2019-04-20', '2019-04-21'];
    const format = 'YYYY-MM';
    instance.translateVal2State(['2019-04-20'], format);
    expect(wrapper.state('value')).toEqual(null);

    instance.translateVal2State(value, format);
    expect(wrapper.state('value')).toEqual([
      moment(moment(value[0]).format(format)),
      moment(moment(value[1]).format(format))
    ]);
  });

  it('translateVal2State if false', () => {
    const {wrapper} = setup({
      children: DatePicker
    });
    const instance = wrapper.instance();
    const value = '2019-04-20';
    const format = 'YYYY-MM';
    instance.translateVal2State(value, format);
    expect(wrapper.state('value')).toEqual(new moment(value, format));

    instance.translateVal2State('', format);
    expect(wrapper.state('value')).toEqual(null);
  });
});
describe('props format', () => {
  it('DatePicker format 格式为YYYY-MM-DD', () => {
    const {wrapper, props} = setup({
      children: DatePicker,
      value: '2019-04-20',
      format: 'YYYY-MM-DD'
    });
    //moment对象比较 用toJSON方法
    // console.log(wrapper.state("value"))
    expect(wrapper.state('value').toJSON()).toEqual(
      new moment(props.value, props.format).toJSON()
    );
  });

  it('DatePicker format 格式为YYYY-MM', () => {
    const {wrapper, props} = setup({
      children: DatePicker,
      value: '2019-04-20',
      format: 'YYYY-MM'
    });

    expect(wrapper.state('value').toJSON()).toEqual(
      new moment(props.value, props.format).toJSON()
    );
  });

  it('DatePicker format 格式为YYYY', () => {
    const {wrapper, props} = setup({
      children: DatePicker,
      value: '2019-04-20',
      format: 'YYYY'
    });

    expect(wrapper.state('value').toJSON()).toEqual(
      new moment(props.value, props.format).toJSON()
    );
  });

  it('RangePicker format 格式为YYYY-MM-DD', () => {
    const {wrapper, props} = setup({
      children: RangePicker,
      value: ['2019-04-18', '2019-04-20'],
      format: 'YYYY-MM-DD'
    });

    expect(wrapper.state('value')).toEqual([
      moment(moment(props.value[0]).format(props.format)),
      moment(moment(props.value[1]).format(props.format))
    ]);
  });

  it('RangePicker format 格式为YYYY-MM', () => {
    const {wrapper, props} = setup({
      children: RangePicker,
      value: ['2019-04-18', '2019-04-20'],
      format: 'YYYY-MM'
    });

    expect(wrapper.state('value')).toEqual([
      moment(moment(props.value[0]).format(props.format)),
      moment(moment(props.value[1]).format(props.format))
    ]);
  });
  it('RangePicker format 格式为YYYY', () => {
    const {wrapper, props} = setup({
      children: RangePicker,
      value: ['2019-04-18', '2019-04-20'],
      format: 'YYYY'
    });

    expect(wrapper.state('value')).toEqual([
      moment(moment(props.value[0]).format(props.format)),
      moment(moment(props.value[1]).format(props.format))
    ]);
  });
});

describe('WrapperDatePicker valueFormat to whatever', () => {
  it('valueFormat 为时间戳x format为YYYY-MM-DD', () => {
    const onchangeFn = jest.fn();
    const {wrapper, props} = setup({
      children: <RangePicker valueFormat='x' format='YYYY-MM-DD' />,
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      Number(moment('2019-04-18').format('x')),
      Number(moment('2019-04-20').format('x'))
    ]);
  });

  it('date.length == 0', () => {
    const onchangeFn = jest.fn();
    const {wrapper, props} = setup({
      children: <RangePicker valueFormat='x' format='YYYY-MM-DD' />,
      onChange: onchangeFn
    });
    wrapper.instance().onChange([]);
    expect(wrapper.state('value')).toEqual([]);
  });

  it('valueFormat 为时间戳x format为YYYY-MM', () => {
    const onchangeFn = jest.fn();
    const {wrapper, props} = setup({
      children: <RangePicker valueFormat='x' format='YYYY-MM' />,
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      Number(moment('2019-04').format('x')),
      Number(moment('2019-04').format('x'))
    ]);
  });

  it('valueFormat 为时间戳x format为YYYY', () => {
    const onchangeFn = jest.fn();
    const {wrapper, props} = setup({
      children: <RangePicker valueFormat='x' format='YYYY' />,
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      Number(moment('2019').format('x')),
      Number(moment('2019').format('x'))
    ]);
  });

  it('timeRange 打开', () => {
    const onchangeFn = jest.fn();
    const {wrapper, props} = setup({
      children: (
        <RangePicker valueFormat='x' timeRange={true} format='YYYY-MM-DD' />
      ),
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      Number(
        moment('2019-04-18')
          .startOf('day')
          .format('x')
      ),
      Number(
        moment('2019-04-20')
          .endOf('day')
          .format('x')
      )
    ]);
  });

  it('timeRange 打开 timeRangeType 改为除day 之外的其他属性', () => {
    const onchangeFn = jest.fn();
    const timeRangeType = 'month';
    const {wrapper, props} = setup({
      children: (
        <RangePicker
          valueFormat='x'
          timeRange={true}
          timeRangeType={timeRangeType}
          format='YYYY-MM-DD'
        />
      ),
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      Number(
        moment('2019-04-18')
          .startOf(timeRangeType)
          .format('x')
      ),
      Number(
        moment('2019-04-20')
          .endOf(timeRangeType)
          .format('x')
      )
    ]);
  });

  it('valueFormat改为除x之外，timeRange 打开 timeRangeType 改为除day 之外的其他属性', () => {
    const onchangeFn = jest.fn();
    const timeRangeType = 'month';
    const valueFormat = 'YYYY-MM-DD HH:mm:ss';
    const {wrapper, props} = setup({
      children: (
        <RangePicker
          valueFormat={valueFormat}
          timeRange={true}
          timeRangeType={timeRangeType}
          format='YYYY-MM-DD'
        />
      ),
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      moment('2019-04-18')
        .startOf(timeRangeType)
        .format(valueFormat),
      moment('2019-04-20')
        .endOf(timeRangeType)
        .format(valueFormat)
    ]);
  });

  it('valueFormat改为除x之外，timeRange false', () => {
    const onchangeFn = jest.fn();
    const timeRangeType = 'month';
    const valueFormat = 'YYYY-MM-DD HH:mm:ss';
    const {wrapper, props} = setup({
      children: (
        <RangePicker
          valueFormat={valueFormat}
          timeRange={false}
          timeRangeType={timeRangeType}
          format='YYYY-MM-DD'
        />
      ),
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      moment('2019-04-18').format(valueFormat),
      moment('2019-04-20').format(valueFormat)
    ]);
  });

  it('valueFormat改为除x之外，timeRange true timeRangeType 为空', () => {
    const onchangeFn = jest.fn();
    const timeRangeType = 'month';
    const valueFormat = 'YYYY-MM-DD HH:mm:ss';
    const {wrapper, props} = setup({
      children: (
        <RangePicker
          valueFormat={valueFormat}
          timeRange={true}
          format='YYYY-MM-DD'
        />
      ),
      onChange: onchangeFn
    });
    wrapper.instance().onChange([moment('2019-04-18'), moment('2019-04-20')]);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      moment('2019-04-18')
        .startOf('day')
        .format(valueFormat),
      moment('2019-04-20')
        .endOf('day')
        .format(valueFormat)
    ]);
  });

  it('valueFormat false', () => {
    const onchangeFn = jest.fn();
    const {wrapper} = setup({
      children: <RangePicker valueFormat={false} format='YYYY-MM-DD' />,
      onChange: onchangeFn
    });
    const date = [moment('2019-04-18'), moment('2019-04-20')];
    wrapper.instance().onChange(date);
    expect(onchangeFn.mock.calls[0][0]).toEqual([
      date[0].format('YYYY-MM-DD'),
      date[1].format('YYYY-MM-DD')
    ]);
  });

  it('date not array valueFormat is x', () => {
    const onchangeFn = jest.fn();
    const {wrapper} = setup({
      children: <RangePicker valueFormat='x' />,
      onChange: onchangeFn
    });
    const date = moment('2019-04-20');
    wrapper.instance().onChange(date);
    expect(onchangeFn.mock.calls[0][0]).toEqual(
      Number(moment(date.format('YYYY-MM-DD')).format('x'))
    );
  });

  it('date not array valueFormat not x', () => {
    const onchangeFn = jest.fn();
    const {wrapper} = setup({
      children: <RangePicker valueFormat='YYYY-MM-DD HH:mm:ss' />,
      onChange: onchangeFn
    });
    const date = moment('2019-04-20');
    wrapper.instance().onChange(date);
    expect(onchangeFn.mock.calls[0][0]).toEqual(
      moment(date.format('YYYY-MM-DD')).format('YYYY-MM-DD HH:mm:ss')
    );
  });

  it('date not array valueFormat false', () => {
    const onchangeFn = jest.fn();
    const {wrapper} = setup({
      children: <RangePicker valueFormat={false} />,
      onChange: onchangeFn
    });
    const date = moment('2019-04-20');
    wrapper.instance().onChange(date);
    expect(onchangeFn.mock.calls[0][0]).toEqual(date.format());
  });
});

describe('unittest 补覆盖率', () => {
  it('value props.value undefined 时', () => {
    const onchangeFn = jest.fn();
    const {wrapper, props} = setup({
      children: <RangePicker valueFormat='x' format='YYYY-MM-DD' />,
      onChange: onchangeFn
    });

    expect(wrapper.state('value')).toEqual(null);
  });

  it('value props.value && props.value.length != 2 时', () => {
    const onchangeFn = jest.fn();
    const {wrapper, props} = setup({
      children: <RangePicker valueFormat='x' format='YYYY-MM-DD' />,
      value: ['2019-04-18'],
      onChange: onchangeFn
    });

    expect(wrapper.state('value')).toEqual(null);
  });
});
