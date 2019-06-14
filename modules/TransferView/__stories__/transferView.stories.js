import React from "react";
import { Input, Select } from "antd";
import { storiesOf } from "@storybook/react";
import AdvancedSearch from "../index";
import { actions } from "@storybook/addon-actions";
// import Readme from "../README.md";

const stories = storiesOf("TransferView", module);
const eventsFromNames = actions("onClick", "onMouseOver");

// stories.addParameters({ jest: ["TransferView.spec.js"] });
const targetKeys = [];
const mockData = [];
for (let i = 0; i < 20; i++) {
  const data = {
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    name: this.getName(`name${i + 1}`,i),
    chosen: Math.random() * 2 > 1,
  };
  if (data.chosen) {
    targetKeys.push(data.key);
  }
  mockData.push(data);
}
const header = [{
  text: 'title',
  width: 160
},{
  text: 'description',
  width: 80
},{
  text: 'name',
  width: 60
}]
const searchItem = 'title'

function handleChange(targetKeys, direction, moveKeys){
  console.log(targetKeys, direction, moveKeys);
  // targetKeys = targetKeys
}

function handleSearch(dir, value){
  console.log('search:', dir, value);
};

renderFooter = () => (
  <Button
    size="small"
    style={{ float: 'right', margin: 5 }}
    // onClick={getMock}
  >
      reload
  </Button>
)
stories.add(
  "基础用法",
  () => (
    <McTransfer
      dataSource={mockData}
      // listStyle={listStyle}
      targetKeys={targetKeys}
      onChange={handleChange}
      header={header}
      titles={['Source', 'Target']}
      showSearch={true}
      onSearch={handleSearch}
      searchItem={searchItem}
      footer={renderFooter}
    />
  ),
  { notes: { markdown: Readme } }
);