
import Vue from 'vue';
import {storiesOf} from '@storybook/vue';

import basic from '../examples/basic.js';

storiesOf('datagrid', module)

    .add('basic', basic)

    .add('button', () => (
        'Hello'
    ));