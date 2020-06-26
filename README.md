
### 

# ActiveWidgets/Vue • Datagrid 

[![npm version](https://img.shields.io/npm/v/@activewidgets/vue)](https://www.npmjs.com/package/@activewidgets/vue "View this project on npm")
[![npm downloads](https://img.shields.io/npm/dm/@activewidgets/vue)](https://www.npmjs.com/package/@activewidgets/vue "npm package downloads/month")
[![Github issues](https://img.shields.io/github/issues/activewidgets/vue)](https://github.com/activewidgets/vue/issues "See Github issues")
[![Github repo](https://img.shields.io/github/stars/activewidgets/vue?label=GitHub&style=social)](https://github.com/activewidgets/vue "Open Github repo")

ActiveWidgets is a multi-framework UI component library. This package provides [virtualized datagrid component for Vue](https://activewidgets.com/vue/data-grid/).

[Live demo](https://vue.activewidgets.com) / [Developer guide](https://activewidgets.com/guide/) / [API reference](https://activewidgets.com/api/)

[![Datagrid demo](https://cdn.activewidgets.com/assets/screens/demo.png)](https://vue.activewidgets.com)

- [Installation](#installation)
- [Usage](#usage)
- [CDN links](#cdn-links)
- [Data properties](#data-properties)
- [User events](#user-events)

## Installation

Add [@activewidgets/vue](https://activewidgets.com/api/packages/vue/) to your project dependencies -

```sh
> npm i --save @activewidgets/vue
```

## Usage

Now you can import ActiveWidgets component classes -

```js
import { components } from "@activewidgets/vue";
```

and register them with Vue.

```js
import {components} from '@activewidgets/vue';

// ...

export default { components, data };
```

It makes `ax-datagrid` and other `ax-...` tags available in your component template -

```html
<template>
    <ax-datagrid :rows="rows"></ax-datagrid>
</template>
```
[Live example](https://vue.activewidgets.com/examples/local/hello-world/) | [Source on github](https://github.com/activewidgets/vue/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/vue/tree/master/examples/hello-world)

## CDN links

For quick prototyping the package is also available over ActiveWidgets CDN -

```html
<script src="https://cdn.activewidgets.com/vue"></script>
```

In this case you will find the components at `ActiveWidgets.Vue` global namespace.

```js
var components = ActiveWidgets.Vue.components;

// or

var Datagrid = ActiveWidgets.Vue.Datagrid;
```

## Data properties

You have to provide [columns](https://activewidgets.com/api/datagrid/columns/) and [rows](https://activewidgets.com/api/datagrid/rows/) properties to the datagrid to show some data. The properties of each `column` object define how the data will be rendered -

- [field](https://activewidgets.com/api/datagrid/columns/#field) - where the cell data comes from (string|function)
- [header](https://activewidgets.com/api/datagrid/columns/#header) - column header (string|object)
- [width](https://activewidgets.com/api/datagrid/columns/#width) - column width (number, in pixels)
- [align](https://activewidgets.com/api/datagrid/columns/#align) - cell text alignment (left|right|center)
- [format](https://activewidgets.com/api/datagrid/columns/#format) - number/date format (string|function)
- [fixed](https://activewidgets.com/api/datagrid/columns/#fixed) - fixed (true/false) for columns on the left or right side

The `style` (string|object) or `className` properties allow to change the styling of the column and cell elements.

```js
function data(){

    const columns = [
      {header: 'Code', field: 'customerID', style: 'background:#def', fixed: true},
      {header: 'Company Name', field: 'companyName', width: 160},
      {header: 'Contact', field: 'contactName', width: 120},
      {header: 'Title', field: 'contactTitle', width: 120},
      {header: 'Address', field: 'address', width: 120, align: right}
    ];

    const rows = northwind.customers;

    return { columns, rows };
}
```

```html
<template>
    <ax-datagrid :columns="columns" :rows="rows"></ax-datagrid>
</template>
```
[Live example](https://vue.activewidgets.com/examples/local/columns/) | [Source on github](https://github.com/activewidgets/vue/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/vue/tree/master/examples/columns)


## User events

In addition to the standard DOM keyboard and mouse events the datagrid emits composite 
[mouse](https://activewidgets.com/api/datagrid/mouse-event/) event which makes it easier to find the elements affected by the user action -

```js
function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

const methods = { onMouse };
export default { components, data, methods };
```

```html
<template>
    <ax-datagrid @mouse="onMouse" :columns="columns" :rows="rows"></ax-datagrid>
</template>
```
[Live example](https://vue.activewidgets.com/examples/local/events/) | [Source on github](https://github.com/activewidgets/vue/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/vue/tree/master/examples/events)

## More info

- [Live demo](https://react.activewidgets.com) 
- [Developer guide](https://activewidgets.com/guide/) 
- [API reference](https://activewidgets.com/api/)
- [Licensing](https://activewidgets.com/licenses/)
- [Support forum](https://activewidgets.com/messages/)


---

[![ActiveWidgets](https://activewidgets.com/include/logo/aw-logo-40.png)](https://activewidgets.com) 
