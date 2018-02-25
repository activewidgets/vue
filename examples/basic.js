
import Vue from 'vue';
import {Grid} from '../';
import {columns, rows} from './data/customers.js';

let components= {Grid};

let data = () => ({columns, rows});

let template = `
    <div id="app">
        <Grid :rows="rows" :columns="columns"></Grid>
    </div>
`;

export default () => ({
    components, template, data
});