
[Open fullscreen](https://vue.activewidgets.com/performance/) | [Source on github](https://github.com/activewidgets/vue/tree/master/examples/performance) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/vue/tree/master/examples/performance?file=src/app.vue)

This example shows virtualized scrolling + lazy loading performance (load as you scroll).

```html
<template>
    <ax-datagrid :columns="columns" :rows="rows" :options="options"></ax-datagrid>
</template>

<script>

import {components} from '@activewidgets/vue';
import { lazy } from '@activewidgets/options';

function data(){

    // ...

    let options = [
        lazy()
    ];

    return { columns, rows, options };
}

export default { components, data };
</script>
```


Read more:

- [Vue Datagrid - Get started](https://activewidgets.com/guide/env/vue/#data-properties)
- [API - columns](https://activewidgets.com/api/datagrid/columns/)
- [API - rows](https://activewidgets.com/api/datagrid/rows/)