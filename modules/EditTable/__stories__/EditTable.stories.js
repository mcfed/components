import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { Button, Input } from "antd";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { actions } from "@storybook/addon-actions";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import md from "../README.md";

import EditTable from "../index";

const stories = storiesOf("EditTable", module);
stories.addParameters({ jest: ["EditTable.spec.js"] });

const tableConf = {
  onChange: data => {
    console.log("onchange", data);
  },
  data: [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    },
    {
      key: "3",
      name: "胡彦黑",
      age: 92,
      address: "西湖区湖底公园1号"
    },
    {
      key: "4",
      name: "胡彦哈",
      age: 22,
      address: "西湖区湖底公园1号"
    },
    {
      key: "5",
      name: "胡彦额",
      age: 45,
      address: "西湖区湖底公园1号"
    }
  ],
  columns: [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      editComponent: () => <Input />,
      editConfig: {}
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      editComponent: () => <Input />,
      editConfig: {}
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ]
};

stories.add(
  "基础使用",
  () => {
    return <EditTable {...tableConf} />;
  },
  { notes: { markdown: md } }
);
