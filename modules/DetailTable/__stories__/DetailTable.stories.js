import React, { PropTypes } from 'react'
import { storiesOf } from '@storybook/react';
import {Button} from 'antd'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import md from '../README.md'

import DetailTable from '../index'

const stories = storiesOf('DetailTable', module);


stories.addParameters({ jest : ['DetailTable.spec.js'] })

stories.add('基础使用(data为json)',() => {
  const dataSource = {
    a:1,
    b:2,
    c:3
  }

  return <DetailTable mode="object" dataSource={dataSource}>
  </DetailTable>
},{ notes: { markdown : md } })

stories.add('基础使用(data为array)',() => {
  const dataSource = [{label:1,value:2}]

  return <DetailTable mode="array" dataSource={dataSource}></DetailTable>
},{ notes: { markdown : md } })
