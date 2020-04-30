/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Viewer} from '@activewidgets/examples';
import {components} from '@activewidgets/vue';
import Vue from "vue";
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './vue.svg';
import pkg from '../../package.json';


let framework = 'Vue',
    container = document.getElementById('app');


Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});


let obj = null;


function mount(component, props){

    let target = document.createElement('div'),
        attrs = {},
        on = {};

    container.innerHTML = '';
    container.appendChild(target);

    Object.keys(props).forEach(i => {
        if (i.indexOf('on') === 0){
            on[i.slice(2).toLowerCase()] = props[i];
        }
        else {
            attrs[i] = props[i];
        }
    });

    obj = new Vue({
      render: h => h(component, {attrs, on})
    });

    obj.$mount(target);
}


function clean(){

    if (obj) {
        obj.$destroy();
        obj = null;
    }

    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
