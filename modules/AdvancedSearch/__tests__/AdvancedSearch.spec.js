import React from 'react'
import {shallow,mount,render} from 'enzyme'

import {
  Input,
  Select,
} from 'antd'
import AdvancedSearchForm from '../AdvancedSearch'
import Locale from '../locale'

const setup = (props={}) => {
  // 模拟 props
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(
    <AdvancedSearchForm {...props}/>
  );

  return {
    props,
    wrapper
  }
}



describe("AdvancedSearchForm shallow render", () => {
  it("render without params", (done) => {
    const { wrapper, props } = setup();
    expect(wrapper.instance()).toBeInstanceOf(AdvancedSearchForm)
    // expect(wrapper.find('[name="keyType"]').exists()).toBe(true)
    // expect(wrapper.find('[name="keyWord"]').exists()).toBe(true)
    done()
  });

  it("render with one children",(done)=>{
    const wrapper =shallow(
      <AdvancedSearchForm keysOption={[{
        label:"name",
        value:0
      }]}>
        <Input name="callState" label="呼叫类型"  />
      </AdvancedSearchForm>
    );
    expect(wrapper.find('Input[name="callState"]').exists()).toBe(true)
    done()
  })
  it("render with childrens",(done)=>{
    const wrapper =shallow(
      <AdvancedSearchForm keysOption={[{
        label:"name",
        value:0
      }]}>
        <Input name="callState" label="呼叫类型"  />
        <Select name="inputAcc" label="hr" />
      </AdvancedSearchForm>
    );
    expect(wrapper.find('Input[name="callState"]').exists()).toBe(true)
    expect(wrapper.find('Select[name="inputAcc"]').exists()).toBe(true)
    done()
  })
  xit("render with params",(done)=>{
    const props={
      keysOption: [{
        label:"name",
        value:0
      }],
      showConfig:true,
      module:1,
      filterSubmitHandler:jest.fn()
    }
    const { wrapper} = setup(props)
    expect(wrapper.find('Button[icon="setting"]').exists()).toBe(true)
    expect(wrapper.find('Button[icon="down"]').exists()).toBe(true)
    // wrapper.find('Button[icon="down"]').simulate('click');
    // expect(wrapper.find('Button[icon="down1"]').exists()).toBe(true)
  })

  xit("render with childrens than 7 max render 7",(done)=>{
    const wrapper =shallow(
      <AdvancedSearchForm keysOption={[{
        label:"name",
        value:0
      }]}>
        <Input name="callState" label="呼叫类型"  />
        <Input name="callState1" label="呼叫类型"  />
        <Input name="callState2" label="呼叫类型"  />
        <Input name="callState3" label="呼叫类型"  />
        <Input name="callState4" label="呼叫类型"  />
        <Input name="callState5" label="呼叫类型"  />
        <Input name="callState6" label="呼叫类型"  />
        <Input name="callState7" label="呼叫类型"  />
        <Input name="callState8" label="呼叫类型"  />
        <Input name="callState9" label="呼叫类型"  />
        <Input name="callState10" label="呼叫类型"  />
        <Select name="inputAcc" label="hr" />
      </AdvancedSearchForm>
    );
    expect(wrapper.find('FormItem[colon=false]')).toHaveLength(7)
  //  expect(wrapper.find('CalendarPicker[name="callTime"]').exists()).toBe(true)
    done()
  })

});

describe("AdvancedSearchForm mount render and behavior", () => {

  xit("render with childrens expand",(done)=>{
    const wrapper =mount(
      <AdvancedSearchForm filterSubmitHandler={jest.fn()} keysOption={[{
        label:"name",
        value:0
      }]}>
        <Input name="callState" label="呼叫类型"  />
        <Input name="callState1" label="呼叫类型"  />
        <Input name="callState2" label="呼叫类型"  />
        <Input name="callState3" label="呼叫类型"  />
        <Input name="callState4" label="呼叫类型"  />
        <Input name="callState5" label="呼叫类型"  />
        <Input name="callState6" label="呼叫类型"  />
        <Input name="callState7" label="呼叫类型"  />
        <Input name="callState8" label="呼叫类型"  />
        <Input name="callState9" label="呼叫类型"  />
        <Input name="callState10" label="呼叫类型"  />
        <Select name="inputAcc" label="hr" />
      </AdvancedSearchForm>
    );
    expect(wrapper.find('FormItem>FormItem[colon=false]')).toHaveLength(7)
    const e={
      preventDefault:jest.fn()
    }
    expect(wrapper.state('expand')).toBe(false)
    // wrapper.find('Button[shape="circle"][icon="down"]').simulate('click',e)
    // expect(wrapper.state('expand')).toBe(true)
    // wrapper.find('Button[shape="circle"][icon="up"]').simulate('click',e)
    // expect(wrapper.state('expand')).toBe(false)
    done()
  })

  it.skip("submit filterSubmitHandler",(done)=>{
    const props={
      keysOption:[{
        label:"name",
        value:0
      }],
      filterSubmitHandler:jest.fn()
    }
    const wrapper =shallow(
      <AdvancedSearchForm {...props}>
        <Input name="callState" label="呼叫类型" defaultValue="11" />
        <Input name="callState2" label="呼叫类型"  />
      </AdvancedSearchForm>
    );
    // console.log(wrapper.find('Button[htmlType="submit"]'))
    const e={
      preventDefault:jest.fn()
    }
    wrapper.find('Button[htmlType="submit"]').simulate('submit',e)
    console.log(e.preventDefault.mock.calls)
    console.log(props.filterSubmitHandler.mock.calls)
    // expect(props.filterSubmitHandler.mock.calls.length).toBe(1)
    // expect(props.filterSubmitHandler.mock.calls).toContainEqual([{
    //   callState:undefined,
    //   callState2:undefined,
    // }])
    done()
  })

  xit('expand AdvancedSearchForm by children than 3',()=>{})

  it('AdvancedSearchForm Component has no locale',(done)=>{
    const { wrapper, props } = setup();
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(Locale)
    done()
  })

  it('AdvancedSearchForm Component has locale with searchText',(done)=>{
    const { wrapper, props } = setup({locale:{searchText:"查询"}});
    const localeTest = {searchText:"查询",resetText:"重置",upText:"收起",downText:"展开"}
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(localeTest)
    done()
  })

  it('AdvancedSearchForm Component has locale with all',(done)=>{
    const { wrapper, props } = setup({locale:{searchText:"搜索1",resetText:"重置1",upText:"收起1",downText:"展开1"}});
    const localeTest = {searchText:"搜索1",resetText:"重置1",upText:"收起1",downText:"展开1"}
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(localeTest)
    done()
  })

  it('AdvancedSearchForm Component has locale and children is no exists',(done)=>{
    const { wrapper, props } = setup({locale:{searchText:"搜索1",resetText:"重置1",upText:"收起1",downText:"展开1",okText:"其他"}});
    const localeTest = {searchText:"搜索1",resetText:"重置1",upText:"收起1",downText:"展开1",okText:"其他"}
    expect(wrapper.find('LocaleReceiver').prop('defaultLocale')).toEqual(localeTest)
    done()
  })

})
