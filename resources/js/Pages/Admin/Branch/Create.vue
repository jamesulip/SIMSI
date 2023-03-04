<script lang="ts" setup>
// import applayout
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { ref } from "vue";
const branch = ref({
  name: "",
  address: "",
  phone: [""],
  email: [""],
  website: "",
  description: "",
});
const form = ref(null);
import { useQuasar } from "quasar";
const $q = useQuasar();
function submit() {
  if (!form.value.validate()) return;

  Inertia.post("/admin/branches", branch.value, {
    onSuccess: () => {
      $q.notify({
        message: "Branch created successfully",
        color: "positive",
        position: "bottom",
      });
    },
  });
}
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding class="flex w-full">
      <!-- create a form for branches -->
      <q-form
        ref="form"
        class="mx-auto max-w-7xl w-full"
        @submit.prevent="submit()"
      >
        <q-card flat bordered class="">
          <q-card-section>
            <div class="text-h6">Add Branch</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input dense outlined v-model="branch.name" label="Name" />
              <q-input
                dense
                type="textarea"
                outlined
                v-model="branch.address"
                label="Address"
              />
              <q-btn
                class="q-mr-sm"
                color="primary"
                label="Add Phone"
                unelevated flat
                icon="add"
                @click="branch.phone.push('')"
              />
              <div class="p-2 bg-gray-100 grid grid-cols-2 gap-3">
                <q-input
                  dense
                  outlined
                  v-for="(phone, ind) in branch.phone"
                  :key="`phone-${ind}`"
                  v-model:model-value="branch.phone[ind]"
                  label="Phone"
                >
                  <template #append>
                    <q-btn
                      unelevated
                      class="q-mr-sm"
                      color="red"
                      icon="delete"
                      flat
                      @click="branch.phone.splice(ind, 1)"
                    />
                  </template>
                </q-input>
              </div>
              <q-btn
                unelevated
                class="q-mr-sm"
                color="primary"
                icon="add"
                label="Add Email" flat
                @click="branch.email.push(null)"
              />
              <div class="p-2 bg-gray-100 grid grid-cols-2 gap-3">
                <q-input
                  dense
                  outlined
                  v-for="(email, ind) in branch.email"
                  v-model:model-value="branch.email[ind]"
                  label="Email"
                >
                  <template #append>
                    <q-btn
                      class="q-mr-sm"
                      color="red"
                      icon="delete"
                      flat
                      @click="branch.email.splice(ind, 1)"
                    />
                  </template>
                </q-input>
              </div>
              <q-input
                dense
                outlined
                v-model="branch.website"
                label="Social Media"
              />
              <q-input
                dense
                outlined
                v-model="branch.office_hours"
                label="Office Hours"
                placeholder="Mon-Sat: 9AM to 7PM Sun: 9AM to 6PM"
              />
            </q-form>
          </q-card-section>
          <!-- card actopm -->
          <q-separator />
          <q-card-actions align="right">
            <q-btn type="submit" color="primary" label="Create" />
          </q-card-actions>
        </q-card>
      </q-form>
    </q-page>
  </AppLayout>
</template>
