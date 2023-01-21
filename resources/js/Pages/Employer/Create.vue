<script lang="ts" setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { useFetch } from "@vueuse/core";
import { ref } from "vue";
const form = ref({
  name: "",
  country: "",
  address: "",
  description: "",
  email: "",
  phone: "",
  website: "",
});

const { data, isFetching } = useFetch(
  "https://restcountries.com/v3.1/all?fields=name"
).json();
const options = ref(data.value);
function filterFn(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    options.value = data.value.filter(
      (v) => v.name.common.toLowerCase().indexOf(needle) > -1
    );
  });
}
const f = ref(null);
function onSubmit() {
  if (!f.value.validate()) return;
  Inertia.post(
    "/admin/employers",
    {
      ...form.value,
    },
    {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => {
        form.value = {
          name: "",
          country: "",
          address: "",
          description: "",
          email: "",
          phone: "",
          website: "",
        };
      },
    }
  );
}
</script>

<template>
  <AppLayout>
    <q-page padding>
      <!-- using qtable list all employers -->
      <div class="max-w-7xl">
        <q-form ref="f" @submit.prevent="onSubmit">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6">Employer Details</div>
            </q-card-section>
            <q-separator />
            <!-- upload avatar -->
            <q-card-section class="flex">
              <q-avatar border size="100px" class="mx-auto">
                <q-icon name="account_circle" />
              </q-avatar>
            </q-card-section>
            <q-card-section class="q-gutter-md">
              <q-input
                v-model="form.name"
                label="Name"
                dense
                outlined
                type="text"
                hint="Enter employer name"
                stack-label
                :rules="[(val) => val.length > 0 || 'Name is required']"
              />
              <q-select
                use-input
                :options="options"
                @filter="filterFn"
                v-model="form.country"
                dense
                outlined
                label="Location"
                :loading="isFetching"
                :option-label="(v) => v?.name?.common"
                map-options
                emit-value
                :option-value="(b) => b?.name?.common"
              />
              <q-input
                v-model="form.address"
                label="Address"
                dense
                outlined
                type="text"
                hint="Enter employer address"
                stack-label
              />
              <q-input
                v-model="form.description"
                label="Company Description"
                dense
                outlined
                type="textarea"
                hint="Enter employer description"
                stack-label
              />
              <div class="flex gap-3 w-full">
                <q-input
                  v-model="form.email"
                  label="Email"
                  dense
                  class="flex-1"
                  outlined
                  type="email"
                  hint="Enter employer email"
                  stack-label
                />
                <q-input
                  v-model="form.phone"
                  label="Phone"
                  dense
                  class="flex-1"
                  outlined
                  type="text"
                  hint="Enter employer phone"
                  stack-label
                />
              </div>
              <q-input
                v-model="form.website"
                label="Website"
                dense
                outlined
                type="text"
                hint="Enter employer website"
                stack-label
              />
            </q-card-section>
            <q-card-actions>
              <q-space />
              <q-btn type="submit" color="primary" label="Submit" />
            </q-card-actions>
          </q-card>
        </q-form>
      </div>
    </q-page>
  </AppLayout>
</template>
