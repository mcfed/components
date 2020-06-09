import React from 'react';
import {storiesOf} from '@storybook/react';
import SwitchConfirm from '../index';

const stroies = storiesOf('HeadSearchBar', module);

stroies.add('基础用法', () => {
  return <SwitchConfirm checked={false}></SwitchConfirm>;
});
