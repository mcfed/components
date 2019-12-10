import React from 'react';
import {shallow} from 'enzyme';
import SwitchFixed from '../index';

const setup = props => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<SwitchFixed {...props}></SwitchFixed>);
  return {
    props,
    wrapper
  };
};

describe('FormItemFixed 组件测试', () => {
  it('default state', () => {
    const {wrapper} = setup();
    expect(wrapper.state('checked')).toBe(false);
  });

  it('componentDidMount 测试', () => {
    const {wrapper} = setup();
    const instance = wrapper.instance();

    instance.componentDidMount();

    expect(wrapper.state('checked')).toBe(false);
  });
  it('componentDidMount 测试', () => {
    const {wrapper} = setup({
      value: true
    });
    const instance = wrapper.instance();

    instance.componentDidMount();

    expect(wrapper.state('checked')).toBe(true);
  });

  it('componentWillReceiveProps 测试', () => {
    const {wrapper} = setup();
    const instance = wrapper.instance();

    instance.componentWillReceiveProps({});
    expect(wrapper.state('checked')).toBe(false);

    instance.componentWillReceiveProps({
      value: false
    });
    expect(wrapper.state('checked')).toBe(false);

    instance.componentWillReceiveProps({
      value: true
    });
    expect(wrapper.state('checked')).toBe(true);
  });

  it('handleSwitchChange 测试', () => {
    const {wrapper, props} = setup({
      onChange: jest.fn()
    });
    const instance = wrapper.instance();

    instance.handleSwitchChange(true);

    expect(wrapper.state('checked')).toBe(true);
    expect(props.onChange).toHaveBeenCalled();
  });
});
