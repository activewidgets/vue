import {resolve} from 'path';
import markdown from 'rollup-plugin-md';
import vue from '@vitejs/plugin-vue';
import examples from '@activewidgets/examples/plugin';
import puppeteer from '@activewidgets/puppeteer/plugin';


export default {
    root: 'examples',
    build: {
        outDir: '../out',
        emptyOutDir: true
    },
    plugins: [
        puppeteer('../test/visual/*.js'),
        examples(),
        markdown(),
        vue()
    ],
    resolve: {
        alias: {
            '@activewidgets/vue': resolve('./')
        }    
    }
}