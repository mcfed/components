import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import {Button} from 'antd'
import TabsPanel from '../index'

const setup = (props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<TabsPanel {...props} >
      <div title="abc" path="11">11</div>
    </TabsPanel>)
  return {
    props,
    wrapper
  }
}

describe('TabPanel 组件是否渲染 default props', () => {
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it('TabPanel Component should be render', () => {
    const { wrapper, props } = setup({
      paramName:"type",
      match:{
        path:"aa/:type",
        params:{
          type:1
        }
      }
    });
    expect(wrapper.find("Tabs").exists()).toBe(true)
  })
})


describe('TabPanel 事件响应处理',()=>{
})
