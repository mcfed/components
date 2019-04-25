import React from 'react'
import { shallow,render,mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import {Button} from 'antd'
import Panel from '../index'
import Locale from '../locale.js'

const setup = (props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<Panel {...props} >abc</Panel>)
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

  it('Panel Component should be with {title=title} render ',()=>{
    const { wrapper, props } = setup({title:"title"});
    expect(wrapper.find('.ant-panel-head').exists()).toBe(true);
    expect(wrapper.find('.ant-panel-head-title').prop('children')).toBe("title");
  })

  it('Panel Component should be with {footer=false} render ',()=>{
    const { wrapper, props } = setup({footer:false});
    expect(wrapper.find('.ant-panel-footer').exists()).toBe(false);
  })

  it('Panel Component should be with {loading=true} render ',()=>{
    const { wrapper, props } = setup({loading:true});
    expect(wrapper.find("Spin").prop('spinning')).toBe(true)
  })

  it.skip('Panel Component should be with {confirmLoading=true} render ',()=>{
    const { wrapper, props } = setup({confirmLoading:true});
    expect(wrapper.find('Button[type="primary"]').prop('loading')).toBe(true)
  })

  it('Panel Component LocaleReceiver must exist',(done)=>{
    const { wrapper, props } = setup();
    expect(wrapper.find('LocaleReceiver').exists()).toBe(true)
    expect(wrapper.find('LocaleReceiver').prop('componentName')).toBe('Panel')
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(Locale)
    // expect(wrapper.find('LocaleReceiver').prop('children')(Locale)).toBe(wrapper.instance().renderFooter.call(wrapper.instance(),Locale))
    done()
  })

  it("Panel instace renderFooterButton ",(done)=>{
    const { wrapper, props } = setup();
    // console.log(Locale)
    const locale={
      cancelText:"cancelText",
      okText:"okText"
    }
    const footer = wrapper.instance().renderFooterButton(locale)
    expect(footer[0].props.children).toBe(locale.okText)
    expect(footer[1].props.children).toBe(locale.cancelText)
    done()
  })

  it('Panel Component has no locale',(done)=>{
    const { wrapper, props } = setup();
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(Locale)
    done()
  })

  it('Panel Component has locale with okText',(done)=>{
    const { wrapper, props } = setup({locale:{okText:"测试"}});
    const localeTest = {okText:"测试",cancelText:"取消"}
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(localeTest)
    done()
  })

  it('Panel Component has locale with okText and cancelText',(done)=>{
    const { wrapper, props } = setup({locale:{okText:"测试",cancelText:"取消测试"}});
    const localeTest = {okText:"测试",cancelText:"取消测试"}
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(localeTest)
    done()
  })

  it('Panel Component has locale and children is no exists',(done)=>{
    const { wrapper, props } = setup({locale:{okText:"测试",cancelText:"取消测试",back:"返回"}});
    const localeTest = {okText:"测试",cancelText:"取消测试",back:"返回"}
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(localeTest)
    done()
  })

  it.skip('Panel Component render 测试',(done)=>{

    const wrapperRender = render(<Panel locale={{okText:"测试",cancelText:"取消测试",back:"返回"}} >abc</Panel>);
    const button = wrapperRender.find("button").children();
    console.log(button.prop('span'))
    // expect(wrapperRender.find("button").html()).toEqual('测试');
    done()
  })
})


describe('ButtonGroups 事件响应处理',()=>{

})
