<template>
  <div id="recentjob" class=" w-full  p-5 bg-green-600 h-auto md:h-screen">
    <div class="p-8 text-center uppercase mt-2 text-base font-bold leading-8   sm:text-2xl text-white">
        Recent Jobs
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 grid-rows-4 h-full">

      <Link :href="`/job/${q.uuid}`" v-for="q in recentJobs" class="bg-white p-5 rounded-lg">
        <div>
          <h1 class="text-xl font-bold">{{ q.title }}</h1>
          <p class="text-sm text-gray-500" v-if="q.employer">{{ q.employer.name }}</p>
          <p class="text-sm text-gray-500" v-if="q.location">{{ q.location }}</p>
        </div>
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
</script>
