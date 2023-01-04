<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { date } from "quasar";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
const { job, applicant_status } = defineProps<{
  job;
  applicant_status;
  applicants;
}>();
const $q = useQuasar();
const columns = ref([
  {
    name: "first_name",
    label: "Name",
    field: "first_name",
    sortable: true,
    align: "left",
  },
  {
    name: "last_name",
    label: "Last Name",
    field: "last_name",
    sortable: true,
    align: "left",
  },
  {
    name: "email",
    label: "Email",
    field: "email",
    sortable: true,
    align: "left",
  },
  {
    name: "phone",
    label: "Phone",
    field: "phone",
    sortable: true,
    align: "left",
  },
  {
    name: "resume",
    label: "Resume",
    field: "resume",
    sortable: true,
    align: "left",
  },
  {
    name: "status",
    label: "Status",
    field: "status",
    sortable: true,
    align: "left",
  },
]);

const search = ref({
  search: route().params.search ?? "",
  applicant_status_id: route().params.applicant_status_id ?? null,
});
function mime_type_to_mdi_icon(mime_type) {
  return mime_type === "application/pdf"
    ? "/images/pdf.png"
    : mime_type === "application/msword"
    ? "/images/doc.png"
    : "/images/google-docs.png";
}
function searchFn() {
  Inertia.get(`/admin/jobs/${job.id}`, search.value);
}
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding class=" flex flex-col" >
      <q-card class="mx-auto max-w-7xl w-full mb-5" flat bordered>
        <q-card-actions class="q-pa-md">
          <div class="text-h6">{{ job.title }}</div>
          <!--  -->
          <q-space />
          <Link
            :href="`/admin/jobs/${job.id}/edit`"
            unelevated
            dense
            text-color="black"
            class="border pa-2"
            >Edit</Link
          >
        </q-card-actions>
      </q-card>

      <q-table class="mx-auto max-w-7xl w-full"
        :rows="applicants"
        :columns="columns"
        :pagination="{
          rowsPerPage: 50,
        }"
      >
        <template #top>
          <div class="flex justify-between w-full">
            <h3 class="text-h6">Applicants</h3>
            <form method="get" @submit.prevent="searchFn">
              <div class="flex q-gutter-sm">
                <q-input
                  v-model="search.search"
                  outlined
                  name="search"
                  dense
                  placeholder="Search by name, email, phone"

                />
                <q-select
                  dense
                  outlined
                  :options="$props.applicant_status"
                  :option-label="(option) => option.name"
                  name="applicant_status_id"
                  v-model="search.applicant_status_id"
                  option-value="id"
                  emit-value
                  map-options
                  clearable
                />
                <q-btn unelevated dense type="submit" color="primary">
                  Search
                </q-btn>
              </div>
            </form>
          </div>
        </template>
        <template #body-cell-resume="{ row }">
          <q-td>
            <a :href="row?.resume?.original_url" target="_blank">
              <q-avatar square size="sm">
                <img :src="mime_type_to_mdi_icon(row?.resume?.mime_type)" />
              </q-avatar>
            </a>
          </q-td>
        </template>
        <template #body-cell-status="{ row }">
          <q-td>
            <q-btn
              unelevated
              dense
              text-color="black"
              class="border pa-2"
              :color="row.applicant_status.color"
              :label="row.applicant_status.name"
              size="sm"
            >
              <q-menu>
                <q-list>
                  <q-item
                    :disable="
                      row.applicant_status.name === item.name ||
                      item.name === 'New'
                    "
                    v-for="(item, index) in applicant_status"
                    :key="index"
                    clickable
                    @click="
                      $inertia.put(`/admin/applicant/${row.id}`, {
                        applicant_status_id: item.id,
                      })
                    "
                  >
                    <q-item-section>{{ item.name }}</q-item-section>
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
