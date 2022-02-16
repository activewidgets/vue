/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { intl, format, column, type, row, cell } from "@activewidgets/options";


export default [

    // enable intl. number/date formats
    intl('en-US'),

    // define named formats
    format('money', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2}),
    format('date', {year: 'numeric', month: 'short', day: 'numeric'}),

    // set column defaults
    column({width: 200}),

    // define reusable column types
    type('country flag', {template: 'country', width: 170}),
    type('phone & fax', {template: 'phone', width: 150}),
    type('money', {format: 'money', width: 100, align: 'right'}),
    type('date', {format: 'date', width: 150, align: 'right'}),

    // customize row
    row(data => {
        if (data.country == 'France'){
            return {class:'bg-green'};
        }
    }),

    // customize cells
    cell((value, data, column) => {

        if (data.city == 'London' && column.key == 'address'){
            return {class: 'circle'};
        }

        if (data.contactTitle == 'Owner' && column.key == 'contact'){
            return {class: 'star'};
        }
    })
];