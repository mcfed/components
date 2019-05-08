
import React from 'react'
import {Input,Select} from 'antd'
import { storiesOf,addDecorator  } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withTests } from '@storybook/addon-jest'
import { Button, Welcome } from '@storybook/react/demo'

import AdvancedSearch from '../src/components/AdvancedSearch'
// import results from '../.jest-test-results.json';

// addDecorator(
//   withTests({
//     results,
//     filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
//   })
// );
storiesOf("搜索组件包装AdvancedSearch",module)
  // .addParameters({ jest: ['../src/components/AdvancedSearch/__tests__/AdvancedSearch.spec.js'] })
  .add('advancedSearch',()=>
    <AdvancedSearch filterSubmitHandler={action('button-click')}>
      <Input name="callState" label="呼叫类型"  />
      <Select name="inputAcc" label="hr" />
    </AdvancedSearch>
  )
