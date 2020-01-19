
import Vue from "vue";
import * as components from '../';
import * as pages from './index.js';
import * as northwind from './northwind.js';


let el = document.querySelector('#app>div'),
    tags = {},
    templates = {},
    data = {northwind},
    lookup = {},
    links = [],
    key = 1,
    obj;


Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});


function path(s){
    return '/' + s.replace(/^\W+|\W+$/g, '').replace(/\W+/g, '-').toLowerCase();
}


Object.keys(pages).forEach(section => {
    links.push(`<div class="menu-header">${section}</div>`);
    Object.keys(pages[section]).forEach(name => {
        let url = path(section) + path(name);
        lookup[url] = pages[section][name];
        links.push(`<div class="menu-item"><a href="#view${url}">${name}</a></div>`);
    });
});


function index(name){

    if (obj) {
        obj.$destroy();
    }

    el = document.querySelector('#app>div'),
    el.innerHTML = name ? 'not found ' + name : links.join('');
}


function render(component, props){

    if (obj) {
        obj.$destroy();
    }

    el = document.querySelector('#app>div'),
    el.innerHTML = '';

    obj = new Vue({
      render: h => h(tags[component], {attrs: props})
    });

    obj.$mount(el);
}


function refresh(){

    let name = location.hash.replace(/^#(\w+)/, ''),
        mode = RegExp.$1;

    if (name && typeof lookup[name] == 'function') {
        lookup[name]({render}, templates, data);
    }
    else {
        index(name);
    }
}


window.addEventListener("hashchange", refresh, false);
refresh();
