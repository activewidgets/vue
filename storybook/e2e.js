
import Vue from 'vue';
import {storiesOf} from '@storybook/vue';

import basic from '../examples/basic.js';

storiesOf('Tests', module)
    .add('basic', basic);
