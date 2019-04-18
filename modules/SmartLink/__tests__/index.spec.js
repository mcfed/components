import React from 'react'
import {shallow,mount,render} from 'enzyme'
// import {Link} from 'react-router'
import SmartLink from '../index'

console.log(SmartLink)



const setup = (children,props)=>{
  const wrapper = shallow(
    <SmartLink {...props}>{children}</SmartLink>
  )
  return {
    wrapper,
    props
  }
}

describe.skip("smartlink unit case",()=>{


  it("smartlink is based on link",()=>{
    const {wrapper,props} = setup(
      (<div></div>),
      {}
    )

    expect(wrapper.find("Link").exists()).toBe(true)
  })
})
