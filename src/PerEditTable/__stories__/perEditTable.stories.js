import React from 'react';
import {storiesOf} from '@storybook/react';
import Edittable from '../index';
import Readme from '../index.md';
import {action} from '@storybook/addon-actions';

const stories = storiesOf('PerEdittable', module);

stories.add('基础用法', () => {
  return <Edittable />;
});
