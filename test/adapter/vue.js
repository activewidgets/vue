
import {render as originalRender, fireEvent, wait, waitForElement} from '@testing-library/vue';


export function render(component, props){

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
        render: h => h(component, {attrs, on})
    });
}

export {fireEvent, wait, waitForElement};