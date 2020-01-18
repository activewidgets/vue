
import {render as originalRender, fireEvent, wait, waitForElement} from '@testing-library/vue';
import * as components from '@activewidgets/components';

let tags = {};

Object.keys(components).forEach(name => {
    tags['ax-' + name.toLowerCase()] = components[name];
});


export function render(component, props){

    if (!tags[component]){
        throw new Error('component not found - ' + component);
    }

    let i, attrs = {}, on = {};

    for (i in props){
        if (i.slice(0, 2) == 'on'){
            on[i.slice(2).toLowerCase()] = props[i];
        }
        else {
            attrs[i] = props[i];
        }
    }

    return originalRender({
        render: h => h(tags[component], {attrs, on})
    });
}

export {fireEvent, wait, waitForElement};