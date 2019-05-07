import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';//console
import { withA11y } from '@storybook/addon-a11y';
import { addParameters } from '@storybook/react';

const newViewports = {
    kindleFire2: {
      name: 'Kindle Fire 2',
      styles: {
        width: '600px',
        height: '963px',
      },
    },
    kindleFireHD: {
      name: 'Kindle Fire HD',
      styles: {
        width: '533px',
        height: '801px',
      },
    },
  };

function loadStories() {
  require('../stories/index.js');
  require('../stories/panel.stories.js')
  // You can require as many stories as you need.
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withA11y)
addParameters({ viewport: newViewports });

configure(loadStories, module);