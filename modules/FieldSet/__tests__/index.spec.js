import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from 'antd/lib/button'
import FieldSet from '../index'

const setup = (props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<FieldSet {...props} >abc</FieldSet>)
  return {
    props,
    wrapper
  }
}

describe('Panel 组件是否渲染 default props', () => {
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it.skip('Panel Component should be render', () => {
    const { wrapper, props } = setup({});
     expect(wrapper.find('.ant-panel-head').exists()).toBe(false);
     expect(wrapper.find('.ant-panel-body').exists()).toBe(true);
     expect(wrapper.find('.ant-panel-footer').exists()).toBe(true);
  })

  it.skip('Panel Component should be with {title=title} render ',()=>{
    const { wrapper, props } = setup({title:"title"});
    expect(wrapper.find('.ant-panel-head').exists()).toBe(true);
    expect(wrapper.find('.ant-panel-head-title').prop('children')).toBe("title");
  })

  it.skip('Panel Component should be with {footer=false} render ',()=>{
    const { wrapper, props } = setup({footer:false});
    expect(wrapper.find('.ant-panel-footer').exists()).toBe(false);
  })
})


describe('ButtonGroups 事件响应处理',()=>{
})
