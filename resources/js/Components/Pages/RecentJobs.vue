<template>
  <div id="recentjob" class=" w-full div-anchors p-5 bg-green-600">
    <div class="p-8 text-center uppercase mt-2 text-base font-bold leading-8   sm:text-2xl text-white">
      Recent Jobs
    </div>
    <div class="max-w-3xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 grid-rows-4 h-full">

      <Link :href="`/job/${q.uuid}`" v-for="q in recentJobs">
      <q-card flat bordered>
        <div class="grid grid-cols-3 p-3">
          <q-img  v-if="q.media.length" :src="q.media[0].original_url" style="width: 100px; height: 100px;" />
          <div class="col-span-2">
            <span class="text-subtitle">
              {{ q.title }}
            </span>
            <br>
            <div class=" lineclamp">
              <span v-html="q.description" class="text-caption ">

              </span>
            </div>
          </div>
        </div>
      </q-card>
      </Link>

    </div>

  </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
// define props recentJobs
const { recentJobs } = defineProps({
  recentJobs: {
    type: Array,
    required: true,
  },
});
//
</script>

<style>
.lineclamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
