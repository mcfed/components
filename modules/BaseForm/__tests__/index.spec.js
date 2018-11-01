
import React from 'react';
import {shallow,mount,render} from 'enzyme';
import {Input} from 'antd';
import BaseForm from '../index'
import FormItem from '../../FormItem/index'

const setup = () => {
  // 模拟 props
  const props = {
    // Jest 提供的mock 函数
  //  onAddClick: jest.fn()
  }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(
    <BaseForm />
  );

  return {
    props,
    wrapper
  }
}


describe('BaseForm shallow render', () => {

  const { wrapper, props } = setup();

  it('BaseForm render with props custom formLayout', (done) => {
    const instance= shallow(<BaseForm itemLayout={{labelCol:{span:12},wrapperCol:{span:12}}}><FormItem><Input name="aaa" /></FormItem></BaseForm>)
    // instance.render()
    expect(instance.props('children').itemLayout).toHaveProperty('labelCol', {span:12});
    expect(instance.props('children').itemLayout).toHaveProperty('wrapperCol', {span:12});
    done()
  })

  it('BaseForm instanceOf From', (done) => {
    expect(wrapper.instance()).toBeInstanceOf(BaseForm)
    expect(wrapper.find('form').exists());
    done()
  })

  it('BaseForm has @FormCreate', (done) => {
    expect(wrapper.prop('form'))
    done()
  })


  it('BaseForm has childContext 需要结合子组件验证 ', (done) => {
     console.log(wrapper.props())
      // expect(wrapper.context('formRef'))
  //  console.log(expect().toBe.instanceOf)
    done()
  })
})

describe('FormItem render with formLayout ', () => {

  it('FormItem render labelCol wrapperCol', (done) => {
    // console.dir(instance.props())
    const instance= shallow(<BaseForm><FormItem labelCol={{span:8}} wrapperCol={{span:16}}><Input name="aaa" /></FormItem></BaseForm>)
    expect(instance.find(FormItem).props()).toHaveProperty('labelCol', {span:8});
    expect(instance.find(FormItem).props()).toHaveProperty('wrapperCol', {span:16});
    done()
  })
})
