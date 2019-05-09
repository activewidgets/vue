
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    'vue': 'Vue',
    '@activewidgets/frameworks/vue': 'ActiveWidgets.frameworks.vue',
    '@activewidgets/grid': 'ActiveWidgets.components'
};

export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-vue.js', format: 'umd', sourcemap: true, name: 'ActiveWidgets.Vue', extend: true, globals},
        {file: 'dist/ax-vue.esm.js', format: 'esm', sourcemap: true}
    ],
    external: [
        'vue',
        '@activewidgets/frameworks/vue',
        '@activewidgets/grid'
    ],
    plugins: [
        resolve(),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [["@babel/env", {modules: false}]]
        })
    ]
};