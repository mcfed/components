import React from 'react';
import {storiesOf} from '@storybook/react';
import SwitchConfirm from '../index';

const stories = storiesOf('SwitchConfirm', module);

stories.addParameters({jest: ['SwitchConfirm.spec.js']});

stories.add('基础用法', () => (
  <div>
    <SwitchConfirm
      modalConfirmProps={{title: 'title'}}
      onConfirm={(current, option) => {
        option();
      }}
    />
    <SwitchConfirm
      checked={true}
      modalConfirmProps={{title: 'title'}}
      onConfirm={(current, option) => {
        option();
      }}
    />
  </div>
));
stories.add('自定义ON|OFF用法', () => (
  <SwitchConfirm
    uncheckedOption='OFF'
    checkedOption='ON'
    currentOption='OFF'
    modalConfirmProps={{title: 'title'}}
    onConfirm={(current, option) => {
      option();
    }}
  />
));
