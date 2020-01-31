
<template>
    <ax-datagrid :columns="columns" :rows="rows"></ax-datagrid>
</template>
<script>

import {components} from '@activewidgets/vue';
import { northwind } from "@activewidgets/examples/data";
import './styles.css';


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


export default { components, data };

</script>