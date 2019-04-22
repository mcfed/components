import React from 'react'
import {shallow,enzyme,render} from 'enzyme'
import ModalAndView from '../index'


const setup = (children,props) =>{
  const wrapper = shallow(
    <ModalAndView {...props}>
      {children}
    </ModalAndView>
  )

  return {
    wrapper,
    props
  }
}

describe("ModalAndView render", () => {

  it("title default is title", () => {
    const {wrapper} = setup(<div>测试子元素</div>,{})
    expect(wrapper.prop("title")).toBe("title")
  });

  it("title is what we defined", () => {
    const {wrapper} = setup(<div>测试子元素</div>,{
      title:"titleInit"
    })
    expect(wrapper.prop("title")).toBe("titleInit")
  });

  it("visible default is true", () => {
    const {wrapper} = setup(<div>测试子元素</div>,{})
    expect(wrapper.prop("visible")).toBe(true)
  });

  it("visible is what we init", () => {
    const {wrapper} = setup(<div>测试子元素</div>,{
      visible:false
    })
    expect(wrapper.prop("visible")).toBe(false)
  });

  it("maskClosable default is true", () => {
    const {wrapper} = setup(<div>测试子元素</div>,{})
    expect(wrapper.prop("maskClosable")).toBe(false)
  });

  it("maskClosable is what we init", () => {
    const {wrapper} = setup(<div>测试子元素</div>,{
      maskClosable:true
    })
    expect(wrapper.prop("maskClosable")).toBe(true)
  });
});

describe("ModalAndView methods", () => {

  it("handleBackRoute is not called", () => {
      const {wrapper} = setup(<div>测试子元素</div>,{
        actions:{},
        history:{},
        router:{}
      })
      const backRouteFn = jest.fn()
      wrapper.instance().handleBackRoute = backRouteFn
      expect(backRouteFn.mock.calls.length).toBe(0)
  });
});
