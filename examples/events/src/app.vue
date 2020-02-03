
<template>
    <ax-datagrid @mouse="onMouse" :columns="columns" :rows="rows"></ax-datagrid>
</template>
<script>

import {components} from '@activewidgets/vue';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function data(){
    return { columns, rows };
}


function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}


const methods = { onMouse };

export default { components, data, methods };

</script>