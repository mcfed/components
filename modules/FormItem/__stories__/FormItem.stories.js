
import React from 'react'
import {Input,Select} from 'antd'
import { storiesOf  } from '@storybook/react'
import BaseForm from '../../BaseForm/index'
import FormItem from '../index'
import Readme from '../README.md'

const stories = storiesOf('FormItem', module)

stories.addParameters({ jest: ['FormItem.spec.js'] })

const renderOptionItem = (item, idx) => {
  return <Select.Option key={idx} value={item.value}>{item.label}</Select.Option>
}

stories.add('基础用法',() =>{
    const testOptions = [
			{value:1,label:'test1'},
			{value:2,label:'test2'},
			{value:3,label:'test3'},
			{value:4,label:'test4'},
			{value:5,label:'test5'},
		]
    return (
      <BaseForm>
        <FormItem>
          <Input name="input" placeholder="input基础用法示例"/>
        </FormItem>
        <FormItem>
          <Select label="select和options用法示例"name="options" placeholder="select和options用法示例" options={testOptions} renderItem={renderOptionItem}/>
        </FormItem>
        <FormItem>
          <Input label="label用法示例" name="label" placeholder="label"/>
        </FormItem>
        <FormItem>
          <Input label="disbled用法示例" name="disbled" placeholder="disbled" disbled={true}/>
        </FormItem>
        <FormItem>
          <Input label="renderable用法示例" name="renderable" placeholder="renderable" renderable={true}/>
        </FormItem>
        <FormItem>
          <Input label="hidden用法示例" name="hidden" placeholder="hidden" hidden={true}/>
        </FormItem>
        <FormItem>
          <Input label="fetch用法示例" name="fetch" placeholder="fetch" fetch={"/FormItem/demo/getdbtype"}/>
        </FormItem>
        <FormItem>
          <Input label="fetch + params用法示例" name="params" placeholder="params" fetch={"/FormItem/demo/getdbtype"} params={true}/>
        </FormItem>
        <FormItem>
          <Input label="fetch + fetchCallback用法示例" name="fetchCallback" placeholder="fetchCallback" fetch={"/FormItem/demo/getdbtype"} params={true} fetchCallback={() => {console.log('aa')}}/>
        </FormItem>
        
        
      </BaseForm>
    )
  },
  { notes: { markdown: Readme }}
)

