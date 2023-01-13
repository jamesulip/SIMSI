<template>
  <Guest>
    <Contacts2 id="home"/>
    <RecentJobs  :recent-jobs="recentJobs" />
    <AboutUsVue />
    <VisionMissionVue />
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl ">
        <p class="text-center text-2xl font-semibold py-9 text-gray-600">
          Lists of our Principals
        </p>
        <div  class="flex flex-row overflow-x-auto max-w-full">
          <div v-for="i in principals" class="flex w-72 h-24  bg-gray-50 ">
            <img
              class="max-h-16"
              :src="`/storage/${i}`"
              alt="Workcation"
            />
          </div>
        </div>
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
const { recentJobs, principals } = defineProps<{
  principals;
  recentJobs: any;
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
      description:
        job.description
          .replace(/(<([^>]+)>)/gi, "")
          //   remove nbps
          .replace(/&nbsp;/gi, "")

          .substring(0, 250) + "...",
      date: job.date_posted,
      datetime: job.date_expires,
      imageUrl: job.media[0]?.original_url,
    };
  });
});
</script>
