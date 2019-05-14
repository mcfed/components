import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import {Button} from 'antd'
import ButtonGroups,{Confirm} from '../index'

const setup = (props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<ButtonGroups {...props} viewMode='icon'>
      <Button actionkey="delete" tip="删除数据小心点">删除</Button>
      <Button actionkey="icon" icon="edit">删除</Button>
      <Button actionkey="enabled" confirm="是否确定启用已选中的FTP服务器？" disabled={false}>启用</Button>
      <Button actionkey="hidden" permission={false}>不可见</Button>
      <Button actionkey="disabled" disabled={true}>禁用</Button>
      <Button actionkey="confirmTitle" confirmTitle="我是confirmTitle" confirm='我是confirm content'>确认框标题</Button>
    </ButtonGroups>)
  return {
    props,
    wrapper
  }
}

describe('ButtonGroups 组件是否渲染', () => {
  const { wrapper, props } = setup({ handleClick: jest.fn()});
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it('ButtonGroups Component should be render', () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find('ButtonGroup').exists()).toBe(true);
    expect(wrapper.find('Button').length).toBe(5);
    // expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('ButtonGroups Components children tip={"删除数据小心点"} 不渲染', () => {
    const buttonInst=wrapper.find('Button[actionkey="delete"]')
    expect(buttonInst.parent().exists()).toBe(true);
    expect(buttonInst.parent().prop('title')).toBe("删除数据小心点");
  })

  it('ButtonGroups Components children 设置了viewMode为icon 时 且 icon属性存在时正常获取icon属性 并 将button内的text节点置为空，保证只显示图片模式', () => {
    const buttonIcons=wrapper.find('Button[actionkey="icon"]')
    expect(buttonIcons.parent().exists()).toBe(true);
    expect(buttonIcons.parent().prop('icon')).toBe("edit");
  })

  it('ButtonGroups Components children 设置了viewMode为icon 时 且 icon属性不存在时不获取icon属性', () => {
    const buttonIcons=wrapper.find('Button[actionkey="delete"]')
    expect(buttonIcons.parent().exists()).toBe(true);
    expect(buttonIcons.parent().prop('icon')).toBe(undefined);
  })

  it('ButtonGroups Components children permission={false} 不渲染', () => {
   // expect(wrapper.find('Pagination').exists()).toBe(true);
    expect(wrapper.find('Button[actionkey="hidden"]').exists()).toBe(false)
  })

  it.skip('ButtonGroups Components menu 模式没有使用场景 先不实现用例', () => {
  })

  it('ButtonGroups Components confirmTitle title和confirmTitle是否都匹配正确', () => {
    //方法一
    // const buttonDom=wrapper.find('Tooltip[title="确认框标题"]');
    // expect(buttonDom.parent().exists()).toBe(true);
    // expect(buttonDom.parent().prop('title')).toBe("我是confirmTitle");
    // expect(buttonDom.parent().prop('content')).toBe("我是confirm content");
    //方法二
    const buttonDom=wrapper.find('Button[actionkey="confirmTitle"]');
    expect(buttonDom.parent().exists()).toBe(true);
    expect(buttonDom.parents('Confirm').prop('title')).toBe("我是confirmTitle");
    expect(buttonDom.parents('Confirm').prop('content')).toBe("我是confirm content");
  })
})


describe('ButtonGroups 事件响应处理',()=>{
  it('ButtonGroups 事件分发处理 点击[DELETE]',()=>{

    const handleClickMock= jest.fn()
    const { wrapper, props } = setup({
      handleClick: handleClickMock
    });
    wrapper.find('Button[actionkey="delete"]').simulate('click')
    expect(handleClickMock.mock.calls.length).toBe(1);
    expect(handleClickMock.mock.calls[0][0]).toBe('delete');
  })

  it('ButtonGroups 事件分发处理 点击[禁用]按钮「disabled」状态',()=>{
    const handleClickMock= jest.fn()
    const { wrapper, props } = setup({
      handleClick: handleClickMock
    });
    wrapper.find('Button[actionkey="disabled"]').simulate('click')
  //  console.log(handleClickMock.mock.calls)
    expect(handleClickMock.mock.calls.length).toBe(0);
    // expect(handleClickMock.mock.calls[0][0]).toBe('delete');
  })

  it('ButtonGroups 事件分发处理 点击[启用]按钮带确认框',()=>{
    const handleClickMock= jest.fn()
    const { wrapper, props } = setup({
      handleClick: handleClickMock
    });
    wrapper.find('Button[actionkey="enabled"]').simulate('click')
    expect(handleClickMock.mock.calls.length).toBe(0);
    wrapper.find('Confirm').first().prop('onConfirm').call()
    expect(handleClickMock.mock.calls[0][0]).toBe('enabled');
  })

  it('ButtonGroups 事件分发处理 点击[确认框标题]按钮带确认框',()=>{
    const handleClickMock= jest.fn()
    const { wrapper, props } = setup({
      handleClick: handleClickMock
    });
    wrapper.find('Button[actionkey="confirmTitle"]').simulate('click')
    expect(handleClickMock.mock.calls.length).toBe(0);
    wrapper.find('Confirm').at(1).prop('onConfirm').call()
    expect(handleClickMock.mock.calls[0][0]).toBe('confirmTitle');
  })
})
