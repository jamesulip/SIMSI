<script setup lang="ts">
import { Link } from "@inertiajs/inertia-vue3";
import { date } from "quasar";
import { useQuasar } from "quasar";
import { ref } from "vue";
import Guest from "../../Layouts/Guest.vue";
const $q = useQuasar();
const { job } = defineProps<{
  job;
}>();
const slide = ref(1);
const fullscreen = ref(false);
</script>
<template>
  <Guest>
    <div class="relative">
      <div class="max-w-3xl gap-3 flex flex-col mx-auto py-6 sm:px-6 lg:px-8">
        <q-card flat bordered>
          <q-card-actions class="q-pa-md">
            <div class="text-h6">{{ job.title }}</div>
            <q-space />
            <!-- create apply button -->
            <Link :href="`/job/${job.id}/apply`">
            <q-btn icon-right="send" color="primary" label="Apply Now" width="1000" outline />
            </Link>
          </q-card-actions>
        </q-card>


        <q-carousel v-if="job?.media.length" animated autoplay v-model:fullscreen="fullscreen" v-model="slide" arrows
          navigation infinite>
          <q-carousel-slide v-for="(img, ind) in job.media" :key="ind" :name="ind + 1" :img-src="img.original_url" />
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn push round dense color="white" text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
            </q-carousel-control>
          </template>
        </q-carousel>
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">Description</div>
          </q-card-section>
          <q-separator />
          <!-- make responsive -->
            <q-card-section class="flex-1">
              <div v-html="job.description" />
            </q-card-section>
          <q-separator />
          <q-card-section class="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
            <div v-if="job.date_posted" class="col-span-full ">
              <span class="text-subtitle2 text-base">Date Posted</span><br>
              <span class="text-caption px-3">{{ job.date_posted }}</span>
            </div>

            <div v-if="job.date_posted" class="col-span-full ">
              <span class="text-subtitle2 text-base">Date Expires</span><br>
              <span class="text-caption px-3">{{ job.date_expires }}</span>
            </div>
            <div v-if="job.skills" class="col-span-full ">
              <span class="text-subtitle2 text-base">Qualifications</span><br>

                <ul class="list-disc px-5">
                    <li v-for="i in job.skills" v-html="i"></li>
                </ul>
            </div>

            <div v-if="job.salary">
              <span class="text-subtitle2 text-base">Salary</span><br>
              <span class="text-caption">{{ job.salary }}</span>
            </div>

            <div v-if="job.job_type">
              <span class="text-subtitle2 text-base">Job Type</span><br>
              <span class="text-caption">{{ job.job_type.name }}</span>
            </div>


          </q-card-section>
          <q-separator v-if="job.media.length > 0" />
          <q-card-section v-if="job.media.length > 0">
            <span class="text-h6">Attachments</span>
            <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <a :href="img.original_url" v-for="img in job.media" :key="img.id">
                <img :src="img.original_url"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  class="rounded-lg bg-gray-100" />
              </a>
            </div>

          </q-card-section>
        </q-card>
      </div>
    </div>
  </Guest>
</template>

<style scoped>

</style>
