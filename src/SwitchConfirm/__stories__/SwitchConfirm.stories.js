import React from 'react';
import {storiesOf} from '@storybook/react';
import SwitchConfirm from '../index';

const stroies = storiesOf('SwitchConfirm', module);

stroies.add('基础用法', () => {
  return <SwitchConfirm checked={false}></SwitchConfirm>;
});

stroies.add('自定义 options confirm info', () => {
  return (
    <SwitchConfirm
      checkedOption='on'
      uncheckedOption='off'
      currentOption='on'
      modalConfirmProps={{
        title: 'modal title',
        content: 'modal content'
      }}
      onConfirm={(val, action) => {
        console.log(val);
        action();
      }}></SwitchConfirm>
  );
});
