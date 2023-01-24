import './bootstrap';
// Style
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import 'quasar/src/css/index.sass'
import '@unocss/reset/tailwind.css'
import '../css/app.css'
import 'uno.css'
// JS
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

import { Notify } from 'quasar'
// pinia configuration
const pinia = createPinia()

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(Quasar, {
                plugins: {
                    Notify,
                    extras: ['material-icons','mdi-v6'],

                }, // import Quasar plugins and add here
              })
              .use(pinia)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
