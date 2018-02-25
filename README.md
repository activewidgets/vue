
[![ActiveWidgets](http://www.activewidgets.com/include/logo/aw-logo-40.png?activewidgets/vue)](http://www.activewidgets.com/)

## Fast datagrid component for Vue.js

ActiveWidgets 3.0 datagrid, implemented as Vue.js Component.

- [Examples](https://vs.activewidgets.com/)
- [Docs](https://vd.activewidgets.com/)

### Installation

```bash
npm install @activewidgets/vue
```

### Usage

```js
import Vue from 'vue';
import {components} from '@activewidgets/vue';
import {columns, rows} from './data.js';

const data = {columns, rows};

new Vue({
    el: '#app',
    template: '<grid :rows="rows" :columns="columns"></grid>',
    components: components,
    data: data
});
```

See http://www.activewidgets.com/
