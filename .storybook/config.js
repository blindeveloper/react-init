import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/button/index.stories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);