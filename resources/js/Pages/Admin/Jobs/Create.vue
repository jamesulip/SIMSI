<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { date } from "quasar";
import TiptapEditdor from "@/Components/TiptapEditdor.vue";
import { useFetch } from "@vueuse/core";

const job = ref({
  title: "",
  description: "",
  location: "",
  salary: "",
  show_salary: "",
  skills: [],
  images: [],
});
const { job_types } = defineProps<{
  job_types;
}>();
function newSkills(evt, done) {
  done(evt, "add-unique");
}
const form = ref(null);
function submit() {
  if (!form.value.validate()) return;
  Inertia.post(
    "/admin/jobs",
    {
      ...job.value,
      text_content: job.value.description,
      date_posted: date.formatDate(new Date(), "YYYY-MM-DD"),
      date_expires: date.formatDate(new Date(), "YYYY-MM-DD"),
    },
    {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => {
        job.value = {
          title: "",
          description: "",
          location: "",
          salary: "",
          show_salary: "",
          skills: [],
        };
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
    <q-page padding>
      <q-form ref="form" @submit.prevent="submit">
        <q-card flat bordered class="max-w-7xl">
          <q-card-section>
            <div class="text-h6">Job Details</div>
          </q-card-section>
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
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify'],
                  },
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
                ['viewsource'],
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
          <q-card-section class="q-gutter-md">
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
              max-values="4"
              use-input
              use-chips
              multiple
              @new-value="newSkills"
              v-model="job.skills"
              label="Skills Required"
              outlined
              lazy-rules
              hint="Please separate skills with comma"
            />
            <q-select
              class="flex-1"
              clearable
              v-model="job.job_type_id"
              emit-value
              map-options
              label="Employment Type"
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
          <q-separator />
          <q-card-section>
            <q-file outlined v-model="job.images" multiple>
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn size="lg" @click="$inertia.get(`/admin/jobs`)" color="negative">
              Cancel
            </q-btn>
            <q-space />
            <!-- mdi icon for save -->
            <q-btn
              size="lg"
              icon="mdi-content-save-outline"
              label="Save"
              type="submit"
              color="primary"
            />
          </q-card-actions>
        </q-card>
      </q-form>
    </q-page>
  </AppLayout>
</template>
