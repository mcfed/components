import React from 'react'
import { shallow } from 'enzyme'
import {DatePicker} from 'antd'
import moment from 'moment'
import WrapperDatePicker from '../index'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const setup = (props) => {
  // 模拟 props


  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<WrapperDatePicker {...props} />)
  return {
    props,
    wrapper
  }
}

describe('DatePicker 组件是否渲染', () => {
  const { wrapper, props } = setup({
    children:MonthPicker,
    value:'2018-12-12'
  });
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it.skip('DataTable Component should be render', () => {
    // console.log(wrapper.find("input"))
    expect(wrapper.find("div").exists()).toBe(true)
  })

  it('测试 props.value 自动转换moment 类型',()=>{
    expect(wrapper.state('value')).toEqual(moment(props.value))
    // expect(wrapper.state('value')).extend(moment)
  })

})
