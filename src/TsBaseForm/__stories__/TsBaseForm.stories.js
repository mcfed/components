import React from 'react';
import {Input, Select} from 'antd';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

import BaseForm from '../index';
import FormItem from '../../TsFormItem';

const stroies = storiesOf('TsBaseForm', module);

stroies.add('基础用法 with formitem', () => {
  return (
    <BaseForm>
      <FormItem label='input headsearch a' name='aaaa'>
        <Input defaultValue='aaaa' />
      </FormItem>
      <FormItem
        label='select headsearch b'
        name='bbbb'
        options={[
          {label: 'aaaa', value: 'aaaa'},
          {label: 'bbbb', value: 'bbbb'},
          {label: 'cccc', value: 'cccc'}
        ]}>
        <Select defaultValue='aaaa' />
      </FormItem>
    </BaseForm>
  );
});

stroies.add('layout change ', () => {
  return (
    <BaseForm layout={text('layout', 'inline')}>
      <FormItem label='input headsearch a' name='aaaa'>
        <Input defaultValue='aaaa' />
      </FormItem>
      <FormItem
        label='select headsearch b'
        name='bbbb'
        options={[
          {label: 'aaaa', value: 'aaaa'},
          {label: 'bbbb', value: 'bbbb'},
          {label: 'cccc', value: 'cccc'}
        ]}>
        <Select defaultValue='aaaa' />
      </FormItem>
    </BaseForm>
  );
});

stroies.add('itemlayout change ', () => {
  return (
    <BaseForm
      itemLayout={{
        labelCol: {
          span: 12
        },
        wrapperCol: {
          span: 12
        }
      }}>
      <FormItem label='input headsearch a' name='aaaa'>
        <Input defaultValue='aaaa' />
      </FormItem>
      <FormItem
        label='select headsearch b'
        name='bbbb'
        options={[
          {label: 'aaaa', value: 'aaaa'},
          {label: 'bbbb', value: 'bbbb'},
          {label: 'cccc', value: 'cccc'}
        ]}>
        <Select defaultValue='aaaa' />
      </FormItem>
    </BaseForm>
  );
});
