
import adapter from '@activewidgets/frameworks/vue';
import * as sources from '@activewidgets/grid/js';
import Vue from 'vue';

export const {build, components} = adapter(Vue);
export const {Grid, Row, View, Scrollbars} = build(sources);
