
import Vue from 'vue';
import {Grid} from '../';
import rows from './data/customers.js';


let columns = [
    {key: 'CustomerID', header: 'Code', width: 80, position: 'left', background: '#def'},
    {key: 'CompanyName', header: 'Company Name', width: 150, position: 'left'},
    {key: 'ContactName', header: 'Contact', width: 120},
    {key: 'ContactTitle', header: 'Title', width: 120, background: '#fed'},
    {key: 'Address', header: 'Address', width: 120},
    {key: 'City', header: 'City', width: 80},
    {key: 'PostalCode', header: 'Zip', width: 80, align: 'right'},
    {key: 'Phone', header: 'Phone', width: 100},
    {key: 'Fax', header: 'Fax', width: 100},
    {key: 'Country', header: 'Country', width: 80, position: 'right', background: '#efe'}
];


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