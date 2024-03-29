
[Open fullscreen](https://vue.activewidgets.com/columns/) | [Source on github](https://github.com/activewidgets/vue/tree/master/examples/columns) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/vue/tree/master/examples/columns?file=src/app.vue)

This example shows how to configure datagrid columns:

```html
<template>
    <ax-datagrid :columns="columns" :rows="rows"></ax-datagrid>
</template>

<script>

import {components} from '@activewidgets/vue';
import { northwind } from "@activewidgets/examples/data";

function data(){

    const columns = [
      {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
      {header: 'Company Name', field: 'companyName', width: 160},
      {header: 'Contact', field: 'contactName', width: 120},
      {header: 'Title', field: 'contactTitle', width: 120},
      {header: 'Address', field: 'address', width: 120},
      {header: 'City', field: 'city'},
      {header: 'Zip', field: 'postalCode', align: 'right'},
      {header: 'Phone', field: 'phone'},
      {header: 'Fax', field: 'fax'},
      {header: 'Country', field: 'country'}
    ];

    const rows = northwind.customers;

    return { columns, rows };
}

const rows = northwind.customers;

export default { components, data };
</script>
```

Assign an array of column descriptor objects to the [columns](https://activewidgets.com/api/datagrid/columns/) property.

Read more:

- [Vue Datagrid - Get started](https://activewidgets.com/guide/env/vue/#data-properties)
- [API - columns](https://activewidgets.com/api/datagrid/columns/)
- [API - rows](https://activewidgets.com/api/datagrid/rows/)