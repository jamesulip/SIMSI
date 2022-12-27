<script lang="ts" setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, defineProps, onMounted } from "vue";
const { jobs } = defineProps<{
  jobs;
}>();
const jobHeaders = ref([
  {
    name: "title",
    label: "Title",
    field: "title",
    sortable: true,
    align: "left",
  },

  {
    name: "location",
    label: "Location",
    field: "location",
    sortable: true,
    align: "left",
  },
  {
    name: "salary",
    label: "Salary",
    field: "salary",
    sortable: true,
    align: "left",
    format: (val) => (!!val ? `$${val}` : "Not Specified"),
  },
  {
    name: "job_type",
    label: "Job Type",
    field: "job_type",
    sortable: true,
    align: "left",
  },
  {
    name: "skills",
    label: "Skills",
    field: "skills",
    sortable: true,
    align: "left",
  },
  {
    name: "actions",
    label: "Actions",
    field: "actions",
    sortable: true,
    align: "left",
  },
]);
// strip html tags from description
onMounted(() => {
  jobs.forEach((job) => {
    job.description = job.description.replace(/(<([^>]+)>)/gi, "");
  });
});
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding>
      <!-- quasar table with heading titled Job list -->
      <q-table
        flat
        bordered
        :rows="jobs"
        :columns="jobHeaders"
        row-key="id"
        title="Job List"
      >
        <template #top>
          <q-toolbar>
            <div>
              <q-toolbar-title>Job List</q-toolbar-title>
              <div>
                <span> Here you can see all the jobs that are currently available. </span>
              </div>
            </div>
            <q-space />
            <q-btn
              @click="$inertia.get(`/admin/jobs/create`)"
              unelevated
              icon="mdi-plus"
              label="Post Job"
              color="primary"
            />
          </q-toolbar>
        </template>
        <template #body-cell-job_type="{ row }">
          <q-td>
            <q-chip v-if="row.job_type" color="primary" text-color="white">
              {{ row.job_type.name }}
            </q-chip>
          </q-td>
        </template>
        <template #body-cell-skills="{ row }">
          <q-td>
            {{ row.skills.join(",") }}
          </q-td>
        </template>
        <template #body-cell-title="{ row }">
          <q-td>
            <div class="text-bold" v-html="row.title" />
            <div class="text-ellipsis overflow-hidden max-w-md">
              <span v-html="row.description"></span>
            </div>
          </q-td>
        </template>
        <template #body-cell-actions="{ row }">
          <q-td>
            <q-btn flat icon="mdi-dots-vertical" color="primary">
              <q-menu>
                <q-list>
                  <q-item clickable :href="`/admin/jobs/${row.id}`">
                    <q-item-section>View</q-item-section>
                  </q-item>
                  <q-item clickable :href="`/admin/jobs/${row.id}/edit`">
                    <q-item-section>Edit</q-item-section>
                  </q-item>
                  <q-item clickable @click="$inertia.delete(`/admin/jobs/${row.id}`)">
                    <q-item-section>Delete</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </q-page>
  </AppLayout>
</template>
