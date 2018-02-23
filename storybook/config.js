
import { configure } from '@storybook/vue';

function loadStories() {
    require('./demo.js');
    require('./e2e.js');
}

configure(loadStories, module);