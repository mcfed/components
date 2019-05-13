
import React from 'react'
import {Input,Select} from 'antd'
import { storiesOf,addDecorator  } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withTests } from '@storybook/addon-jest'
import { Button, Welcome } from '@storybook/react/demo'

import AdvancedSearch from '../AdvancedSearch'
// import results from '../.jest-test-results.json';

storiesOf("搜索组件包装AdvancedSearch",module)

  .add('advancedSearch',()=>
    <AdvancedSearch filterSubmitHandler={action('button-click')}>
      <Input name="callState" label="呼叫类型"  />
      <Select name="inputAcc" label="hr" />
    </AdvancedSearch>
  )
