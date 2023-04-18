
<template>
    <Datagrid :columns="columns" :rows="rows" @init="onInit" @click="onClick" ></Datagrid>
</template>
<script setup>

import { Datagrid } from '@activewidgets/vue';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';

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

</script>