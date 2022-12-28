<script lang="ts" setup>
import { ref } from "vue";
import Guest from "../../Layouts/Guest.vue";
import { Inertia } from "@inertiajs/inertia";
import { useQuasar } from "quasar";
const application = ref({
  first_name: null,
  last_name: null,
  email: null,
  phone: null,
  address: null,
});
const $q = useQuasar();
const { job } = defineProps<{
  job;
}>();
const form = ref(null);
function onSubmit() {
  if (!form.value.validate()) return;
  Inertia.post(`/job/${job.id}/apply`, application.value, {
    onSuccess: () => {
      $q.notify({
        message: "Application submitted successfully",
        color: "positive",
        position: "top",
      });
    },
  });
}
</script>
<template>
  <Guest>
    <div class="relative">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- application for label -->
        <q-card flat bordered class="q-mb-sm">
          <q-card-section class="q-pa-md">
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Applicant For</p>
            <h3 class="text-xl font-medium leading-6 text-gray-900">{{ job.title }}</h3>
          </q-card-section>
        </q-card>

        <q-form ref="form" @submit.prevent="onSubmit">
          <q-card>
            <q-card-section>
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Applicant Information
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </q-card-section>
            <q-card-section class="q-gutter-md">
              <div class="flex gap-3">
                <q-input
                  outlined
                  v-model="application.first_name"
                  label="First Name"
                  class="flex-1"
                  :rules="[(v) => !!v || 'First Name is required.']"
                />
                <q-input
                  outlined
                  v-model="application.last_name"
                  label="Last Name"
                  class="flex-1"
                  :rules="[(v) => !!v || 'Last Name is required.']"
                />
              </div>
              <div class="flex gap-3">
                <q-input
                  outlined
                  class="flex-1"
                  v-model="application.email"
                  label="Email"
                  type="email"
                  hint="Please use a valid email address for communication.
            "
                />
                <q-input
                  outlined
                  class="flex-1"
                  type="tel"
                  v-model="application.phone"
                  label="Phone"
                  hint="Please use a valid phone number for communication.
            "
                />
              </div>
              <q-input
                type="textarea"
                outlined
                v-model="application.address"
                label="Address"
                hint="Enter your address."
              />
            </q-card-section>
            <q-card-section class="flex justify-between">
              <q-btn
                href="/jobs"
                icon-right="cancel"
                size="lg"
                color="primary"
                label="Cancel"
                width="1000"
                outline
              />
              <q-space />
              <q-btn
                type="submit"
                icon-right="send"
                size="lg"
                color="primary"
                label="Submit"
                width="1000"
                outline
              />
            </q-card-section>
          </q-card>
        </q-form>
      </div>
    </div>
  </Guest>
</template>
