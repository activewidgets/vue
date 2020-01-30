
<template>
    <ax-datagrid :rows="rows"></ax-datagrid>
</template>
<script>

import {components} from '@activewidgets/vue';
import './styles.css';


function data(){
    return {
        rows: [
            { message: 'Hello, World!' }
        ]
    };
}


export default { components, data };

</script>