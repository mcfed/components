
import React from 'react'
import {shallow,mount,render} from 'enzyme'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import DatePicker from 'antd/lib/date-picker'
import FormItem from '../index'
import BaseForm from '../../BaseForm'

const Option=Select.Option;
const { RangePicker } = DatePicker

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
    formLayout:{
      labelCol:{
        span:3,
      },
      wrapperCol:{
        span:18,
      }
    }
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

const setupForm = (children,props) => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const context={
    formRef:{
      getFieldDecorator(name,item){
        return function(component){
          return component
        }
      }
    },
    formLayout:{
      labelCol:{
        span:3,
      },
      wrapperCol:{
        span:18,
      }
    }
  }
  const wrapper = shallow(
    <BaseForm >
        {children}
    </BaseForm>
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

  it('FormItem render SELECT 带 options', (done) => {
    expect(wrapper.state('childData')).toBe(options)
    expect(wrapper.find(Option).length).toBe(2)
    done()
  })

  it('FormItem render SELECT 带 fetch', (done) => {
    const options=[{
      "label":"1","value":"1"
    },{
      "label":"2",value:"2"
    },{
      "label":"3",value:"3"
    }]
    const { wrapper, props } = setup(<Select name="select" label="select" fetch={options}  />);
    const select =wrapper.find("Select")
    done()
  })

  it('FormItem render SELECT 带 fetch url', (done) => {
    const options=[{
      "label":"1","value":"1"
    },{
      "label":"2",value:"2"
    },{
      "label":"3",value:"3"
    }]
    const { wrapper, props } = setup(<Select name="select" label="select" fetch={"http://192.168.200.178:3000/mock/63/capaa/v1/plugin/list"} fetchCallback={(result)=>{
       console.log(result)
       return result.data.pluginList
     }
     } />);
    const select =wrapper.find("Select")
    done()
  })

  it('FormItem render getPopupContainer',(done)=>{
    const { wrapper, props } = setup(<Select name="select" label="select" />);
    expect(wrapper.find("Select").props()).toHaveProperty("getPopupContainer")
    done()
  })

  it.skip('FormItem render DatePicker', (done) => {
    const { wrapper, props } = setup(<DatePicker name="select" label="DatePicker" defaultValue={"2018-12-12"} />);
   // console.log(wrapper.prop('children'))
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

describe('FormItem Element 属性测试', () => {

  it('disabled 属性 boolean {true}',(done)=>{
    const { wrapper, props } = setup(<Input disabled={true} name="select" label="DatePicker" defaultValue={"2018-12-12"} />);
    let element=wrapper.find("Input")
    expect(element.prop('disabled')).toBe(true)
    done()
  })

  it('disabled 属性 function',(done)=>{
    const { wrapper, props } = setup(<Input disabled={(form)=>true} name="select" label="DatePicker" defaultValue={"2018-12-12"} />);
    let element=wrapper.find("Input")
    expect(element.prop('disabled')).toBe(true)
    done()
  })

  it('renderable 属性 boolean {true}',(done)=>{
    const { wrapper, props } = setup(<Input renderable={true} name="select" label="DatePicker" defaultValue={"2018-12-12"} />);
    let element=wrapper.find("Input")
    expect(element.exists()).toBe(true)
    done()
  })

  it.skip('renderable 属性 boolean {false}',(done)=>{
    const { wrapper, props } = setup(<Input renderable={false} name="select" label="DatePicker" defaultValue={"2018-12-12"} />);
    let element=wrapper.find("Input")
    // expect(element.prop('renderable')).toBe(false)
    // expect(element.exists()).toBe(false)
    done()
  })

  it.skip('renderable 属性 function {false}',(done)=>{
    const { wrapper, props } = setup(<Input renderable={(form)=>true} name="select" label="DatePicker" defaultValue={"2018-12-12"} />);
    let element=wrapper.find("Input")
    // console.log(wrapper.prop("children"))
    // expect(element.prop('renderable')).toBe(false)
    // expect(element.exists()).toBe(false)
    done()
  })

})

describe('setupForm', () => {
  it('BaseForm itemLayout',(done)=>{
    const { wrapper, props } = setup(
      <FormItem labelCol={{span: 3}} wrapperCol={{span:15}}>
        <Input disabled={(form)=>true} name="select" label="DatePicker" defaultValue={"2018-12-12"} />
      </FormItem>
    );
    expect(wrapper.find("FormItem").at(1).prop("labelCol")).toEqual({span:3})
    expect(wrapper.find("FormItem").at(1).prop("wrapperCol")).toEqual({span:15})
    // expect(wrapper.find("FormItem").props())
    done()
  })

})
