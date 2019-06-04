import React from "react";
import { Input, Select,Row,Button  } from "antd";
import { storiesOf } from "@storybook/react";
import BaseForm from "../../BaseForm/index";
import FormItem from "../index";
import TreeTile from "../../TreeTile/index"
import Readme from "../README.md";
const stories = storiesOf("FormItem", module);

stories.addParameters({ jest: ["FormItem.spec.js"] });

const renderOptionItem = (item, idx) => {
  return (
    <Select.Option key={idx} value={item.value}>
      {item.label}
    </Select.Option>
  );
};

const treeData = [
  {
    title: '基本信息',
    key: 'baseInfo',
    children: [
      {title: '姓名', key: '1name'},
      {title: '性别',key: '2sex'},
      {title: '年龄',key: '3age'}
    ]
  },
  {
    title: '证件信息',
    key: 'cardInfo',
    children: [
      { title: '身份证', key: 'idCard' },
      { title: '医保卡', key: 'uIdCard' },
      { title: '护照', key: 'passCard' }
    ]
  }
];

stories.add(
  "基础用法",
  () => {
    const testOptions = [
      { value: 1, label: "test1" },
      { value: 2, label: "test2" },
      { value: 3, label: "test3" },
      { value: 4, label: "test4" },
      { value: 5, label: "test5" }
    ];
    return (
      <div>
      <BaseForm>
        <FormItem>
          <Input name="input" placeholder="input基础用法示例" />
        </FormItem>
        <FormItem>
          <Select
            label="select和options用法示例"
            name="options"
            placeholder="select和options用法示例"
            options={testOptions}
            renderItem={renderOptionItem}
          />
        </FormItem>
        <FormItem>
          <Input label="label用法示例" name="label" placeholder="label" />
        </FormItem>
        <FormItem>
          <Input
            label="disbled用法示例"
            name="disbled"
            placeholder="disbled"
            disbled={true}
          />
        </FormItem>
        <FormItem>
          <Input
            label="renderable用法示例"
            name="renderable"
            placeholder="renderable"
            renderable={true}
          />
        </FormItem>
        <FormItem>
          <Input
            label="hidden用法示例"
            name="hidden"
            placeholder="hidden"
            hidden={true}
          />
        </FormItem>
        <FormItem>
          <Input
            label="fetch用法示例"
            name="fetch"
            placeholder="fetch"
            fetch={"/FormItem/demo/getdbtype"}
          />
        </FormItem>
        <FormItem>
          <Input
            label="fetch + params用法示例"
            name="params"
            placeholder="params"
            fetch={"/FormItem/demo/getdbtype"}
            params={true}
          />
        </FormItem>
        <FormItem>
          <Input
            label="fetch + fetchCallback用法示例"
            name="fetchCallback"
            placeholder="fetchCallback"
            fetch={"/FormItem/demo/getdbtype"}
            params={true}
            fetchCallback={() => {
              console.log("aa");
            }}
          />
        </FormItem>

        {/* TreeTile 示例 */}
        <FormItem>
          <TreeTile
            label="TreeTile用法示例"
            name="TreeTile"
            dataSource={treeData} 
            title={"请选择XXXX"}            
          />
        </FormItem>

         
      </BaseForm>
      
      </div>
    );
  },
  { notes: { markdown: Readme } }
);
