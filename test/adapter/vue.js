
import {render, fireEvent, wait, waitForElement} from '@testing-library/vue';
import {components} from '@activewidgets/components';


export function mount(component, props){

    if (!components[component]){
        throw new Error('component not found - ' + component);
    }

    return render(components[component], {props});
}

export {fireEvent, wait, waitForElement};