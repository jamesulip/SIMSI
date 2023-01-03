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
      <template #top>
            <q-toolbar>
                <q-toolbar-title>Users</q-toolbar-title>
                <q-space />
                <q-btn flat color="primary" :to="{ name: 'user-management.create' }">
                <q-icon name="add" />
                <q-tooltip>Add User</q-tooltip>
                </q-btn>
            </q-toolbar>
            </template>
            <template #body-cell-name="{ row }">
            <q-td>
                <q-item>
                <q-item-section>
                    <q-item-label>{{ row.name }}</q-item-label>
                    <q-item-label caption>{{ row.email }}</q-item-label>
                </q-item-section>
                </q-item>
            </q-td>
      </template>
        <template #body-cell-profile_photo_url="{ row }">
          <q-td>
            <q-avatar>
              <img :src="row.profile_photo_url" />
            </q-avatar>
          </q-td>
        </template>
        <template #body-cell-actions="{ row }">
            <q-td>
                <q-btn flat color="blue" :href="`/admin/users/${row.id}
                `">
              <q-icon name="mdi-pencil" />
            </q-btn>
            </q-td>
        </template>
        <template #body-cell-roles="{ row }">
          <q-td>
            <q-chip
              v-for="role in row.roles"
              :key="role.id"
              :label="role.name"
              color="primary"
              text-color="white"
            />
          </q-td>
        </template>
      </q-table>
    </q-page>
  </AppLayout>
</template>
