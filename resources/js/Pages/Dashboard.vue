<script lang="ts" setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
const { applicants,jobs } = defineProps<{
  applicants;
  jobs;
}>();

const jobsHeader = ref([
    {
        label: "Job Title",
        field: "title",
        name: "title",
        align: "left",
        sortable: true,

    },
    {
        label: "Location",
        field: "location",
        name: "location",
        align: "left",
        sortable: true,

    },
    {
        label: "New",
        field: "new",
        name: "new",
        align: "center",
        sortable: true,

    },

    {
        label: "Approved",
        field: "approved",
        name: "approved",
        align: "center",
        sortable: true,
    },
    {
        label: "Rejected",
        field: "rejected",
        name: "rejected",
        align: "center",
        sortable: true,

    },
    {
        label: "Status",
        field: "active",
        name: "active",
        align: "left",
        sortable: true,
    },

])

const jobsPagination = ref({
    rowsPerPage: 10,
});
const applicantPagination = ref({
    rowsPerPage: 10,
});
function countNewApplicants(row){
    return row.filter((item) => {
        return new Date(item.created_at ) > new Date(new Date().setDate(new Date().getDate() - 2))
    }).length
}
function countApprovedApplicants(row, status){
    return row.filter((item) => {
        return item.applicant_status_id == status
    }).length
}
</script>

<template>
  <AppLayout title="Dashboard">
    <q-page padding>
      <!-- create card for dashboard -->
      <div class="grid grid-cols-6 gap-3 w-full">

        <q-card flat bordered class="col-span-4">
            <q-card-section class="p-3">
            <div class="text-">Total Applicants</div>
          </q-card-section>
          <q-separator/>
          <q-card-section  class="flex w-full justify-around">
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.length }}</div>
                <div class="">Active</div>
            </div>
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.length }}</div>
                <div class="">Active</div>
            </div>
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.length }}</div>
                <div class="">Active</div>
            </div>
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.length }}</div>
                <div class="">Active</div>
            </div>
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.length }}</div>
                <div class="">Active</div>
            </div>
          </q-card-section>
        </q-card>


        <q-card flat bordered>
            <q-card-section class="p-3">
            <div class="text-">Total Applicants</div>
          </q-card-section>
          <q-separator/>
          <q-card-section>
            <div class="text-h4">{{ applicants.length }}</div>
          </q-card-section>
        </q-card>

        <q-card flat bordered>
          <q-card-section class="p-3">
            <div class="text-">Total Jobs</div>
          </q-card-section>
          <q-separator/>
          <q-card-section class="flex w-full justify-around">
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.length }}</div>
                <div class="">Active</div>
            </div>

            <div class="text-center">
                <div class="text-h4 text-red">{{ jobs.length }}</div>
                <div class="text-">Closed</div>
            </div>
          </q-card-section>
        </q-card>


        <q-table :pagination="jobsPagination" separator="cell" :columns="jobsHeader" flat bordered title="Applicants" :rows="jobs"  row-key="id" class="col-span-4">
            <template #body-cell-location="{ row }">
                <q-td auto-width>
                    <div class="max-w-xs text-ellipsis overflow-hidden">
                        <span v-html="row.location"></span>
                    </div>
                </q-td>
            </template>
            <template #body-cell-rejected="{ row }">
                <q-td auto-width>
                    <a :href="`/admin/jobs/${row.id}?applicant_status_id=1`"  class="text-red">   {{ countApprovedApplicants(row.applicant,1) }}</a>
                </q-td>
            </template>
            <template #body-cell-new="{ row }">
                <q-td auto-width>
                    <a :href="`/admin/jobs/${row.id}?applicant_status_id=5`"  class="text-blue">   {{ countApprovedApplicants(row.applicant,5) }}</a>
                </q-td >
            </template>
            <template #body-cell-approved="{ row }">
                <q-td auto-width>
                    <a :href="`/admin/jobs/${row.id}?applicant_status_id=2`" class="text-red">   {{ countApprovedApplicants(row.applicant,2) }}</a>
                </q-td>
            </template>
            <template #body-cell-active="{ row }">
                <q-td auto-width>
                   <q-chip :color="row.active ? 'green' : 'red'" text-color="white" size="xs" :outline="!row.active" />
                </q-td>
            </template>
        </q-table>
        <q-table :pagination="applicantPagination" :columns="jobsHeader" flat bordered title="Applicants" :rows="applicants"  row-key="id" class="col-span-2"/>

      </div>
    </q-page>
  </AppLayout>
</template>
