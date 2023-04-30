import {defineConfig, mergeConfig, build} from 'vite';
import fs from 'fs';

let pkg = JSON.parse(fs.readFileSync('package.json', {encoding:'utf8'}));

let banner = `/**
 * ${pkg.name} ${pkg.version}
 * Copyright (C) 2023 ActiveWidgets SARL. All Rights Reserved.
 * This code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this package.
 */
`;

let base = defineConfig({
    configFile: false,
    build: {
        outDir: 'dist',
        emptyOutDir: false,
        sourcemap: true,
        reportCompressedSize: false,
        lib : {
            entry: 'src/index.js',
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'vue',
                '@activewidgets/frameworks/vue',
                '@activewidgets/datagrid/index.js',
                '@activewidgets/datagrid/style-inject',
                '@activewidgets/ui/index.js',
                '@activewidgets/ui/style-inject'
            ]
        }
    },
    esbuild: {
        banner
    }
});


await build(mergeConfig(base, defineConfig({
    build: {
        emptyOutDir: true,
        lib: {
            fileName: 'main'
        },
        rollupOptions: {
            external: [
                '@activewidgets/datagrid',
                '@activewidgets/ui'
            ]
        }
    }
})));


await build(mergeConfig(base, defineConfig({
    publicDir: './css',
    build: {
        lib: {
            fileName: 'index'
        }
    },
    resolve: {
        alias: {
            '@activewidgets/datagrid': '@activewidgets/datagrid/index.js',
            '@activewidgets/ui': '@activewidgets/ui/index.js'
        }
    }
})));


await build(mergeConfig(base, defineConfig({
    build: {
        lib: {
            fileName: 'style-inject'
        }
    },
    resolve: {
        alias: {
            '@activewidgets/datagrid': '@activewidgets/datagrid/style-inject',
            '@activewidgets/ui': '@activewidgets/ui/style-inject',
        }
    }
})));
