<template><!-- show all employer logo -->
<div class=" bg-no-repeat	bg-cover bg-center relative" style="background-image: url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')">
    <div class="backdrop-blur-sm bg-white/80  absolute-full" />
    <p class="relative text-center uppercase z-10 text-2xl font-semibold py-9 text-gray-600">
                    LISTS OF FOREIGN PRINCIPALS
                </p>
    <div class="mx-auto max-w-7xl"  >

                <q-carousel
                    v-model="slide"
                    swipeable
                    animated
                    control-color="green"
                    navigation
                    padding
                    arrows
                    infinite class="bg-transparent"
                >
                    <q-carousel-slide
                        v-for="(item, index) in pr"
                        :key="index"
                        :name="index" class="flex justify-center items-center 	"
                    >
                        <div class="flex flex-wrap justify-center h-auto">
                            <div
                                v-for="(e, index) in item"
                                :key="index" v-show="e.is_highlighted"
                                class="flex justify-center items-center"
                            >
                                <img
                                    :src="e.first_media.original_url"
                                    class="object-contain h-42 m mx-2 my-2  w-full object-contain object-left"
                                    :alt="e.name"
                                />
                            </div>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
        </div>
    <!-- <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                <div class="mx-auto w-full max-w-xl lg:mx-0">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                        Trusted by the world's best companies
                    </h2>
                    <div class="mt-8 flex items-center gap-x-6">
                        <a href="#"
                            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create
                            account</a>
                        <a href="#" class="text-sm font-semibold text-gray-900">Contact us <span
                                aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div
                    class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                    <img v-for="emp in employers"  :key="emp.id"
                        class="max-h-12 w-full object-contain object-left"
                        :src="emp.first_media.original_url" alt="Tuple" width="105" height="48">
                </div>
            </div>
        </div>
    </div> -->
</div>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
const { employers } = defineProps<{
    employers: any;
}>();
const slide = ref(0);
const $q = useQuasar();
// group employers array into chunks with 10 items
const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
const pr = computed(() => {
    return chunk(employers, $q.platform.is.mobile ? 1 : 1).filter((e) => e.length > 0);
});

</script>

<style lang="scss" scoped></style>
