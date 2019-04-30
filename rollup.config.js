
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'index.js',
    output: [
        {file: 'dist/index.umd.js', format: 'umd', sourcemap: true, name: 'AX', exports: 'named'},
        {file: 'dist/index.esm.js', format: 'esm', sourcemap: true}
    ],
    external: [
        'vue',
        '@activewidgets/frameworks',
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