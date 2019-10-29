import React from "react";
import { shallow, mount, render } from "enzyme";
import { Link } from "react-router";
import SmartLink from "../index";

const setup = (children, props) => {
  const wrapper = shallow(<SmartLink {...props}>{children}</SmartLink>);
  return {
    wrapper,
    props
  };
};

describe("smartlink unit case", () => {
  it("smartlink 渲染后子元素包含", () => {
    const { wrapper, props } = setup(<div className="aa" />, {});

    expect(wrapper.find(".aa").exists()).toBe(true);
  });

  it("smartlink render ", () => {
    const { wrapper, props } = setup(<div />, {
      a: 1,
      b: 2
    });
    expect(wrapper.instance().render()).toEqual(
      React.createElement(Link, Object.assign({}, props), <div />)
    );
  });

  it("smartlink resolveToLocation 方法 to是字符串时", () => {
    const params = {
      to: "abc",
      router: {
        location: {
          pathname: "/cde"
        }
      }
    };
    const { wrapper, props } = setup(<div />, {});

    expect(
      wrapper.instance().resolveToLocation(params.to, params.router)
    ).toEqual([params.router.location.pathname, params.to].join("/"));
  });

  it("smartlink resolveToLocation to是json时", () => {
    const params = {
      to: {
        pathname: "abc"
      },
      router: {
        location: {
          pathname: "/cde"
        }
      }
    };
    const { wrapper, props } = setup(<div />, {});

    expect(
      wrapper.instance().resolveToLocation(params.to, params.router)
    ).toEqual(params.to);
  });

  it("smartlink resolveToLocation to是function时", () => {
    const params = {
      to: jest.fn(),
      router: {
        location: {
          pathname: "/cde"
        }
      }
    };
    const { wrapper, props } = setup(<div />, {});
    wrapper.instance().resolveToLocation(params.to, params.router);
    expect(params.to.mock.calls.length).toEqual(1);
  });

  it.skip("smartlink hanldeclick event.preventDefault 调用", () => {
    const { wrapper, props } = setup(<div />, {});
    const eventFn = jest.fn();
    wrapper.instance().handleClick(eventFn);
    expect(eventFn.mock.calls.length).toBe(1);
  });

  it.skip("smartlink hanldeclick 若props传入onclick 则调用onclick", () => {
    const { wrapper, props } = setup(<div />, {
      onClick: jest.fn()
    });
    const eventFn = jest.fn();
    wrapper.instance().handleClick(eventFn);
    expect(props.onClick.mock.calls.length).toBe(1);
  });
});
