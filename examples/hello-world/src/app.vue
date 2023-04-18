
<template>
    <Datagrid :rows="rows"></Datagrid>
</template>
<script setup>

import { Datagrid } from '@activewidgets/vue';
import './styles.css';

const rows = [
    { message: 'Hello, World!' }
];

</script>