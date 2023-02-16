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
        field: "status",
        name: "status",
        align: "left",
        sortable: true,
    },

])
const applicantHeader = ref([
    {
        label: "Name",
        field: "first_name",
        name: "first_name",
        align: "left",
        sortable: true,

    },
    {
        label: "Email",
        field: "email",
        name: "email",
        align: "left",
        sortable: true,

    },
    {
        label: "Job Title",
        field: "job_title",
        name: "job_title",
        align: "left",
        sortable: true,

    },
    {
        label: "Status",
        field: "status",
        name: "status",
        align: "left",
        sortable: true,

    },
    {
        label: "Applied Date",
        field: "created_at",
        name: "created_at",
        align: "left",
        sortable: true,
    }
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
        <q-card flat bordered class="col-span-3">
          <q-card-section class="p-3">
            <div class="text-">Total Jobs</div>
          </q-card-section>
          <q-separator/>
          <q-card-section class="flex w-full justify-around">
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.length }}</div>
                <div class="">Total Posted Job</div>
            </div>
            <div class="text-center">
                <div class="text-h4 text-green">{{ jobs.filter((v)=>v.active).length }}</div>
                <div class="">Total Active Job</div>
            </div>

            <div class="text-center">
                <div class="text-h4 text-red">{{ jobs.filter((v)=>!v.active).length }}</div>
                <div class="text-">Close Job</div>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat bordered class="col-span-3">
            <q-card-section class="p-3">
            <div class="text-"> Dashboard</div>
          </q-card-section>
          <q-separator/>
          <q-card-section  class="flex w-full justify-around">
            <div class="text-center">
                <div class="text-h4 text-green">{{ applicants.length }}</div>
                <div class="">Applicants</div>
            </div>
            <div class="text-center">
                <div class="text-h4 text-blue">{{ countApprovedApplicants(applicants,1) }}</div>
                <div class="">New</div>
            </div>
            <div class="text-center">
                <div class="text-h4 text-yellow-500">{{ countApprovedApplicants(applicants,3) }}</div>
                <div class="">In Progress</div>
            </div>

          </q-card-section>
        </q-card>

        <q-table :pagination="jobsPagination" separator="cell" :columns="jobsHeader" flat bordered title="Applicants" :rows="jobs"  row-key="id" class="col-span-full">
            <template #body-cell-location="{ row }">
                <q-td auto-width>
                    <div class="max-w-xs text-ellipsis overflow-hidden">
                        <span v-html="row.location"></span>
                    </div>
                </q-td>
            </template>
            <template #body-cell-title="{ row }">
                <q-td auto-width>
                    <div class="max-w-xs text-ellipsis overflow-hidden">
                        <a class="text-blue" :href="`/admin/jobs/${row.id}`" v-html="row.title"></a>
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
            <template #body-cell-status="{ row }">
                <q-td auto-width>
                   <q-chip :color="row.active ? 'green' : 'red'" text-color="white" size="xs" :outline="!row.active" />
                </q-td>
            </template>
        </q-table>
        <q-table :pagination="applicantPagination" :columns="applicantHeader" flat bordered title="Applicants" :rows="applicants"  row-key="id" class="col-span-full">
        <template #body-cell-status="{row}">
        <q-td>
           <q-chip :color="`${row.applicant_status.color}-3`" text-color="black" size="sm" :outline="!row.applicant_status.color" v-html="row.applicant_status.name" />
        </q-td>
        </template>
        <template #body-cell-first_name="{row}">
            <q-td>
                <div class="max-w-xs text-ellipsis overflow-hidden">
                    <a class="text-blue" :href="`/admin/jobs/${row.jobs_id}/applicant/${row.id}`" v-html="`${row.last_name}. ${row.first_name}`"></a>
                </div>
            </q-td>
        </template>
        <template #body-cell-email="{row}">
            <q-td>
                <ul>
                    <li>{{ row.email }}</li>
                    <li>{{ row.phone }}</li>
                </ul>
            </q-td>
        </template>
        </q-table>

      </div>
    </q-page>
  </AppLayout>
</template>
