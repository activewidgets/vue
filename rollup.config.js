
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: [
        {file: 'dist/common.js', format: 'cjs', sourcemap: true, exports: 'named'},
        {file: 'dist/esm.js', format: 'es', sourcemap: true}
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