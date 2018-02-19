'use strict';

require('@activewidgets/grid/css/index.css');

var i, src = require('./dist/common.js');

for(i in src){
    exports[i] = src[i];
}

Object.defineProperty(exports, '__esModule', {value: true});
