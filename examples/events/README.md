
[Open fullscreen](https://vue.activewidgets.com/events/) | [Source on github](https://github.com/activewidgets/vue/tree/master/examples/events) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/vue/tree/master/examples/events?file=src/app.vue)

The datagrid emits composite [mouse](https://activewidgets.com/api/datagrid/mouse-event/) event 
which makes it easier to find the elements affected by the user action -

```html
<template>
    <ax-datagrid @mouse="onMouse" :columns="columns" :rows="rows"></ax-datagrid>
</template>
<script>
// ...

function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

</script>
```

Read more:

- [Vue Datagrid - Get started](https://activewidgets.com/guide/env/vue/#user-events)
- [API - mouse event](https://activewidgets.com/api/datagrid/mouse-event/)