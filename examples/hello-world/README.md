
[Open fullscreen](/hello-world/) | [Source on github](https://github.com/activewidgets/vue/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/vue/tree/master/examples/hello-world)

This is a small example to get started with ActiveWidgets components for Vue.

First, import the component classes:

```js
import {components} from '@activewidgets/vue';
```

Then initialize or load the data array:

```js
function data(){
    return {
        rows: [
            { message: 'Hello, World!' }
        ]
    };
}
```

Finally, create the component and assign the data:

```html
<template>
    <ax-datagrid :rows="rows"></ax-datagrid>
</template>
```

Thats all! 

Read more:

 - [Vue Datagrid - Get started](https://docs.activewidgets.com/guide/env/vue/)