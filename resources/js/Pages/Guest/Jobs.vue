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
    <div
      class="w-full flex h-96 relative bg-cover bg-bottom bg-gradient-to-r from-cyan-500 to-blue-500"
      style="background-image: url(/images/john-schnobrich-2FPjlAyMQTA-unsplash.jpg)"
    >
      <div class="backdrop-blur-sm bg-black/50 w-full h-full"></div>
      <!-- create a div with text Job opening position aboslute center middle -->
      <div
        class="absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2"
      >
        <h1 class="text-h2 !font-bold text-white">Job Opening</h1>
        <p class="text-2xl text-white">
          Get the latest job opening from the best companies here.
        </p>
      </div>
    </div>

    <div class="max-w-8xl mx-auto py-1 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-gray-200 rounded-lg">
          <!-- search button -->
          <!-- quasar search -->
          <div class="sm:grid grid-cols-4 gap-2 mx-auto max-w-5xl">
            <div class="flex-0 mb-3">
              <q-form @submit="searchJob()" @reset="resetSearch" class="flex gap-2">
                <q-input
                  class="w-full"
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
                  class="w-full"
                  :option-value="(b) => b?.location"
                />
                <div class="flex w-full gap-3">
                  <q-btn icon="close" flat class="w-full" type="reset"></q-btn>
                  <q-btn
                    class="w-full flex-1"
                    icon="search"
                    type="submit"
                    color="green"
                    label="Search"
                  ></q-btn>
                </div>
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
