
import Vue from 'vue';
import framework from '@activewidgets/frameworks/vue';
import {grid, row} from '@activewidgets/grid';

let {component} = framework(Vue);

export const Grid = component(grid);
export const Row = component(row);

export const components = {Grid, Row};

export function install(Vue){
    for(let i in components){
        Vue.component('ax-' + i.toLowerCase(), components[i]);
    }
}
