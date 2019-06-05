import { shallow, mount, render } from "enzyme";
import React from "react";
import TreeTile from "../index";


const setup = props => {
  const wrapper = shallow(<TreeTile {...props} />);

  return {
    wrapper,
    props
  };
};

describe("TreeTile render 是否正确渲染", () => {
    it("TreeTile 标题参数不传时渲染是否正确", () => {
        const { wrapper, props } = setup({});
        expect(wrapper.find("Card").prop("title")).toBe("请选择");
      });
});
