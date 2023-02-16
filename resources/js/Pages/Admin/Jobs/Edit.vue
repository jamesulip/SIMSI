<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { date, useQuasar } from "quasar";
import { useFetch } from "@vueuse/core";
const $q = useQuasar();
const { job, job_types } = defineProps<{
  job_types;
  job;
  employers;
}>();
const saving = ref(false);
function newSkills(evt, done) {
  done(evt, "add-unique");
}
function update() {
  Inertia.post(
    `/admin/jobs/${job.id}/update`,
    {
      ...job,
      date_posted: date.formatDate(job.date_posted, "YYYY-MM-DD"),
      date_expires: date.formatDate(job.date_expires, "YYYY-MM-DD"),
    },
    {
      preserveScroll: true,
      onStart: () => {
        saving.value = true;
        $q.notify({
          group: "my-group",
          message: "Updating job...",
          color: "primary",
          position: "bottom",
        });
      },
      onSuccess: () => {
        saving.value = false;
        $q.notify({
          group: "my-group",
          message: "Job updated successfully",
          color: "positive",
          position: "bottom",
          timeout: 2000,
        });
      },
    }
  );
}

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
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding class="flex w-full">
      <form class="mx-auto" @submit.prevent="update">
        <q-card flat bordered class="max-w-7xl">
          <q-card-actions class="flex w-full">
            <div class="text-h6">Job Details</div>
            <q-toggle :true-value="1" :false-value="0" label="Active" v-model="job.active" />
          </q-card-actions>
          <q-separator />
          <q-card-section>
            <q-input
              v-model="job.title"
              label="Title"
              outlined
              lazy-rules
              :rules="[(val) => !!val || 'Please type something']"
            />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-editor
              v-model:model-value="job.description"
              :toolbar="[
                [
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    options: ['left', 'center', 'right', 'justify'],
                  },
                ],
                ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                ['token', 'hr', 'link', 'custom_btn'],
                ['print', 'fullscreen'],
                [
                  {
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                  },
                  {
                    label: $q.lang.editor.fontSize,
                    icon: $q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'size-1',
                      'size-2',
                      'size-3',
                      'size-4',
                      'size-5',
                      'size-6',
                      'size-7',
                    ],
                  },
                  {
                    label: $q.lang.editor.defaultFont,
                    icon: $q.iconSet.editor.font,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'default_font',
                      'arial',
                      'arial_black',
                      'comic_sans',
                      'courier_new',
                      'impact',
                      'lucida_grande',
                      'times_new_roman',
                      'verdana',
                    ],
                  },
                  'removeFormat',
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                ['undo', 'redo'],
              ]"
              :fonts="{
                arial: 'Arial',
                arial_black: 'Arial Black',
                comic_sans: 'Comic Sans MS',
                courier_new: 'Courier New',
                impact: 'Impact',
                lucida_grande: 'Lucida Grande',
                times_new_roman: 'Times New Roman',
                verdana: 'Verdana',
              }"
              label="Description"
              outlined
              lazy-rules
              :rules="[(val) => !!val || 'Please type something']"
            />
          </q-card-section>
          <q-separator/>
          <q-card-section class="q-gutter-sm">

            <q-btn
                class="q-mr-sm"
                color="primary" flat
                label="Qualifications"
                unelevated
                icon="add"
                @click="job.skills.push('')"
              />
              <div class="p-2 bg-gray-50 grid grid-cols-1 gap-3">
                <q-input dense
                type="textarea"
                  outlined rows="2"
                  v-for="(phone, ind) in job.skills"
                  :key="`phone-${ind}`"
                  v-model:model-value="job.skills[ind]"
                  label="Qualifications" :rules="[(b)=> !!b || 'Please type something',(b)=> b.length > 2 || 'Please type something']"
                >
                  <template #append>
                    <q-btn
                      unelevated
                      class="q-mr-sm"
                      color="red"
                      icon="delete"
                      flat
                      @click="job.skills.splice(ind, 1)"
                    />
                  </template>
                </q-input>
              </div>
          </q-card-section>
          <q-separator/>
          <q-card-section class="q-gutter-md">
            <q-select
              v-model="job.employer_id"
              outlined
              label="Employer"
              :options="employers"
              map-options
              emit-value
              :option-value="(b) => b.id"
              :option-label="(v) => v.name"
            />
            <q-select
              use-input
              :options="options"
              @filter="filterFn"
              v-model="job.location"
              outlined
              label="Location"
              :loading="isFetching"
              :option-label="(v) => v?.name?.common"
              map-options
              emit-value
              :option-value="(b) => b?.name?.common"
            />
          </q-card-section>
          <q-card-section class="flex gap-3">
            <q-input
              prefix="Php"
              v-model="job.salary"
              label="Salary"
              type="number"
              class="w-1/2"
              outlined
              hint="You can leave this field empty if you don't want to show salary"
              lazy-rules
            />
          </q-card-section>
          <q-card-section class="flex gap-3">

            <q-select
              class="flex-1"
              clearable
              v-model="job.job_type_id"
              emit-value
              map-options
              label="Employment  Type"
              outlined
              :options="job_types"
              lazy-rules
              option-value="id"
              option-label="name"
            />
          </q-card-section>
          <q-card-section class="flex gap-3">
            <q-input
              class="flex-1"
              v-model="job.date_posted"
              label="Date Posted"
              outlined
              lazy-rules
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date mask="YYYY-MM-DD" v-model="job.date_posted">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              class="flex-1"
              v-model="job.date_expires"
              label="Date Expires"
              outlined
              lazy-rules
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date v-model="job.date_expires" mask="YYYY-MM-DD">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>
          <q-card-section>
            <!-- list of media images -->
            <q-file outlined v-model="job.images" multiple>
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <br />
            <div class="q-col-gutter-md row items-start">
              <div class="col-3" v-for="image in job.media" :key="image.id">
                <q-img :src="image.original_url" no-native-menu>
                  <q-btn
                    class="absolute all-pointer-events"
                    icon="close"
                    flat
                    color="red"
                    style="top: 8px; left: 8px"
                    @click="$inertia.delete(`/admin/jobs/${job.id}/media/${image.id}`)"
                  >
                  </q-btn>
                </q-img>
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn unelevated size="sm" @click="$inertia.get(`/admin/jobs`)" color="negative">
              Cancel
            </q-btn>

            <q-btn unelevated size="sm" icon="delete" @click="$inertia.delete(`/admin/jobs/${job.id}`)" color="negative">
              Delete
            </q-btn>
            <q-space />
            <q-btn unelevated
              label="Save"
              type="submit"
              color="primary"
              size="sm"
              icon="mdi-content-save-outline"
            />
          </q-card-actions>
        </q-card>
      </form>
    </q-page>
  </AppLayout>
</template>
