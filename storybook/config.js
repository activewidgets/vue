
import { configure } from '@storybook/vue';
import '../css';

function loadStories() {
    require('./demo.js');
    require('./e2e.js');
}

configure(loadStories, module);