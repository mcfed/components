import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import {Button} from 'antd'
import FieldSet from '../index'

const setup = (props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<FieldSet {...props} ><div className="child">abc</div></FieldSet>)
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

describe("fieldset state", () => {

  it("props display未传时  state hidden为false", () => {
    const {wrapper,props} = setup({})

    expect(wrapper.state('hidden')).toBe(false);
  });

  it("props display 传值为hide时 state hidden 为true", () => {
    const {wrapper,props} = setup({
      display:'hide'
    })
    expect(wrapper.state('hidden')).toBe(true);
  });

  it("props display 传值不为hide state hidden 为false", () => {
      const {wrapper,props} = setup({
        display:'aaa'
      })
      expect(wrapper.state('hidden')).toBe(false);
  });
});

describe("fieldset hidden with children", () => {


  it("props display传值为hide时，子元素不存在", () => {
    const {wrapper,props} = setup({
      display:'hide'
    })
    expect(wrapper.find('.child').exists()).toBe(false)
  });

  it("defaultProps display传值不为hide时，子元素存在", () => {
    const {wrapper,props} = setup({
      display:'show'
    })
    expect(wrapper.find('.child').exists()).toBe(true);
  });

});

describe("fieldset showHideFun method test", () => {

  it("如果没有onchange方法，showHideFun调用后state hidden改变 初始hidden为true时", () => {
    const {wrapper,props} = setup({
      display:'hide'
    })
    wrapper.instance().showHideFun()
    expect(wrapper.state('hidden')).toBe(false);
  });

  it("如果没有onchange方法，showHideFun调用后state hidden改变 初始hidden为false时", () => {
    const {wrapper,props} = setup({
      display:'show'
    })
    wrapper.instance().showHideFun()
    expect(wrapper.state('hidden')).toBe(true);
  });

  it("如果props 传入onchange 方法，showHideFun后 onchange中的参数取决于hidden的值", () => {
    const onchange = jest.fn()
    const {wrapper,props} = setup({
      display:'hide',
      onChange:onchange
    })
    wrapper.instance().showHideFun()
    expect(onchange.mock.calls[0][0]).toBe('show')
  });

  it("如果props 传入onchange 方法，showHideFun后 onchange中的参数取决于hidden的值", () => {
    const onchange = jest.fn()
    const {wrapper,props} = setup({
      display:'show',
      onChange:onchange
    })
    wrapper.instance().showHideFun()
    expect(onchange.mock.calls[0][0]).toBe('hide')
  });
});

describe("fieldset 子元素Updown prop 取决于hide值", () => {

  it("hidden 传入为hide 时 updown的props为up", () => {
    const {wrapper,props} = setup({
      display:'hide'
    })
    expect(wrapper.find('UpDown').prop('state')).toBe('up');
  });

  it("hidden 传入不为hide时 updown的props为down", () => {
    const {wrapper,props} = setup({
      display:'show'
    })
    expect(wrapper.find('UpDown').prop('state')).toBe('down');
  });
});
