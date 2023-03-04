<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
const props = defineProps<{
    branches: any;
}>();
const slide = ref(0);
</script>
<template>

    <div class="flex-1 sm:mx-auto sm:w-full sm:max-w-2xl  sm:overflow-hidden sm:rounded-lg shadow-sm">
                <q-carousel v-model="slide"   infinite
                    control-color="white"  padding arrows class="w-full h-full bg-transparent border-none"
                   >
                   <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >

        </q-carousel-control>
      </template>
                    <q-carousel-slide  :name="index" class="column no-wrap flex-center" v-for="(branch, index) in branches"
                        :key="index">
                        <div class="bg-white rounded-md p-3 bg-red-500 min-w-full">
                            <a href="" target="_blank" class="text-blue uppercase text-lg font-medium text-gray-900">{{
                                branch.name }}</a>
                            <!-- <iframe :src="branch.google_map_embbeded_url" class="w-full h-[450px] rounded-lg" style="border: 0"
                                allowfullscreen="false"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                                <div v-html="branch.google_map_embbeded_url"></div>
                            <p class="mt-2 text-base text-gray-500">
                                <span class="block">{{ branch.address }}</span>
                                <span class="block" v-for="(item, index) in branch.telephone" :key="index">Tel: {{ item
                                }}</span>
                                <span class="block" v-for="(item, index) in branch.email" :key="index">Email: {{ item
                                }}</span>
                            </p>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
    </div>
</template>
