
<template>
    <ax-datagrid :columns="columns" :rows="rows" @init="onInit" @click="onClick" ></ax-datagrid>
</template>
<script>

import {components} from '@activewidgets/vue';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function data(){
    return { columns, rows };
}


let gridAPI;

function onInit(api){
    gridAPI = api;
}


function onClick(event){
    let cell = gridAPI.cellFromElement(event.target);
    if (cell && cell.section === 'main') {
        alert(`row ${cell.row.index + 1} clicked!`);
    }
}


const methods = { onInit, onClick };

export default { components, data, methods };

</script>