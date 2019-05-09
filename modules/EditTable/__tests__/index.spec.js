import {shallow,mount,render} from 'enzyme'
import React from 'react'
import {Button} from 'antd'

import EditTable from '../index'


const setup = (props) =>{
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];
  const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];
  const wrapper = shallow(
    <EditTable data={ dataSource } {...props} columns={columns} ></EditTable>
  )

  return {
    wrapper,
    props,
    dataSource,
    columns
  }
}


describe("edittable base test", () => {

  it("render ", () => {

    const {wrapper , props} = setup()
    // console.log(wrapper)
    expect(wrapper.find('Table').exists()).toBe(true)
  });

  it("默认state", () => {
    const {wrapper,props} = setup({
      data:undefined
    })

    expect(wrapper.state("data")).toEqual([])
    expect(wrapper.state("editingKey")).toBe("")
  });

  it("传值后的state", () => {
    const {wrapper,props,dataSource} = setup()

    expect(wrapper.state('data')).toEqual(dataSource);
  });

  it("render 的columns 是重新加工过的", () => {
    const {wrapper,props,dataSource,columns} = setup()

    expect(wrapper.find('Table').prop('columns')).toEqual(
      wrapper.state('columns').map((col) => {
        if (!col.editComponent) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            editConfig: col.editConfig,
            editDom: col.editComponent,
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record),
          }),
        };
      })
    );
  });

  it("render footer", () => {
    const {wrapper,props} = setup()
    expect(wrapper.find('Table').prop('footer')()).toEqual(
      <Button icon='plus' onClick={wrapper.instance().addNew} style={{width:'100%'}}>新增</Button>
    );
  });

});


describe("editable method ", () => {


  it("isEditing 默认为空，传入key为123 返回false", () => {

    const {wrapper,props} = setup()
    const record = {
      key:123
    }
    expect(wrapper.instance().isEditing(record)).toBe(false)
  });

  it("isEditing 默认为空，传入key为空 返回true", () => {
    const {wrapper,props} = setup()
    const record = {
      key:""
    }
    expect(wrapper.instance().isEditing(record)).toBe(true)
  });

  it("edit 方法调用,若key 为空，则返回false", () => {
    const {wrapper,props} = setup()
    const key = ""

    expect(wrapper.instance().edit(key)).toBe(undefined)
  });

  it("edit 方法调用，若key不为空，则 state 改变", () => {
    const {wrapper,props} = setup()

    const key = '123'
    wrapper.instance().edit(key)
    expect(wrapper.state('editingKey')).toBe('123')
  });

  it("delete 方法调用", () => {
    const onchangeFn = jest.fn()
    const  {wrapper,props,dataSource} = setup({
      onChange:onchangeFn
    })
    const key = '1'
    let oldData = wrapper.state('data')
    wrapper.instance().delete(key)
    expect(wrapper.state('data')).toEqual(
      oldData.filter(c=>c.key !== key)
    );
    expect(onchangeFn.mock.calls.length).toBe(1)
  });

  it("addNew 方法调用,若当前editingkey不为空则返回false", () => {
    const {wrapper,props} = setup()
    wrapper.instance().edit('1')
    expect(wrapper.instance().addNew()).toBe(false)
  });

  it("addNew 方法调用", () => {
    const {wrapper,props,dataSource} = setup()
    wrapper.instance().addNew()
    expect(wrapper.state('data').length).toBe(dataSource.length + 1)
  });

  it.skip("cancel 方法调用", () => {
    const {wrapper,props} = setup()
    const params = {
      form:undefined,
      key:'1'
    }
    wrapper.instance().cancel(params)
    //判断 是否删除 逻辑？
  });
});
