import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';

const stories = storiesOf('Storybook Knobs', module);
const eventsFromNames = actions('onClick', 'onMouseOver');
const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

stories.addDecorator(withKnobs);

// actions for React props
stories.add('hello world', () => (
    <button {...eventsFromObject}>
        Hello World!
    </button>
));

// Knobs for React props
stories.add('with a button', () => (
    <button disabled={boolean('Disabled', false)} {...eventsFromNames}>
      {text('Label', 'Hello Storybook')}
    </button>
  ));

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);
  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});