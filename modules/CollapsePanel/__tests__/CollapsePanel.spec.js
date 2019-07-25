import React from "react";
import { shallow } from "enzyme";
import CollapsePanel from "../index";
import { Switch } from "antd";
import FormItem from "../../FormItem/index";

const setup = props => {
  const context = {
    formRef: {
      getFieldValue(name, item) {
        return function(component) {
          return component;
        };
      }
    }
  };
  const wrapper = shallow(
    <CollapsePanel title="测试一发" control={<Switch name="test" />} {...props}>
      <div>123123</div>
    </CollapsePanel>,
    { context }
  );

  return {
    wrapper
  };
};

describe("CollapsePanel 组件方法测试", () => {
  it("componentDidMount 测试", () => {
    const { wrapper } = setup();
    wrapper.setActiveStatus = jest.fn();
    wrapper.instance().componentDidMount();

    expect(wrapper.setActiveStatus).toHaveBeenCalled();
  });
  it("componentWillReceiveProps 测试", () => {
    const { wrapper } = setup();
    wrapper.setActiveStatus = jest.fn();
    wrapper.instance().componentWillReceiveProps();

    expect(wrapper.setActiveStatus).toHaveBeenCalled();
  });

  it("isExtraIsReactDom 测试", () => {
    const { wrapper } = setup();
    const dom = <div>123</div>;
    expect(wrapper.instance().isExtraIsReactDom(213)).toEqual(false);
    expect(wrapper.instance().isExtraIsReactDom(dom)).toEqual(true);
  });

  it("renderExtra 测试 control为dom时", () => {
    const { wrapper } = setup();
    expect(wrapper.instance().renderExtra()).toEqual(
      <FormItem containerTo={true}>
        <Switch name="test" />
      </FormItem>
    );
  });
  it("renderExtra 测试 control为text时", () => {
    const { wrapper } = setup({
      control: 123
    });
    expect(wrapper.instance().renderExtra()).toEqual(123);
  });
});
