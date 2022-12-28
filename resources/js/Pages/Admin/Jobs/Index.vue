<script lang="ts" setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref, defineProps, onMounted } from "vue";
import { date } from "quasar";
import { Link } from "@inertiajs/inertia-vue3";
const search = ref(route().params.search);

const { jobs } = defineProps<{
  jobs;
}>();
const jobHeaders = ref([
  // thumb
  {
    name: "thumb",
    label: "Thumb",
    field: "thumb",
    sortable: true,
    align: "left",
    format: (val) => (!!val ? `<img src="${val}" width="50" />` : "Not Specified"),
  },
  {
    name: "title",
    label: "Title",
    field: "title",
    sortable: true,
    align: "left",
  },

  {
    name: "created_at",
    label: "Date Created",
    field: "created_at",
    sortable: true,
    align: "left",
    format: (val) => (!!val ? `$${val}` : "Not Specified"),
  },
  {
    name: "date_expires",
    label: "Posting Ends",
    field: "date_expires",
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
    name: "applicant",
    label: "Applicants",
    field: "applicant",
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
      <!-- search card -->
      <q-form @submit="$inertia.get(`/admin/jobs`, { search })">
        <q-card flat bordered class="mb-5">
          <q-card-actions class="q-pa-md">
            <q-toolbar>
              <div>
                <q-toolbar-title>Job List</q-toolbar-title>
                <div>
                  <span>
                    Here you can see all the jobs that are currently available.
                  </span>
                </div>
              </div>
              <q-space />
              <!-- quasar table with heading titled Job list -->
              <q-btn
                @click="$inertia.get(`/admin/jobs/create`)"
                unelevated
                icon="mdi-plus"
                label="Post Job"
                color="primary"
              />
            </q-toolbar>
          </q-card-actions>
          <q-card-section>
            <q-space />
            <q-input
              clearable
              @clear="$inertia.get(`/admin/jobs`, { search })"
              v-model="search"
              outlined
              placeholder="Search"
              class="q-mb-md"
            />

            <q-btn unelevated icon="mdi-magnify" label="Search" color="primary" />
          </q-card-section>
        </q-card>
      </q-form>
      <q-table
        separator="cell"
        flat
        bordered
        :rows="jobs"
        :columns="jobHeaders"
        row-key="id"
        :rows-per-page-options="[20, 50, 80, 100]"
      >
        <template #body-cell-job_type="{ row }">
          <q-td>
            <q-chip v-if="row.job_type" color="primary" text-color="white">
              {{ row.job_type.name }}
            </q-chip>
          </q-td>
        </template>
        <template #body-cell-created_at="{ row }">
          <q-td>
            <div v-if="row.date_posted" class="leading-10">
              {{ date.formatDate(row.created_at, "DD/MM/YYYY") }}
            </div>
          </q-td>
        </template>
        <template #body-cell-skills="{ row }">
          <q-td> </q-td>
        </template>
        <template #body-cell-title="{ row }">
          <q-td>
            <Link :href="`/admin/jobs/${row.id}`">
              <div class="text-bold text-h6" v-html="row.title" />
              <div class="text-ellipsis overflow-hidden max-w-md">
                <span v-html="row.description"></span>
              </div>
              <div class="text-ellipsis overflow-hidden max-w-md">
                <span v-html="row.location"></span>
              </div>
              <span v-if="row.skills">
                <div class="flex items-center">
                  <label for="" class="text-subtitle2"> Skills: </label>
                  <q-chip
                    v-for="skill in row.skills"
                    :key="skill.id"
                    color="primary"
                    text-color="white"
                  >
                    {{ skill }}
                  </q-chip>
                </div>
              </span>

              <div class="flex items-center">
                <label for="" class="text-subtitle2"> Job Type: </label>
                <q-chip v-if="row.job_type" color="primary" text-color="white">
                  {{ row.job_type.name }}
                </q-chip>
              </div>
            </Link>
          </q-td>
        </template>
        <template #body-cell-thumb="{ row }">
          <q-td auto-width>
            <q-avatar square size="120px" v-if="row?.media[0]">
              <q-img :src="row?.media[0]?.original_url" alt="alt" />
            </q-avatar>
            <q-avatar square size="120px" v-else>
              <q-icon name="mdi-image-off" />
            </q-avatar>
          </q-td>
        </template>
        <template #body-cell-applicant="{ row }">
          <q-td auto-width>
            {{ row.applicant.length }}
          </q-td>
        </template>
        <template #body-cell-actions="{ row }">
          <q-td>
            <q-btn flat icon="mdi-dots-vertical" color="primary">
              <q-menu>
                <q-list>
                  <q-item clickable target="_blank" :href="`/job/${row.uuid}`">
                    <q-item-section>Preview Job Post</q-item-section>
                  </q-item>
                  <q-item clickable :href="`/admin/jobs/${row.id}`">
                    <q-item-section>Show Applicants</q-item-section>
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
