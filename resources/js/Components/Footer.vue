<template>
    <footer class="bg-gray-100" id="branches" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-24 lg:px-8 lg:pt-16">
            <h2 id="location-heading"
                class="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight text-center uppercase text-2xl font-semibold py-9 text-gray-600">
                Locations
            </h2>
            <div class="mt-16 grid grid-cols-1  md:grid-cols-3 w-full gap-8  xl:mt-0">
                <div v-for="branch in branches" :key="branch.id">
                    <h3 class="text-sm font-semibold leading-6 text-gray-900">{{ branch.name }}</h3>
                    <ul role="list" class="mt-1 space-y-4">
                        <li class="flex"  v-if="branch.phone.length > 1">
                            <div class="px-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                        <li v-for="contact in branch.phone" :key="contact">
                            <a href="#" class="hover:text-gray-900">{{ contact }}</a>
                        </li>
                </div>
                </li>
                <li class="flex" v-if="branch.email.length > 1">
                    <div class="px-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round"
                                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>

                    </div>
                    <div>
                <li v-for="em in branch.email" :key="em">
                    <a href="#" class="hover:text-gray-900">{{ em }}</a>
                </li>
            </div>
            </li>
            <li class="flex flex-nowrap" v-if="branch.address.length > 1">
                <div class="px-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                </div>
                <div class="text-sm text-gray-500 ">
                    <span>
                        {{ branch.address }}
                    </span>
                </div>
            </li>
            <li class="flex flex-nowrap" v-if="branch.office_hours">
                <div class="px-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                </div>
                <div class="text-sm text-gray-500 ">
                    <span>
                        {{ branch.office_hours }}
                    </span>
                </div>
            </li>
            <Link class="flex flex-nowrap" :href="branch.website"  v-if="branch.website.length > 5">
                <div class="px-1.5">
                    <!-- facebook icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 320 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </div>
                <div class="text-sm text-gray-500 ">
                    <span>
                        Facebook Page
                    </span>
                </div>
            </Link>
            </ul>
        </div>
        </div>


        </div>
    </footer>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/inertia-vue3';
const { branches } = defineProps<{
    branches;
}>();
</script>

<style scoped></style>
