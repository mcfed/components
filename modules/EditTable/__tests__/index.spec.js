import {shallow,mount,render} from 'enzyme'
import React from 'react'

import EditTable from '../index'


const setup = (props) =>{
  const columns = [{
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
    <EditTable {...props} columns={columns}></EditTable>
  )

  return {
    wrapper,
    props
  }
}


describe("edittable base test", () => {

  it("render ", () => {

    const {wrapper , props} = setup()
    console.log(wrapper)
    expect(wrapper.find('Table').exists()).toBe(true)
  });

});
