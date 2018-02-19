
import Vue from 'vue';
import {VueBuilder} from '@activewidgets/frameworks';
import {grid, row} from '@activewidgets/grid';

const build = VueBuilder.init(Vue);

export const Grid = build(grid);
export const Row = build(row);

export const components = {Grid, Row};

function install(Vue){
    for(let i in components){
        Vue.component('ax-' + i.toLowerCase(), components[i]);
    }
}

export default {install, components, Grid, Row};
