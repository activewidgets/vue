
import { configure } from '@storybook/vue';

function loadStories() {
    require('./stories.js');
}

configure(loadStories, module);