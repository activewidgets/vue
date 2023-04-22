
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import fs from 'fs';
import path from 'path';

let rootpkg = JSON.parse(read('./package.json'));


let name = 'ActiveWidgets.Vue',
    framework = ['vue'];


let globals = {
    'vue': 'Vue',
    '@activewidgets/frameworks/vue': 'ActiveWidgets.Frameworks.Vue',
    '@activewidgets/datagrid/js': 'ActiveWidgets.Components',
    '@activewidgets/datagrid/style': 'ActiveWidgets.Styles',
    '@activewidgets/datagrid/dist/datagrid.css': ''
};


let roots = {
    modules: ['', 'bundle', 'css', 'js'],
    bundles: ['', 'bundle']
};


let getBanner = name => `/**
 * ${rootpkg.name + (name && '/' + name)} ${rootpkg.version}
 * Copyright (C) 2023 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this package.
 */
`;


function keepBanner(node, comment){
    if (comment.type == "comment2") {
        return /\(C\) 2023 ActiveWidgets/.test(comment.value);
    }
}


let plugins = [
    postcss({
        extract: 'ax.css',
        sourceMap: true
    }),
    resolve(),
    terser({
        output: {comments: keepBanner}
    })
];


function read(filename){
    return String(fs.readFileSync(filename, {encoding:'utf8'}));
}


let modules = roots.modules.map(dir => {

    let pkg = rootpkg.exports[dir ? './' + dir : '.'],
        input = path.join(dir, 'index.js'),
        sourcemap = true,
        banner = getBanner(dir),
        compact = true;

    return {
        input,
        output: [
            {file: pkg.require, format: 'umd', sourcemap, banner, globals, name, compact},
            {file: pkg.import, format: 'esm', sourcemap, banner},
        ],
        external: Object.keys(globals),
        plugins
    };
});


let getCommercial = () => `/**
 * ${rootpkg.name} ${rootpkg.version}
 * Copyright (C) 2023 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the COMMERCIAL license.
 */
`;


let bundles = roots.bundles.map(dir => {

    let input = path.join(dir, 'index.js'),
        file = path.join('dist', (dir || 'ax') + '.js'),
        sourcemapPathTransform = s => {
            return s.replace(/^\.\../, '')
                .replace(/node_modules/, '..')
                .replace(/@activewidgets.(\w+)/, '$1@' + rootpkg.version);
         },
        sourcemap = true,
        banner = getCommercial(),
        compact = true;

    return {
        input,
        output: [
            {file, format: 'umd', sourcemap, sourcemapPathTransform, banner, globals, name, compact}
        ],
        external: framework,
        plugins
    };
});


export default [].concat(modules, bundles);
