<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import Guest from "@/Layouts/Guest.vue";
const { branches } = defineProps<{
    branches;
}>();

</script>

<template>
    <Guest>
        <div class="w-full flex h-96 relative bg-cover bg-bottom bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div class="backdrop-blur-sm bg-black/50 w-full h-full"></div>
      <!-- create a div with text Job opening position aboslute center middle -->
      <div class="absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2">
        <h1 class="text-h2 !font-bold text-white">GET IN TOUCH WITH US</h1>
        <p class="text-2xl text-white">
         We are located in the following branches. Please feel free to contact us.
        </p>
      </div>
    </div>
        <!-- ====== Contact Section Start -->
        <section class="relative  overflow-hidden bg-white py-20 lg:py-8">
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap lg:justify-between">
                    <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
                        <div class="mb-12 max-w-[570px] lg:mb-0">
                            <div>
                                <div v-for="(item, index) in branches" :key="index">
                                    <div class="mb-8 flex w-full">
                                        <h4 class="text-dark mb-1 text-xl font-bold">{{ item.name }}</h4>
                                        <!-- <iframe
                      :src="item.map"
                      class="w-full h-[450px] rounded-lg"
                      style="border: 0"
                      allowfullscreen="true"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> -->
                                        <div class="w-full">
                                            <p class="text-body-color text-base">
                                                {{ item.address }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mb-8 flex w-full max-w-[370px]">
                                        <div class="w-full">
                                            <h4 v-if="item.phone.length > 0" class="text-dark mb-1 text-xl font-bold">
                                                Telephone No.</h4>
                                            <p v-if="item.phone.length > 0" class="text-body-color text-base"
                                                v-for="(c, index) in item.phone" :key="index">
                                                {{ c }}
                                            </p>
                                            <h4 v-if="item.email.length > 0" class="text-dark mb-1 text-xl font-bold">
                                                Email Address</h4>
                                            <p v-if="item.email.length > 0" class="text-body-color text-base"
                                                v-for="(c, index) in item.email" :key="index">
                                                {{ c }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ====== Contact Section End -->
    </Guest>
</template>
