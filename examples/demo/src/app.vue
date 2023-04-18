
<template>
    <Datagrid :columns="columns" :rows="rows" :calc="calc" :options="options">

        <template #company="{data}">
            <div>
                <div class="bold blue">{{data.customerID}}</div>
                <div class="small">{{data.companyName}}</div>
            </div>
        </template>

        <template #contact="{data}">
            <div>
                <div class="bold">{{data.contactName}}</div>
                <div class="small">{{data.contactTitle}}</div>
            </div>
        </template>

        <template #address="{data}">
            <div>
                <div class="small">{{data.address}}</div>
                <div class="small">{{data.postalCode}} <span>{{data.city}}</span></div>
            </div>
        </template>

        <template #country="{text}">
            <div>
                <img :src="flags[text]"/>{{text}}
            </div>
        </template>

        <template #phone="{data}">
            <div>
                <div class="small phone">{{data.phone}}</div>
                <div class="small fax">{{data.fax}}</div>
            </div>
        </template>

    </Datagrid>
</template>
<script setup>

import { Datagrid } from '@activewidgets/vue';
import { northwind } from '@activewidgets/examples/data';
import * as flags from '@activewidgets/examples/flags';
import options from './options';
import './styles.css';

const columns = [
    { header: 'Company', template: 'company', fixed: true },
    { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
    { header: 'Address', template: 'address', key: 'address' },
    { header: 'Country', type: 'country flag', field: 'country' },
    { header: 'Phone/Fax', type: 'phone & fax'},
    { header: 'Last Order', type: 'money', field: 'amount' },
    { header: 'Order Date', type: 'date', field: 'date' }
];

const rows = Object.freeze(northwind.customers);

function calc(){
    return {
        amount: 2000 * Math.random(),
        date: Date.now() - 500 * 86400000 * Math.random()
    };
}

</script>