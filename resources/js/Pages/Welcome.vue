<template>
  <Guest>
    <Contacts2 />
    <RecentJobs :recent-jobs="recentJobs" />
    <AboutUsVue />
    <VisionMissionVue />
  </Guest>
</template>
<script lang="ts" setup>
import Contacts2 from "../Components/Pages/Contacts2.vue";
import AboutUsVue from "../Components/Pages/AboutUs.vue";
import VisionMissionVue from "../Components/Pages/VisionMission.vue";
import RecentJobs from "../Components/Pages/RecentJobs.vue";

import { Link } from "@inertiajs/inertia-vue3";
import Guest from "../Layouts/Guest.vue";
import { computed, ref } from "vue";
const slide = ref(1);
const { recentJobs } = defineProps<{ recentJobs: any }>();
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
