<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { ref } from "vue";
const { user, permissions, roles } = defineProps<{
  user;
  roles;
  permissions;
}>();
import _ from "lodash";
function submit() {
  Inertia.put(route("user-management.update", user.id), _.cloneDeep(user));
}
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding>
      <form @submit.prevent="submit" class="max-w-2xl">
        <q-card>
          <q-card-section>
            <h3 class="text-h5">User Details</h3>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-gutter-md">
            <q-input outlined dense v-model="user.name" label="Name" />
            <q-input outlined dense v-model="user.email" label="Email" />
            <q-input outlined dense v-model="user.password" label="Password" />
            <q-input
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
