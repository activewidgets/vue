
import {render as originalRender, fireEvent, wait, waitForElement} from '@testing-library/vue';


export function render(component, props){
    return originalRender({
        render: h => h(component, {attrs: props})
    });
}

export {fireEvent, wait, waitForElement};