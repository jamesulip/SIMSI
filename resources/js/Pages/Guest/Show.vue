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
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <q-card flat bordered>
          <q-card-actions class="q-pa-md">
            <div class="text-h6">{{ job.title }}</div>
            <q-space />
            <!-- create apply button -->
            <Link :href="`/job/${job.id}/apply`">
              <q-btn
                icon-right="send"
                size="lg"
                color="primary"
                label="Apply Now"
                width="1000"
                outline
                rounded
              />
            </Link>
          </q-card-actions>
        </q-card>

        <q-carousel
          animated
          autoplay
          v-model:fullscreen="fullscreen"
          v-model="slide"
          arrows
          navigation
          infinite
        >
          <q-carousel-slide
            v-for="(img, ind) in job.media"
            :key="ind"
            :name="ind + 1"
            :img-src="img.original_url"
          />
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                color="white"
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>

        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">Description</div>
          </q-card-section>
          <q-separator />
          <!-- make responsive -->
          <q-card-section class="flex sm:block">
            <q-card-section class="flex-1">
              <div class="text-h6" v-html="job.description" />
            </q-card-section>
            <q-separator vertical class="hidden sm:visible" />
            <div class="q-ma-md q-gutter-md">
              <div v-if="job.location">
                <div class="text-h6">Location</div>
                <div>{{ job.location }}</div>
              </div>
              <div v-if="job.salary">
                <div class="text-h6">Salary</div>
                <div>{{ job.salary }}</div>
              </div>
              <div v-if="job.skills">
                <div class="text-h6">Skills</div>
                <div>
                  <q-chip
                    v-for="skill in job.skills"
                    :key="skill.id"
                    :label="skill"
                    color="primary"
                    text-color="white"
                  />
                </div>
              </div>

              <div v-if="job.date_posted">
                <div class="text-h6">Created Posted</div>
                <!-- format date -->
                <div>{{ date.formatDate(job.date_posted, "MMMM D, YYYY") }}</div>
              </div>
              <div v-if="job.date_expires">
                <div class="text-h6">Date Expires</div>
                <div>{{ date.formatDate(job.date_expires, "MMMM D, YYYY") }}</div>
              </div>
              <div v-if="job.job_type">
                <div class="text-h6">Job Type</div>
                <q-chip color="primary" text-color="white">{{
                  job.job_type.name
                }}</q-chip>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </Guest>
</template>
