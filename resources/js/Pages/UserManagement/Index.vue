<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
const { users } = defineProps<{
  users;
}>();
const columns = ref([
  {
    name: "profile_photo_url",
    label: "Image",
    field: "profile_photo_url",
    sortable: true,
    align: "left",
  },
  {
    name: "Name",
    label: "Name",
    field: "name",
    sortable: true,
    align: "left",
  },
  {
    name: "Email",
    label: "Email",
    field: "email",
    sortable: true,
    align: "left",
  },
  {
    name: "roles",
    label: "Roles",
    field: "roles",
    sortable: true,
    align: "left",
  },
  {
    name: "actions",
    label: "Actions",
    field: "actions",
    align: "left",
  },
]);
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding>
      <q-table :columns="columns" :rows="users" title="Users" flat bordered>
        <template #body-cell-profile_photo_url="{ row }">
          <q-td>
            <q-avatar>
              <img :src="row.profile_photo_url" />
            </q-avatar>
          </q-td>
        </template>
      </q-table>
    </q-page>
  </AppLayout>
</template>
