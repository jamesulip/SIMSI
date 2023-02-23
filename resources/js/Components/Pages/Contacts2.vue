
<template>
    <div id="home" class="relative overflow-hidden xl:h-screen h-auto bg-fixed"
        style="background-image: url('/332830666_709097277524752_1135358487361350405_n.png')">
        <div class="backdrop-blur-sm bg-blue/60  absolute-full" />
        <div class="relative  sm:pb-24 ">
                <div class="mx-auto max-w-7xl md:p-0 pb-12 ">
                    <div class="flex justify-center">
                        <div
                            class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                            <div>
                                <div class="hidden sm:mb-4 sm:flex sm:justify-center lg:justify-start">
                                    <a href="#"
                                        class="flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                                        <span
                                            class="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">We're
                                            hiring</span>
                                        <span class="ml-4 text-sm">Visit our careers page</span>
                                        <ChevronRightIcon class="ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    </a>
                                </div>
                                <img :src="'/logo.png'" class="w-auto max-w-xs mx-auto" />
                               <div class="bg-gradient-to-l rounded-2xl px-5 py-3 from-white">
                                <h1
                                    class="text-xl font-bold tracking-tight text-center sm:text-2xl md:text-3xl block text-[#282a6c] xl:inline">
                                    Shaso International
                                </h1>
                                <h1
                                    class="text-xl font-bold tracking-tight text-center text-black sm:text-2xl md:text-3xl">
                                    Manpower Services Inc.
                                </h1>
                               </div>
                            </div>
                        </div>
                        <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 flex">
                            <Offices />
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import Offices from "./Offices.vue";
</script>
