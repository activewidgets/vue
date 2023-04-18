/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Viewer} from '@activewidgets/examples';
import {Datagrid, Row, Cells} from '@activewidgets/vue';
import {h, createApp} from "vue";
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './vue.svg';
import pkg from '../../package.json';


let framework = 'Vue',
    container = document.getElementById('app'),
    obj = null;

let components = {
    'ax-datagrid': Datagrid,
    'ax-row': Row,
    'ax-cells': Cells
};


function mount(name, props){

    let target = document.createElement('div'),
        component = components[name];

    container.innerHTML = '';
    container.appendChild(target);

    obj = createApp({render: () => h(component, props)});
    obj.mount(target);
}


function clean(){

    if (obj) {
        obj.unmount(container.firstChild);
        obj = null;
    }

    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
