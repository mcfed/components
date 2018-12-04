import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import {DatePicker} from 'antd'
import moment from 'moment'
import CustomDatePicker from '../index'

const setup = (props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<CustomDatePicker {...props} />)
  return {
    props,
    wrapper
  }
}

describe('CustomDatePicker 组件是否渲染', () => {
  const { wrapper, props } = setup({ handleClick: jest.fn(),value:"2018-12-12"});
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it('CustomDatePicker Component should be render', () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    expect(wrapper.prop('value')).toEqual(moment("2018-12-12"))
  })

  it('CustomDatePicker Component should be setProps value', () => {
    wrapper.setProps({"value":"2019-01-01"})
    expect(wrapper.prop('value')).toEqual(moment("2019-01-01"))
  })


})

describe.skip('CustomDatePicker 事件响应处理',()=>{
  let onChangeMock=jest.fn()
  it('CustomDatePicker 事件分发处理 today',()=>{

    const handleClickMock= jest.fn()
    const { wrapper, props } = setup({
      onChange: onChangeMock
    });
    console.log(wrapper.props())
    // wrapper.find('Button[actionkey="delete"]').simulate('click')
    // expect(handleClickMock.mock.calls.length).toBe(1);
    // expect(handleClickMock.mock.calls[0][0]).toBe('delete');
  })

})
