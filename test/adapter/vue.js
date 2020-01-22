
import {render, fireEvent, wait, waitForElement} from '@testing-library/vue';
import {components} from '@activewidgets/components';


export function mount(component, props){

    if (!components[component]){
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

    return render({
        render: h => h(components[component], {attrs, on})
    });
}

export {fireEvent, wait, waitForElement};