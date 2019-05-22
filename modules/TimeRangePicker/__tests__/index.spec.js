import React from "react";
import moment from 'moment'
import { shallow } from "enzyme";
import {TimePicker} from 'antd'
import TimeRangePicker from "../index";

const setup = props => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(
    <TimeRangePicker {...props}/>
  );
  return {
    props,
    wrapper
  };
};

describe("是否正确渲染", () => {

  it("base on TimePicker", () => {
    const {wrapper} = setup()
    expect(wrapper.find('TimePicker').exists()).toBe(true);
  });

});

describe("方法测试", () => {

  it("如果没传value 则默认为空", () => {
    const {wrapper} = setup()
    expect(wrapper.state('startTime')).toBe("");
    expect(wrapper.state('endTime')).toBe("");
  });

  it("传入value 为数组  ", () => {
    const {wrapper,props} = setup({
      value:['2019-05-20','2019-05-21']
    })
    expect(wrapper.state('startTime')).toEqual(moment(props.value[0]));
    expect(wrapper.state('endTime')).toEqual(moment(props.value[1]));
  });

  it("formatTime 方法测试", () => {
    const {wrapper,props} = setup({
      format:'YYYY-MM-DD'
    })
    expect(wrapper.instance().formatTime("2019-05-20")).toEqual(
      moment("2019-05-20").format(props.format)
    );

  });

  it("handleChange 方法 type 为start时", () => {
    const {wrapper,props} = setup({
      onChange:jest.fn()
    })
    wrapper.instance().handleChange('start','2019-05-20')
    expect(wrapper.state('startTime')).toEqual('2019-05-20');
    expect(props.onChange.mock.calls.length).toBe(1)
  });

  it("handleChange 方法 type 为end时", () => {
    const {wrapper,props} = setup({
      onChange:jest.fn()
    })
    wrapper.instance().handleChange('end','2019-05-20')
    expect(wrapper.state('endTime')).toEqual('2019-05-20');
    expect(props.onChange.mock.calls.length).toBe(1)
  });
});
