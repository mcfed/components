import React, { PropTypes } from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "antd";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { actions } from "@storybook/addon-actions";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import md from "../index.md";
import { Switch, Checkbox } from "antd";

import CollapsePanel from "../index";
import BaseForm from "../../BaseForm/index";

const stories = storiesOf("CollapsePanel", module);
stories.addParameters({ jest: ["CollapsePanel.spec.js"] });

stories.add(
  "基础使用",
  () => (
    <BaseForm>
      <CollapsePanel
        title={123}
        control={<Switch name="test" defaultValue={1} defaultChecked={true} />}
        showArrow={true}
        defaultActive={true}
      >
        <div>123123</div>
        <h2>enlsdkf</h2>
      </CollapsePanel>
      <CollapsePanel
        title={456}
        control={<Checkbox name="test1" defaultValue={0} />}
        showArrow={true}
        defaultActive={true}
      >
        <div>456456</div>
        <h2>enlsdkf</h2>
      </CollapsePanel>
      <CollapsePanel
        title={79}
        control={123}
        showArrow={true}
        defaultActive={true}
      >
        <div>97897</div>
        <h2>enlsdkf</h2>
      </CollapsePanel>
    </BaseForm>
  ),
  { notes: { markdown: md } }
);
