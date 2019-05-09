import {shallow,mount,render} from 'enzyme'
import React from 'react'

import CustomTable,{CustomPagination} from '../index'


const setup = (props)=>{
  const wrapper = shallow(
    <CustomTable {...props}></CustomTable>
  )

  return {
    wrapper,
    props
  }
}
describe.skip("customTable 方法测试", () => {


  it("renderPagination 测试", () => {
    const {wrapper,props} = setup()

    console.log(wrapper.instance().renderPagination(undefined))
  });
});
