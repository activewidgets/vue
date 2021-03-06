/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import adapter from '@activewidgets/frameworks/vue';
import {h, ref, nextTick, onMounted, onUpdated, onBeforeUnmount, defineComponent} from 'vue';

export const {build, components} = adapter({h, ref, nextTick, onMounted, onUpdated, onBeforeUnmount, defineComponent});
