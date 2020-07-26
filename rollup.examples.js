import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import image from 'rollup-plugin-img';
import livereload from 'rollup-plugin-livereload';
import markdown from 'rollup-plugin-md';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: {
        'columns': 'examples/columns/src/main.js',
        'demo': 'examples/demo/src/main.js',
        'events': 'examples/events/src/main.js',
        'hello-world': 'examples/hello-world/src/main.js',
        'performance': 'examples/performance/src/main.js',
        'viewer': 'examples/viewer/main.js'
    },
    output: {
        chunkFileNames: 'viewer/build/[name].js',
        entryFileNames: '[name]/build/bundle.js',
        sourcemap: true,
        name: 'app',
        dir: 'out'
    },
    manualChunks: {
        data: ['@activewidgets/examples/data'],
        flags: ['@activewidgets/examples/flags']
    },
    plugins: [
        postcss(),
        json (),
        image(),
        markdown(),
        sourcemaps(),

        vue(),

        resolve({
            browser: true,
            //dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
        }),

        commonjs(),

        alias({entries: {
            '@activewidgets/vue': __dirname
        }}),

        replace({
            'process.env.NODE_ENV': production ? '"production"' : '"development"',
            '__VUE_OPTIONS_API__': true,
            '__VUE_PROD_DEVTOOLS__': true
        }),

        copy({
          targets: [{ src: 'examples/**/index.html', dest: 'out' }],
          flatten: false,
          copyOnce: true
        }),

        !production && serve(),
        !production && livereload('out'),

        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'serve', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });

                require('open')('http://localhost');
            }
        }
    };
}