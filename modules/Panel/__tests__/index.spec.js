import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import {Button} from 'antd'
import Panel from '../index'

const setup = (props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<Panel {...props} >abc</Panel>)
  return {
    props,
    wrapper
  }
}

describe('Panel 组件是否渲染', () => {
  const { wrapper, props } = setup({ handleClick: jest.fn()});
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it('Panel Component should be render', () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    console.log(wrapper)
     expect(wrapper.find('.ant-panel-head').exists()).toBe(true);
    // expect(wrapper.find('Button').length).toBe(3);
    // expect(toJson(wrapper)).toMatchSnapshot();
  })

})


describe('ButtonGroups 事件响应处理',()=>{
})
