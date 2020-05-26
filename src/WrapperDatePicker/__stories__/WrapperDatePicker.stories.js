import React from 'react';
import {DatePicker} from 'antd';
import {storiesOf} from '@storybook/react';
import BaseForm from '../../BaseForm/index';
import FormItem from '../../FormItem/index';
import WrapperDatePicker from '../index';
import Readme from '../README.md';
import {action} from '@storybook/addon-actions';

const stories = storiesOf('WrapperDatePicker', module);

stories.addParameters({jest: ['WrapperDatePicker.spec.js']});

stories.add(
  '基础用法',
  () => {
    return (
      <WrapperDatePicker>
        <DatePicker onChange={action('DatePicker')} placeholder='选择日期' />
      </WrapperDatePicker>
    );
  },
  {notes: {markdown: Readme}}
);

stories.add(
  '结合FormItem用法',
  () => {
    return (
      <BaseForm>
        <FormItem>
          <DatePicker name='datepicker' label='选择日期 ' />
        </FormItem>
      </BaseForm>
    );
  },
  {notes: {markdown: Readme}}
);
