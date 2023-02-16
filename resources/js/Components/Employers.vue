<template>
        <!-- show all employer logo -->
        <div class="mx-auto max-w-7xl">
            <p class="text-center uppercase text-2xl font-semibold py-9 text-gray-600">
                Lists of our Employers
            </p>
            <q-carousel
                v-model="slide"
                swipeable
                animated
                control-color="green"
                navigation
                padding
                arrows
                height="300px"
            >
                <q-carousel-slide
                    v-for="(item, index) in pr"
                    :key="index"
                    :name="index" class="flex justify-center items-center 	"
                >
                    <div class="flex flex-wrap justify-center">
                        <div
                            v-for="(item, index) in item"
                            :key="index"
                            class="flex justify-center items-center"
                        >
                            <img
                                :src="item.first_media.original_url"
                                class="object-contain h-12 mx-2 my-2"
                                :alt="item.name"
                            />
                        </div>
                    </div>
                </q-carousel-slide>
            </q-carousel>
    </div>

</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
    const {employers} = defineProps<{
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
        return chunk(employers, $q.platform.is.mobile ? 2 : 5);
    });

</script>

<style lang="scss" scoped>

</style>
