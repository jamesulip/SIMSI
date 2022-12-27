<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { date } from "quasar";
import { useQuasar } from "quasar";
const $q = useQuasar();
const { job } = defineProps<{
  job;
}>();
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding class="q-gutter-md">
      <q-card flat bordered>
        <q-card-actions class="q-pa-md">
          <div class="text-h6">{{ job.title }}</div>
          <q-space />
          <!-- create apply button -->
          <q-btn
            icon-right="send"
            size="lg"
            color="primary"
            label="Apply Now"
            width="1000"
            outline
            rounded
          />
        </q-card-actions>
      </q-card>
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h6">Description</div>
        </q-card-section>
        <q-separator />
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-h6" v-html="job.description" />
          </q-card-section>
          <q-separator vertical />
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
            <div v-if="job.show_salary">
              <div class="text-h6">Show Salary</div>
              <div>{{ job.show_salary }}</div>
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
              <q-chip color="primary" text-color="white">{{ job.job_type.name }}</q-chip>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </AppLayout>
</template>
