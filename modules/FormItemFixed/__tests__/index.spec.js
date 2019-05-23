import React from "react";
import { shallow } from "enzyme";
import FormItemFixed from "../index";

const setup = props => {
  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(
    <FormItemFixed {...props}>
      <div className="child">abc</div>
    </FormItemFixed>
  );
  return {
    props,
    wrapper
  };
};

describe("FormItemFixed 组件测试", () => {


  it("是否正常渲染", () => {
    const {wrapper} = setup()
    expect(wrapper.find('.child').exists()).toBe(true)
  });

  it("默认类名为element-text-box", () => {
    const {wrapper} = setup()
    expect(wrapper.prop('className')).toBe('element-text-box');
  });

  it("若不需要修正css 传入isresetcs false，类名为element-noreset", () => {
    const {wrapper} = setup({
      isResetCss:false
    })
    expect(wrapper.prop('className')).toBe('element-noreset')
  });
});
