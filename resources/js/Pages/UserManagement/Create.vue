<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { ref } from "vue";
const { permissions, roles } = defineProps<{
  roles;
  permissions;
  branches;
}>();
const user = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  roles: [],
  permissions: [],
  branch_id:null
});

import _ from "lodash";
function submit() {
  Inertia.post(route("user-management.store"),user.value);
}
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding>
      <form @submit.prevent="submit" class="max-w-2xl">
        <q-card bordered flat>
          <q-card-section>
            <h3 class="text-h5">User Details</h3>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-gutter-md">
            <q-input outlined type="text" dense v-model="user.name" label="Name" />
            <q-input type="email" outlined dense v-model="user.email" label="Email" />
            <q-input
              type="password"
              outlined
              dense
              v-model="user.password"
              label="Password"
            />
            <q-input
              type="password"
              outlined
              dense
              v-model="user.password_confirmation"
              label="Confirm Password"
            />
            <q-select
              outlined
              dense
              v-model="user.roles"
              label="Roles"
              multiple
              :options="roles"
              option-value="id"
              option-label="name"
              use-input
              use-chips
            />
            <q-select
              outlined
              dense
              v-model="user.permissions"
              label="Permissions"
              multiple
              :options="permissions"
              option-value="id"
              option-label="name"
              use-input
              use-chips
            />
            <q-select label="Branch" map-options emit-value hint="Select Branch for User to be assigned to
            " v-model="user.branch_id" dense  outlined :options="branches" option-label="name" option-value="id" />
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-space />
            <q-btn color="primary" label="Save" type="submit" />
          </q-card-actions>
        </q-card>
      </form>
    </q-page>
  </AppLayout>
</template>
