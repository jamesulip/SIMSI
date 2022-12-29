<script setup lang="ts">
import GuestVue from "@/Layouts/Guest.vue";
import { computed, ref } from "vue";

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
      description: job.description.replace(/(<([^>]+)>)/gi, "").substring(0, 250) + "...",
      date: job.date_posted,
      datetime: job.date_expires,
      imageUrl: job.media[0]?.original_url,
    };
  });
});
const search = ref(route().params.search);
</script>
<template>
  <GuestVue>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-gray-200 rounded-lg">
          <!-- search button -->
          <!-- quasar search -->

          <q-form ref="f" action="/jobs" method="get" class="q-gutter-md">
            <q-input
              v-model="search"
              outlined
              label="Search"
              name="search"
              class="q-px-md q-py-sm"
              @keyup.enter="() => $refs.f.submit()"
              @clear="() => $refs.f.submit()"
              clearable
            >
              <template v-slot:append>
                <q-btn
                  icon="search"
                  round
                  flat
                  color="primary"
                  @keyup.enter="() => $refs.f.submit()"
                ></q-btn>
              </template>
            </q-input>
          </q-form>

          <div
            class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 w-full"
          >
            <div
              v-for="post in computedRecentJobs"
              :key="post.title"
              class="flex flex-col border overflow-hidden rounded-lg shadow-lg border-gray-200"
            >
              <div class="flex-shrink-0" v-if="post.imageUrl">
                <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">

                  <a :href="post.href" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                    <p class="mt-3 text-base text-gray-500" v-html="post.description"></p>
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

            <!-- no result -->
            <div
              v-if="computedRecentJobs.length == 0"
              class="flex flex-col border overflow-hidden rounded-lg shadow-lg border-gray-200"
            >
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-xl font-semibold text-gray-900">No Result</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestVue>
</template>
