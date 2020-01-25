
import {Viewer} from '@activewidgets/examples';
import {components} from '../../';
import Vue from "vue";
import * as pages from './examples.js';
import readme from '../README.md';
import logo from './vue.svg';
import pkg from '../../package.json';


let framework = 'Vue',
    container = document.getElementById('app');


Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});


let obj = null;


function mount(component, props){

    let target = document.createElement('div');

    container.innerHTML = '';
    container.appendChild(target);

    obj = new Vue({
      render: h => h(component, {attrs: props})
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
