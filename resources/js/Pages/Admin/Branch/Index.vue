<template>
  <AppLayout title="Jobs">
    <q-page padding class="flex w-full">
      <q-table :rows="branches">
        <template #body-cell-phone="{ row }">
         <q-td>
            <div  v-for="(phone, ind) in row.phone">
            <span v-text="phone" :key="`phone-${ind}`"/>
            </div>
         </q-td>
        </template>
        <template #body-cell-email="{ row }">
         <q-td>
            <div  v-for="(email, ind) in row.email">
            <span v-text="email" :key="`email-${ind}`"/>
            </div>
         </q-td>
        </template>
      </q-table>
    </q-page>
  </AppLayout>
</template>
<script lang="ts" setup>
// import applayout
import AppLayout from "@/Layouts/AppLayout.vue";
const { branches } = defineProps<{ branches: any }>();
</script>
