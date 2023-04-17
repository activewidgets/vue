/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import adapter from '@activewidgets/frameworks/vue';
import {h, ref, nextTick, cloneVNode, provide, inject, onMounted, onUpdated, onBeforeUnmount, onErrorCaptured, withAsyncContext, Suspense, defineComponent} from 'vue';

export const {build, components} = adapter({h, ref, nextTick, cloneVNode, provide, inject, onMounted, onUpdated, onBeforeUnmount, onErrorCaptured, withAsyncContext, Suspense, defineComponent});
