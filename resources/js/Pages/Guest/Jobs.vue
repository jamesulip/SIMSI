<script setup lang="ts">
import GuestVue from "@/Layouts/Guest.vue";
import { Inertia } from "@inertiajs/inertia";
import { useFetch } from "@vueuse/core";
import { computed, ref } from "vue";

const { jobs: recentJobs, available_locations, query: searQ } = defineProps<{
  jobs: any;
  available_locations;
  query;
}>();
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
const { data, isFetching } = useFetch(
  "https://restcountries.com/v3.1/all?fields=name"
).json();
const options = ref(data.value);
function filterFn(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    options.value = data.value.filter(
      (v) => v.name.common.toLowerCase().indexOf(needle) > -1
    );
  });
}

const search = ref({
  search: searQ.search ?? "",
  location: searQ.location ?? "",
});
function searchJob() {
  Inertia.get("/jobs", search.value);
}
function resetSearch() {
  search.value = {
    search: "",
    location: "",
  };
  searchJob();
}
</script>
<template>
  <GuestVue>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-gray-200 rounded-lg">
          <!-- search button -->
          <!-- quasar search -->
          <div class="sm:grid grid-cols-4 gap-2 mx-auto max-w-3xl">
            <div class="flex-0 mb-3">
              <q-form @submit="searchJob()" @reset="resetSearch" class="q-gutter-md">
                <q-input
                  v-model="search.search"
                  outlined
                  dense
                  label="Job Title"
                  name="search"
                  clearable
                >
                </q-input>
                <q-select
                  use-input
                  dense
                  :options="available_locations"
                  @filter="filterFn"
                  v-model="search.location"
                  outlined
                  label="Location"
                  :loading="isFetching"
                  :option-label="(v) => v?.location"
                  map-options
                  emit-value
                  :option-value="(b) => b?.location"
                />
                <q-btn
                  icon="search"
                  type="submit"
                  class="bg-green-700"
                  label="Search"
                ></q-btn>
                <q-btn
                  icon="close"
                  type="reset"
                  color="warning"
                  label="Clear Search"
                ></q-btn>
              </q-form>
            </div>
            <div class="col-span-3 gap-3 grid">
              <div
                v-for="post in computedRecentJobs"
                :key="post.title"
                class="flex flex-col border overflow-hidden rounded-lg shadow-lg border-gray-200"
              >
                <div class="flex-shrink-0" v-if="post.imageUrl">
                  <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-3">
                  <div class="flex-1">
                    <a :href="post.href" class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                      <p
                        class="mt-3 text-base text-gray-500"
                        v-html="post.description"
                      ></p>
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
    </div>
  </GuestVue>
</template>
