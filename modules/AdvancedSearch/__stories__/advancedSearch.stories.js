
import React from 'react'
import {Input,Select} from 'antd'
import { storiesOf  } from '@storybook/react'
import { action } from '@storybook/addon-actions'


import AdvancedSearch from '../AdvancedSearch'

storiesOf("查询栏组件",module)
  .add('基础组件',()=>
    <AdvancedSearch filterSubmitHandler={action('button-click')}>
      <Input name="name" label="姓名"  />
      <Select name="type" label="类型" />
    </AdvancedSearch>
  )
  .add('基础组件--3个以上查询条件时出现扩展',()=>
    <AdvancedSearch filterSubmitHandler={action('button-click')}>
      <Input name="name" label="姓名"  />
      <Select name="type" label="类型"  />
      <Select name="level" label="级别" />
      <Select name="sex" label="性别" />
    </AdvancedSearch>
  )
