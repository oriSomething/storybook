import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

setOptions({
  name: 'CRA Storbook',
  url: 'https://github.com/storybooks/storybook/tree/master/examples/cra-storybook',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
})

setAddon(infoAddon);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
