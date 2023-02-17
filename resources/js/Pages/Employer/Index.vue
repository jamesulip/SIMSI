<script lang="ts" setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { useFetch } from "@vueuse/core";
import { ref, toRefs } from "vue";
const props = defineProps<{
  employers;
}>();

const { employers } = toRefs(props);

const pagination = ref({
  page: 1,
  rowsPerPage: employers.value.per_page,
  sortBy: "id",
  descending: true,
  rowsNumber: employers.value.total,
});
function onRequest({ pagination }): void {
  Inertia.get("/admin/employers", pagination);
}
const columns = ref([

  {
    name: "thumb",
    field: "thumb",
    align: "left",
  },
  {
    name: "name",
    field: "name",
    align: "left",
    label: "Employer",
  },
  {
        label:"is Featured",
        name:"is_highlighted",
        field:"is_highlighted",

    },
  {
    label: "Contact",
    name: "phone",
    field: "phone",
    align: "left",
  },
  {
    label: "Website",
    name: "website",
    field: "website",
    align: "left",
  },
  {
    label: "Action",
    name: "action",
    field: "action",
    align: "left",
  },
]);
</script>

<template>
  <AppLayout>
    <q-page padding>
      <!-- using qtable list all employers -->
      <q-table
        ref="tableRef"
        title="Treats"
        :rows="employers.data"
        row-key="id"
        v-model:pagination="pagination"
        binary-state-sort
        @request="onRequest"
        :filter="pagination.search"
        :columns="columns"
      >
        <template #top>
          <q-toolbar>
            <q-toolbar-title
              >Employers
              <!-- create btn -->
              <q-btn
                class="q-ml-md"
                color="primary"
                label="Create"
                href="/admin/employers/create"
              />
            </q-toolbar-title>
            <!-- create search bar -->
            <q-input
              :model-value="route()?.params?.search || ''"
              @keyup.enter.native="pagination.search = $event.target.value"
              debounce="1000"
              label="Search"
              outlined
              dense
              class="q-ml-md"
            >
              <template #prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-toolbar>
        </template>
        <template #body-cell-website="{ row }">
          <q-td>
            <q-btn flat color="blue" :href="row.website" target="_blank">
              <q-icon name="mdi-web" />
            </q-btn>
          </q-td>
        </template>
        <template #body-cell-is_highlighted="{ row }">
          <q-td>
            <q-toggle :true-value="1" :false-value="0" disable v-model:model-value="row.is_highlighted" />
          </q-td>
        </template>
        <template #body-cell-action="{ row }">
          <q-td>
            <q-btn flat color="blue" :href="`/admin/employers/${row.id}`">
              <q-icon name="mdi-pencil" />
            </q-btn>
          </q-td>
        </template>
        <template #body-cell-phone="{ row }">
          <q-td>
            <div class="text-xs text-caption">
              {{ row.phone }}
            </div>
            <div class="text-xs text-caption">
              {{ row.email }}
            </div>
          </q-td>
        </template>
        <template #body-cell-name="{ row }">
          <q-td>
            <h6 class="text-base font-semibold">
              {{ row.name }}
            </h6>
            <div class="text-xs text-caption">
              {{ row.country }}
            </div>
          </q-td>
        </template>
        <template #body-cell-thumb="{ row }">
          <q-td auto-width>
            <q-img
              :src="row.thumb"
              :ratio="1"
              style="width: 50px; height: 50px"
              v-if="row.thub"
            />
            <q-avatar>
              <q-icon name="mdi-domain" />
            </q-avatar>
          </q-td>
        </template>
      </q-table>
    </q-page>
  </AppLayout>
</template>
