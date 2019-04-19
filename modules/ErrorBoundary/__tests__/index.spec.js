import React from 'react'
import {shallow,enzyme,render} from 'enzyme'
import ErrorBoundary from '../index'


const setup = (children,props)=>{
  const wrapper = shallow(
    <ErrorBoundary {...props}>
      {children}
    </ErrorBoundary>
  )

  return {
    wrapper,
    children
  }
}


describe("ErrorBoundary 正确性测试", () => {

    it("若自组件未出现错误则正常渲染",()=>{
      const {wrapper} = setup(
        <div className="aa"></div>
      )

      expect(wrapper.find('div.aa').exists()).toBe(true)
    })

    it.skip("若自组件有错误则展示出错信息",()=>{
      const {wrapper} = setup(
        //如何测试出错
      )
    })
});
