import { defineConfig } from 'vite';
import Unocss from '@unocss/vite'
import presetWind from '@unocss/preset-wind'
// import { presetForms } from '@julr/unocss-preset-forms'
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import {Notify} from 'quasar'
import { presetForms } from '@julr/unocss-preset-forms'
export default defineConfig({
    plugins: [
        Unocss({
            presets: [
                presetWind(),
                presetForms()
            ],

            rules:[
                // find md:block and replace with display: block
                ['no-shadow', { 'box-shadow': 'none' }],
                ['q-ma-auto', { margin: 'auto' }],
                ['q-pa-auto', { padding: 'auto' }],
                [/^q-m[xy]-(\d+)$/, ([, d]) => ({ 'margin-left': `${d / 4}rem`, 'margin-right': `${d / 4}rem` })],
                [/^q-ma-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
                [/^q-p[xy]-(\d+)$/, ([, d]) => ({ 'padding-left': `${d / 4}rem`, 'padding-right': `${d / 4}rem` })],
                [/^q-pa-(\d+)$/, ([, d]) => ({ padding: `${d / 4}rem` })],
                [
                  /^q-p[xy]-(.*)$/,
                  ([, c], { theme }) => {
                    if (theme.size[c]) return { 'padding-left': theme.size[c], 'padding-right': theme.size[c] };
                  },
                ],
                [
                  /^q-pa-(.*)$/,
                  ([, c], { theme }) => {
                    if (theme.size[c]) return { padding: theme.size[c] };
                  },
                ],
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
