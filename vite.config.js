import { defineConfig } from 'vite';
import Unocss from '@unocss/vite'
import presetWind from '@unocss/preset-wind'
// import { presetForms } from '@julr/unocss-preset-forms'
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import {Notify} from 'quasar'
export default defineConfig({
    plugins: [
        Unocss({
            presets: [
                presetWind(),
            ],
            rules:[
                // fix conflict with quasar flex hidden
                [/^hidden$/, 'hidden'],
                [/^flex$/, 'flex'],
                [/^flex-row$/, 'flex-row'],
                [/^flex-col$/, 'flex-col'],
            ]

          }),
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        quasar({
            plugins: ['Notify'],
            sassVariables: 'resources/css/quasar-variables.sass',
          })
    ],
});
