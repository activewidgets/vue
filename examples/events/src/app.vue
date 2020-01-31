
<template>
    <ax-datagrid :columns="columns" :rows="rows" @mouse="onMouse"></ax-datagrid>
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