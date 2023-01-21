<template>
  <div id="recentjob" class=" w-full  p-5 bg-green-600">
    <div class="p-8 text-center uppercase mt-2 text-base font-bold leading-8   sm:text-2xl text-white">
      Recent Jobs
    </div>
    <div class="max-w-3xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 grid-rows-4 h-full">

      <Link :href="`/job/${q.uuid}`" v-for="q in recentJobs">
      <!-- <div>
          <h1 class="text-xl font-bold">{{ q.title }}</h1>
          <p class="text-sm text-gray-500" v-if="q.employer">{{ q.employer.name }}</p>
          <p class="text-sm text-gray-500" v-if="q.location">{{ q.location }}</p>
        </div> -->
      <q-card flat bordered>
        <div class="grid grid-cols-3 p-3">
          <q-img  v-if="q.media.length" :src="q.media[0].original_url" style="width: 100px; height: 100px;" />
          <div class="col-span-2">
            <span class="text-subtitle">
              {{ q.title }}
            </span>
            <br>
            <!-- line clanp 3 lines -->

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