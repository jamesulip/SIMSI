<template>
  <div class="flex w-full p-10 bg-green-600">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 grid-rows-3">
      <Link :href="`/job/${q.uuid}`" v-for="q in recentJobs" class="bg-white p-5">
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
