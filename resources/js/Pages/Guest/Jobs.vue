<script setup lang="ts">
import GuestVue from "@/Layouts/Guest.vue";
import { computed } from "vue";

const { jobs: recentJobs } = defineProps<{ jobs: any }>();
const computedRecentJobs = computed(() => {
  return recentJobs.map((job: any) => {
    return {
      title: job.title,
      href: `/job/${job.uuid}`,
      category: {
        name: "Job Hiring",
        href: `/job/${job.uuid}`,
      },
      description: job.description,
      date: job.date_posted,
      datetime: job.date_expires,
      imageUrl: job.media[0]?.original_url,
    };
  });
});
</script>
<template>
  <GuestVue>
    <div class="relative">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-gray-200 rounded-lg h-96">
            <!-- search button -->
            <!-- quasar search -->
            <div class="w-full">
              <form action="/jobs" method="GET" class="flex gap-3 w-full">
                <q-input
                  type="search"
                  outlined
                  name="search"
                  placeholder="Search"
                  clear-icon="close"
                  clearable
                />
                <q-btn unelevated type="submit" color="primary" label="Search" />
              </form>
            </div>

            <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              <div
                v-for="post in computedRecentJobs"
                :key="post.title"
                class="flex flex-col overflow-hidden rounded-lg shadow-lg border-gray-200"
              >
                <div class="flex-shrink-0" v-if="post.imageUrl">
                  <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-green-600">
                      <a :href="post.category.href" class="hover:underline">{{
                        post.category.name
                      }}</a>
                    </p>
                    <a :href="post.href" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                      <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
                    </a>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="ml-3">
                      <div class="flex space-x-1 text-sm text-gray-500">
                        Date Posted:
                        <time class="font-semibold">{{ post.date }}</time>
                      </div>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        Date Expires:
                        <time class="font-semibold">{{ post.datetime }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestVue>
</template>
