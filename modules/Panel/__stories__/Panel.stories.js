import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import md from '../index.md';
import {Panel} from 'mcf-components'
// import test from '../__tests__/index.spec.js'

const stories = storiesOf('Storybook Knobs', module);
const eventsFromNames = actions('onClick', 'onMouseOver');
const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

stories.addDecorator(withKnobs);//knobs
stories.addParameters({ jest: ['Panel.spec.js'] })//jest

//story 
stories.add('base panel', () => (
    <Panel title='基础panel组件'>
        基础panel组件
    </Panel>),
    { notes: { markdown: md }}
);
