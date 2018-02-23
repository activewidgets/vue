
import Vue from 'vue';
import {storiesOf} from '@storybook/vue';

import basic from '../examples/basic.js';

storiesOf('Demo', module)

    .add('datagrid', basic)

    .add('button', () => (
        'Hello'
    ));