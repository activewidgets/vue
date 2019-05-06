
import Vue from 'vue';
import framework from '@activewidgets/frameworks/vue';
import * as pkg from '@activewidgets/grid';

let {build} = framework(Vue);

export const components = build(pkg);
export const {Grid, Row, View, Scrollbars} = components;

export function install(Vue){
    for(let i in components){
        Vue.component('ax-' + i.toLowerCase(), components[i]);
    }
}
