import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import md from '../index.md';
import {Panel} from 'mcf-components'

const stories = storiesOf('Storybook Knobs', module);
const eventsFromNames = actions('onClick', 'onMouseOver');
const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

stories.addDecorator(withKnobs);

stories.add('base panel', () => (
    <Panel title='基础panel组件'>
        基础panel组件
    </Panel>),
    { notes: { markdown: md }}
);