
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';


let name = 'ActiveWidgets.Vue',
    framework = ['vue'];


let globals = {
    'vue': 'Vue',
    '@activewidgets/frameworks/vue': 'ActiveWidgets.frameworks.vue',
    '@activewidgets/grid/js': 'ActiveWidgets.components',
    '@activewidgets/grid/style': 'ActiveWidgets.styles',
    '@activewidgets/grid/metadata': 'ActiveWidgets.metadata',
    '@activewidgets/grid/css': ''
};


let plugins = [
    postcss({
        extract: 'dist/ax.css',
        sourceMap: true
    }),
    sourcemaps(),
    resolve(),
    babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [["@babel/env", {modules: false}]]
    })
];


let external = Object.keys(globals),
    compact = true,
    sourcemap = true,
    sourcemapPathTransform = s => s.replace('node_modules', '../..');


let modules = file => [
    {format: 'umd', sourcemap, globals, name, compact, file: 'dist/ax-' + file + '.umd.js'},
    {format: 'esm', sourcemap, file: 'dist/ax-' + file + '.esm.js'}
];


let browser = file => [
    {format: 'umd', sourcemap, sourcemapPathTransform, globals, name, compact, file: 'dist/' + file + '.js'}
];


export default [
    {input: 'index.js', output: modules('package'), external, plugins},
    {input: 'js/index.js', output: modules('js'), external, plugins},
    {input: 'css/index.js', output: modules('css'), external, plugins},
    {input: 'bundle/index.js', output: modules('bundle'), external, plugins},

    {input: 'index.js', output: browser('ax'), external: framework, plugins},
    {input: 'bundle/index.js', output: browser('bundle'), external: framework, plugins}
];
