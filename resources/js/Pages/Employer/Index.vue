<script lang="ts" setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { useFetch } from "@vueuse/core";
import { ref, toRefs } from "vue";
const props = defineProps<{
  employers;
  req
}>();

const { employers,req } = toRefs(props);


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
        label:"Active",
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
// get route params

const search = ref(req.value.search);
function seaarch(){
    onRequest({
        pagination:{
            page:1,
            rowsPerPage:10,
            sortBy:"id",
            descending:false,
            search:search.value
        }
    })
}
</script>

<template>
  <AppLayout>
    <q-page padding>
      <!-- using qtable list all employers -->
      <q-table flat bordered
        ref="tableRef"
        title="Treats"
        :rows="employers.data"
        row-key="id"
        binary-state-sort
        @request="onRequest"
        :columns="columns"
        :pagination="{
            rowsPerPage: 10,
            page: employers.current_page,
            rowsNumber: employers.total,
        }"
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
            <q-form @submit="seaarch">
                <q-input :model-value="search" @change="search = $event"
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
            </q-form>
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
          <q-td >
            <q-img class="object-fit h-12 w-12"
              :src="row?.first_media?.original_url"
              :ratio="1"

              v-if="row?.first_media?.original_url"
            />
            <q-avatar v-else>
              <q-icon name="mdi-domain" />
            </q-avatar>
          </q-td>
        </template>
      </q-table>
    </q-page>
  </AppLayout>
</template>
