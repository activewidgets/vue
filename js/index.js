
import adapter from '@activewidgets/frameworks/vue';
import * as sources from '@activewidgets/datagrid/js';
import Vue from 'vue';

export const {build, components} = adapter(Vue);
export const {Datagrid, Row, Gridview, Scrollbars} = build(sources);
