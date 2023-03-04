<template>
  <Guest>
    <Contacts2 :branches="branches" :company="company" class="div-anchor" />
    <RecentJobs :recent-jobs="recentJobs" />
    <AboutUsVue />
    <VisionMissionVue />
    <!-- <BranchesVue /> -->
    <q-separator/>
   <Employers :employers="employers"/>
    <Footer :branches="branches"/>

  </Guest>
</template>
<script lang="ts" setup>
import Employers from "../Components/Employers.vue";
import Contacts2 from "../Components/Pages/Contacts2.vue";
import AboutUsVue from "../Components/Pages/AboutUs.vue";
import VisionMissionVue from "../Components/Pages/VisionMission.vue";
import RecentJobs from "../Components/Pages/RecentJobs.vue";
import BranchesVue from "../Components/Branches.vue";
import Guest from "../Layouts/Guest.vue";
import Footer from "../Components/Footer.vue";
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar()

const { recentJobs, principals,branches,employers } = defineProps<{
  principals;
  recentJobs: any;
  branches: any;
  employers:any;
  company: any;
}>();
const slide = ref(0);
// paginate array into chunks with 10 items
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
const pr = computed(() => {
  return chunk(principals, $q.platform.is.mobile ? 2 : 10);
});

</script>
<style>
.div-anchors{
    scroll-margin-top: 64px;
}
</style>
