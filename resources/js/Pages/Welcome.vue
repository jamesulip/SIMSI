<template>
  <Guest>
    <Contacts2 id="home" />
    <RecentJobs :recent-jobs="recentJobs" />
    <AboutUsVue />
    <VisionMissionVue />
    <q-separator/>
    <div>
      <div class="mx-auto max-w-7xl">
        <p class="text-center uppercase text-2xl font-semibold py-9 text-gray-600">
          Lists of our Principals
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
            v-for="(principal, index) in pr"
            :key="index"
            :name="index"
          >
            <div class="flex flex-wrap justify-center gap-10">
              <div
                v-for="p in principal"
                :key="p.id"
              >
              <img  :src="`/storage/${p}`" class="h-16 mx-auto" />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </Guest>
</template>
<script lang="ts" setup>
import Contacts2 from "../Components/Pages/Contacts2.vue";
import AboutUsVue from "../Components/Pages/AboutUs.vue";
import VisionMissionVue from "../Components/Pages/VisionMission.vue";
import RecentJobs from "../Components/Pages/RecentJobs.vue";

import Guest from "../Layouts/Guest.vue";
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar()

const { recentJobs, principals } = defineProps<{
  principals;
  recentJobs: any;
}>();
const slide = ref(0);
// paginate array into chunks with 10 items
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
const pr = computed(() => {
  return chunk(principals, $q.platform.is.mobile ? 2 : 10);
});

</script>
