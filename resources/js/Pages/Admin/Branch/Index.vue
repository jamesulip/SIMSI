<template>
  <AppLayout title="Jobs">
    <q-page padding class="">
      <q-table flat bordered title="Branches" class="mx-auto max-w-7xl w-full" :columns="header" :rows="branches">
      <template #top-right>
        <!-- create button -->
        <q-btn unelevated color="primary" icon="add" label="Add Branch" href="/admin/branches/create" />
      </template>
      <template #body-cell-name="{ row }">
         <q-td >
            <a v-text="row.name" class="text-blue" :href="`/admin/branches/${row.id}`"/>
         </q-td>
        </template>
        <template #body-cell-phone="{ row }">
         <q-td  auto-width>
            <div  v-for="(phone, ind) in row.phone">
            <div v-text="phone" :key="`phone-${ind}`"/>
            </div>
         </q-td>
        </template>
        <template #body-cell-email="{ row }">
         <q-td >
            <div  v-for="(email, ind) in row.email">
            <span v-text="email" :key="`email-${ind}`"/>
            </div>
         </q-td>
        </template>
        <template #body-cell-address="{ row }">
         <q-td >
           <div class="max-w-sm text-ellipsis overflow-hidden">
            {{row.address}}</div>
         </q-td>
        </template>
        <template #body-cell-website="{ row }">
         <q-td >
           {{row.website}}
         </q-td>
        </template>
        <template #body-cell-actions="{ row }">
         <q-td >
          <!-- create 3 button delete and edit -->
          <q-btn icon="mdi-dots-vertical" size="sm" flat round dense color="primary" >
            <q-menu>
              <q-list>
                <q-item clickable @click="deleteBranch(row.id)">
                  <q-item-section avatar>
                    <q-icon name="mdi-delete-outline" color="red" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Delete</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
                <q-list>
                <q-item clickable :href="`/admin/branches/${row.id}`">
                  <q-item-section avatar>
                    <q-icon name="mdi-pencil-outline" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Edit</q-item-label>
                  </q-item-section>
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
<script lang="ts" setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { Inertia } from "@inertiajs/inertia";
const { branches } = defineProps<{ branches: any }>();
const $q= useQuasar()
function deleteBranch(id: number) {
//  create quasar confirmation dialog
$q.dialog({
    title: "Delete Branch",
    message: "Are you sure you want to delete this branch?",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    Inertia.delete(`/admin/branches/${id}`);
  });
}
const header = ref([
  {
    label:"Branch Name",
    field:"name",
    name:"name",
    align:"left",
  },
  {
    label:"Address",
    field:"address",
    name:"address",
    align:"left",
  },
  {
    label:"Phone",
    field:"phone",
    name:"phone",
    align:"left",
  },
  {
    label:"Email",
    field:"email",
    name:"email",
    align:"left",
  },
   {
    label:"Socaial Media",
    field:"website",
    name:"website",
    align:"left",
  },
  {
    label:"Actions",
    field:"actions",
    name:"actions",
    align:"left",
  }
])
</script>
