<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { date } from "quasar";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { Link } from "@inertiajs/inertia-vue3";
const { job, applicant_status } = defineProps<{
  job;
  applicant_status;
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
    name: "status",
    label: "Status",
    field: "status",
    sortable: true,
    align: "left",
  },
]);
const slide = ref(1);
const fullscreen = ref(false);
const search = ref("");
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding class="q-gutter-md">
      <q-card flat bordered>
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
      <!-- create dashboard card -->
      <div class="flex gap-3">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">Applicants</div>
            <div class="text-h3">{{ job.applicant.length }}</div>
          </q-card-section>
        </q-card>
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">Approved</div>
            <div class="text-h3">
              {{
                job.applicant.filter((b) => b.applicant_status.name === "Approved").length
              }}
            </div>
          </q-card-section>
        </q-card>
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h6">New</div>
            <div class="text-h3">
              {{ job.applicant.filter((b) => b.applicant_status.name === "New").length }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- search -->
      <q-card flat bordered>
        <q-card-actions class="q-pa-md">
          <div class="text-h6">Search</div>
        </q-card-actions>
        <q-card-section>
          <q-input
            v-model="search"
            outlined
            dense
            placeholder="Search by name, email, phone"
            class="q-mb-md"
          />
        </q-card-section>
      </q-card>
      <q-table
        :filter="search"
        :rows="job.applicant"
        :columns="columns"
        :pagination="{
          rowsPerPage: 50,
        }"
      >
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
                      row.applicant_status.name === item.name || item.name === 'New'
                    "
                    v-for="(item, index) in applicant_status"
                    :key="index"
                    clickable
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
