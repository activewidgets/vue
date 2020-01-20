
import {Viewer} from '@activewidgets/examples';
import Vue from "vue";
import * as pages from '../index.js';
import {components} from '../../';


Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});


let obj = null;


function mount(component, props){

    let container = document.getElementById('app'),
        target = document.createElement('div');

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

    let container = document.getElementById('app');
    container.innerHTML = '';
}


const viewer = new Viewer({
    target: document.body,
    props: {pages, mount, clean}
});
