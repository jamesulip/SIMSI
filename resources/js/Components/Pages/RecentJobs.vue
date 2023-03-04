<template>
  <div id="recentjob" class="relative w-full div-anchors p-5  border-b bg-gray-100 bg-no-repeat	bg-cover bg-center" style="background-image: url('https://www.ppd.com/wp-content/uploads/2020/07/shutterstock_688036339-1024x683.jpg')">

    <div class="backdrop-blur-sm bg-white/50  absolute-full" />
    <div class="p-8 text-center relative uppercase mt-2 text-base font-bold leading-8   sm:text-2xl">
      Recent Jobs
    </div>
    <div class="max-w-3xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 grid-rows-4 h-full
    ">

      <Link :href="`/job/${q.uuid}`" v-for="q in recentJobs">
      <q-card flat bordered class="hover:!shadow-lg h-full">
        <div class="grid grid-cols-3 p-3">
          <div class="col-span-2">
            <span class="text-subtitle font-bold text-xl">
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
