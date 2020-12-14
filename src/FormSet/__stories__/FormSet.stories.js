import React from 'react';
import {Input, Select} from 'antd';
import {storiesOf} from '@storybook/react';
import FormSet from '../index';
import FormItem from '../../FormItem/index';
import BaseForm from '../../BaseForm/index';
const stories = storiesOf('FormSet', module);

stories.add('基础用法', () => {
  return (
    <div>
      <BaseForm
        itemLayout={{
          labelCol: {span: 2},
          wrapperCol: {span: 10}
        }}>
        <FormSet title='这是一个很好看的标题'>
          <FormItem
            label='第一个输入框'
            name='input1'
            defaultValue='默认值填入'>
            <Input />
          </FormItem>
          <FormItem
            label='第二个子项'
            name='section1'
            defaultValue={2}
            options={[
              {value: 1, label: '第一个标签'},
              {value: 2, label: '第二个标签'},
              {value: 3, label: '第三个标签'}
            ]}
            renderItem={(item, index) => (
              <Select.Option value={item.value}>{item.label} </Select.Option>
            )}>
            <Select></Select>
          </FormItem>
        </FormSet>
      </BaseForm>
    </div>
  );
});
