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
  errors;
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
      <div class="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- application for label -->
        <q-card flat bordered class="q-mb-sm">
          <q-card-section class="q-pa-md">
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Applicant For</p>
            <h3 class="text-xl font-medium leading-6 text-gray-900">{{ job.title }}</h3>
          </q-card-section>
        </q-card>

        <q-form ref="form" @submit.prevent="onSubmit">
          <q-card flat bordered>
            <q-card-section>
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
            </q-card-section>
            <q-card-section class="grid sm:grid-cols-2 grid-cols-1 gap-1">
              <div class="grid sm:grid-cols-3 grid-cols-1 col-span-2 gap-2">
                <q-input
                  dense
                  outlined
                  v-model="application.first_name"
                  label="First Name"
                  class="flex-1"
                  :rules="[(v) => !!v || 'First Name is required.']"
                />
                <q-input
                  dense
                  outlined
                  v-model="application.middle_name"
                  label="Middle Name"
                  class="flex-1"
                  :rules="[(v) => !!v || 'Middle Name is required.']"
                />
                <q-input
                  dense
                  outlined
                  v-model="application.last_name"
                  label="Last Name"
                  class="flex-1"
                  :rules="[(v) => !!v || 'Last Name is required.']"
                />
              </div>
              <!-- radio button for gender -->
              <div class="col-span-2">
                <q-select
                  v-model="application.gender"
                  :options="['Male', 'Female']"
                  dense
                  outlined
                  label="Gender"
                />
              </div>
              <!-- create input for birthdate -->
              <q-input
                dense
                outlined
                class="col-span-2"
                v-model="application.birthdate"
                label="Birthdate"
                type="text"
                readonly
                hint="Please use a valid birthdate."
                :rules="[(v) => !!v || 'Birthdate is required.']"
                @focus=""
              >
                <template #append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="application.birthdate" />
                    </q-popup-proxy>
                  </q-icon>
                  <!-- pulsing effect -->
                </template>
              </q-input>

              <q-input
                dense
                class="col-span-2"
                type="textarea"
                outlined
                v-model="application.address"
                label="Address"
                hint="Enter your address."
                :rules="[
                  (v) => !!v || 'Address is required.',
                  (v) => v.length >= 5 || 'Address must be more than 10 characters.',
                  (v) => v.length <= 255 || 'Address must be less than 255 characters.',
                ]"
              />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Contact Information
              </h3>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-input
                dense
                outlined
                class="col-span-2"
                v-model="application.email"
                label="Email"
                type="email"
                hint="Please use a valid email address for communication."
              />
              <q-input
                dense
                outlined
                class="col-span-2"
                type="tel"
                v-model="application.phone"
                label="Phone"
                hint="Please use a valid phone number for communication."
              />
            </q-card-section>
            <q-card-section>
              <q-file
                v-model="application.resume"
                :lazy-rules="false"
                label="Attach Resume"
                accept=".pdf,.doc,.docx"
                filled
                outlined
              />
            </q-card-section>
            <q-card-actions v-if="$props.errors">
              <!-- create list of errors -->
              <q-list class="text-red">
                <q-item v-for="error in $props.errors" :key="error">
                  <q-item-section>
                    <q-item-label>{{ error }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-actions>
            <q-separator/>
            <q-card-actions class="flex justify-between">
              <q-btn
                href="/jobs"
                size="lg"
                label="Cancel" unelevated
              />
              <q-space/>
              <q-btn
                type="submit"
                size="lg"
                color="green"
                label="Submit" unelevated
              />
            </q-card-actions>
          </q-card>
        </q-form>
      </div>
    </div>
  </Guest>
</template>
