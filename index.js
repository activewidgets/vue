
import Vue from 'vue';
import {vue} from  '@activewidgets/frameworks';
import * as options from '@activewidgets/grid';

const component = vue(Vue),
    Grid = component(options.grid),
    components = {Grid};

export {Vue, components as default, components, Grid};
