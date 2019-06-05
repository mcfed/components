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
  
});
