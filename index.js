
import Vue from 'vue';
import AX from '@activewidgets/frameworks/vue';
import {grid, row} from '@activewidgets/grid';

let {component} = AX(Vue);

export const Grid = component(grid);
export const Row = component(row);

export const components = {Grid, Row};

function install(Vue){
    for(let i in components){
        Vue.component('ax-' + i.toLowerCase(), components[i]);
    }
}

export default {install, components, Grid, Row};
