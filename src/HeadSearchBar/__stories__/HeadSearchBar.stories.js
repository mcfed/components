import React from 'react';
import {Input, Select} from 'antd';
import {storiesOf} from '@storybook/react';
import HeadSearchBar from '../index';

import FormItem from '../../TsFormItem';

const stroies = storiesOf('HeadSearchBar', module);

stroies.add('基础用法', () => {
  const searchFn = value => {
    console.log(value);
  };
  return (
    <HeadSearchBar filterSubmitHandler={searchFn}>
      <FormItem label='input headsearch a' name='aaaa'>
        <Input defaultValue='aaaa' />
      </FormItem>
      <FormItem label='select headsearch b' name='bbbb'>
        <Select
          defaultValue='aaaa'
          options={[
            {label: 'aaaa', value: 'aaaa'},
            {label: 'bbbb', value: 'bbbb'},
            {label: 'cccc', value: 'cccc'}
          ]}
        />
      </FormItem>
      <FormItem label='input headsearch c' name='cccc'>
        <Input defaultValue='ccccc' />
      </FormItem>
      <FormItem label='input headsearch d' name='dddd'>
        <Input defaultValue='dddd' />
      </FormItem>
    </HeadSearchBar>
  );
});
