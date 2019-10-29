import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Table } from "antd";
import DataTable from "../index";

const setup = props => {
  // 模拟 props
  // const props = {
  //   // Jest 提供的mock 函数
  //   // onAddClick: jest.fn(),
  //   // actions:{
  //   //   listAction:jest.fn()
  //   // },
  //   reduce:{
  //     list:new Map(),
  //     spins:{
  //       tableSpin:false
  //     }
  //   }
  // }

  // 通过 enzyme 提供的 shallow(浅渲染) 创建组件
  const wrapper = shallow(<DataTable {...props} />);
  return {
    props,
    wrapper
  };
};

describe("DataTable 组件是否渲染", () => {
  const { wrapper, props } = setup();
  // case1
  // 通过查找存在 Input,测试组件正常渲染
  it("DataTable Component should be render", () => {
    //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
    // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
    expect(wrapper.find("Table").exists()).toBe(true);
    // expect(toJson(wrapper)).toMatchSnapshot();
  });

  it.skip("DataTable Component should be pagination", () => {
    // expect(wrapper.find('Pagination').exists()).toBe(true);
  });
});

describe("state visible with some methods", () => {
  const { wrapper, props } = setup();

  it("default visible state is false", () => {
    expect(wrapper.state("visible")).toBe(false);
  });

  it("trggier showPopover visible to be true", () => {
    wrapper.instance().showPopover();
    expect(wrapper.state("visible")).toBe(true);
  });

  it("trggier onClosePopup visible to be false", () => {
    wrapper.instance().showPopover();
    wrapper.instance().onClosePopup();
    expect(wrapper.state("visible")).toBe(false);
  });

  it("trggier onPopupVisibleChange to any", () => {
    wrapper.instance().onPopupVisibleChange(true);
    expect(wrapper.state("visible")).toBe(true);
  });
});

describe("defaultSort ", () => {
  const columns = [
      {
        title: "first",
        key: 1,
        dataIndex: "first"
      },
      {
        title: "second",
        key: 2,
        dataIndex: "second"
      }
    ],
    defaultSort = {
      columnKey: "first",
      order: "descend"
    };
  const defaultProps = {
    rowKey: "id",
    defaultSort: defaultSort,
    dataSource: [
      {
        first: 111,
        second: 222,
        id: 1
      },
      {
        first: 333,
        second: 444,
        id: 2
      }
    ],
    columns: columns
  };

  it("while defaultSort is exist", () => {
    const { wrapper, props } = setup({
      ...defaultProps
    });
    expect(wrapper.state("columns")).toEqual(
      columns.map(it => {
        defaultSort.columnKey == it.dataIndex
          ? (it = Object.assign(it, { defaultSortOrder: defaultSort.order }))
          : null;
        return it;
      })
    );
  });

  it("while defaultSort null", () => {
    const { wrapper, props } = setup({
      ...Object.assign(defaultProps, { defaultSort: {} })
    });
    expect(wrapper.state("columns")).toEqual(columns);
  });
});
