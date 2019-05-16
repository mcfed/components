import React, { PropTypes } from 'react'
import { storiesOf } from '@storybook/react';
import {Button,Input} from 'antd'
import { withKnobs, text, boolean, number ,object} from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import md from '../index.md'

import BaseForm from '../index'
import FormItem from '../../FormItem/index'

const stories = storiesOf('BaseForm', module);
stories.addParameters({ jest : ['BaseForm.spec.js'] })

stories.add('基础使用(with formitem)',() => {

  return <BaseForm>
    <FormItem>
      <Input name="name" label="姓名"/>
    </FormItem>
    <FormItem>
      <Input name="age" label="年龄"/>
    </FormItem>
    <FormItem>
      <Input name="sex" label="性别"/>
    </FormItem>
  </BaseForm>
},{ notes : { markdown : md } })

stories.add('layout change',() => {
  return <BaseForm layout={text('layout','inline')}>
    <FormItem>
      <Input name="name" label="姓名"/>
    </FormItem>
    <FormItem>
      <Input name="age" label="年龄"/>
    </FormItem>
    <FormItem>
      <Input name="sex" label="性别"/>
    </FormItem>
  </BaseForm>
})
stories.add('itemLayout change',() => {
  return <BaseForm itemLayout={{
    labelCol:{
      span:12
    },
    wrapperCol:{
      span:12
    }
  }}>
    <FormItem>
      <Input name="name" label="姓名"/>
    </FormItem>
    <FormItem>
      <Input name="age" label="年龄"/>
    </FormItem>
    <FormItem>
      <Input name="sex" label="性别"/>
    </FormItem>
  </BaseForm>
})
