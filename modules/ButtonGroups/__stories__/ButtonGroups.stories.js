import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "antd";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { actions } from "@storybook/addon-actions";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import md from "../index.md";

import ButtonGroups from "../index";

const stories = storiesOf("ButtonGroups", module);
stories.addParameters({ jest: ["ButtonGroups.spec.js"] });

stories.add(
  "基础使用",
  () => (
    <ButtonGroups>
      <Button>123</Button>
      <Button>456</Button>
      <Button>789</Button>
    </ButtonGroups>
  ),
  { notes: { markdown: md } }
);

stories.add(
  "showSize需要配合mode使用",
  () => {
    return (
      <ButtonGroups showSize={2} mode="ButtonMenu">
        <Button>{text("label", "ceshitext")}</Button>
        <Button>123</Button>
        <Button>234</Button>
        <Button>345</Button>
        <Button>567</Button>
        <Button>678</Button>
      </ButtonGroups>
    );
  },
  { notes: { markdown: md } }
);

stories.add(
  "button icon 模式",
  () => {
    return (
      <ButtonGroups viewMode="icon">
        <Button icon="plus">新增</Button>
        <Button icon="edit">编辑</Button>
        <Button icon="delete">删除</Button>
      </ButtonGroups>
    );
  },
  { notes: { markdown: md } }
);

stories.add(
  "handleClick ",
  () => {
    return (
      <ButtonGroups
        viewMode="icon"
        handleClick={actionkey => {
          console.log(actionkey);
        }}
      >
        <Button icon="plus" actionkey="add">
          新增
        </Button>
        <Button icon="edit" actionkey="edit">
          编辑
        </Button>
        <Button icon="delete" actionkey="remove">
          删除
        </Button>
      </ButtonGroups>
    );
  },
  { notes: { markdown: md } }
);
