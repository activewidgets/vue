
import babel from 'rollup-plugin-babel';

export default {
    input: 'index.js',
    output: [
        {file: 'dist/index.umd.js', format: 'umd', sourcemap: true, name: 'AX', exports: 'named'},
        {file: 'dist/index.esm.js', format: 'es', sourcemap: true}
    ],
    external: [
        'vue',
        '@activewidgets/frameworks',
        '@activewidgets/grid'
    ],
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [["env", {modules: false}]],
            plugins: ["external-helpers"]
        })
    ]
};