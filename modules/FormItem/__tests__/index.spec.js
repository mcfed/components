
import React from 'react';
import {shallow,mount,render} from 'enzyme';
import {Input,Select} from 'antd';
import FormItem from '../index'

const Option=Select.Option;

const setup = (children,props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const context={
    formRef:{
      getFieldDecorator(name,item){
        return function(component){
          return component
        }
      }
    },
    formLayout:{}
  }
  const wrapper = shallow(
    <FormItem>
      {children}
    </FormItem>
  ,{context});

  return {
    props,
    wrapper
  }
}


describe('FormItem shallow render', () => {

  const { wrapper, props } = setup(<Input name="aaa" label="test" />);
  it('FormItem render 带子组件', (done) => {
    expect(wrapper.find('[name="aaa"]').exists()).toBe(true)
    expect(wrapper.prop("label")).toBe("test")
    done()
  })
})

describe('FormItem shallow render with Select', () => {
  const options=[{
      label:"abc",
      value:"1"
    },{
      label:"abc2",
      value:"2"
    }]
  const renderItem=(item,key)=><Option key={key} value={item.value}>{item.label}</Option>
  const { wrapper, props } = setup(<Select name="select" label="select" options={options} renderItem={renderItem} />);
  it('FormItem render 带子组件', (done) => {
    expect(wrapper.find('[name="select"]').exists()).toBe(true)
    expect(wrapper.prop("label")).toBe("select")
    done()
  })

  it('FormItem render SELECT 带 fetch Array', (done) => {
    expect(wrapper.state('childData')).toBe(options)
    expect(wrapper.find(Option).length).toBe(2)
    done()
  })
//  不能使用shallow 模式
  it.skip('FormItem render 更新 Children Element options size 0',(done)=>{
    wrapper.find(Select).setProps({options:[{label:1,value:1}]})
    expect(wrapper.state('childData')).toBe([{label:1,value:1}])
    expect(wrapper.find(Option).length).toBe(0)
    done()
  })

  it.skip('FormItem render Tree 组件')
})
