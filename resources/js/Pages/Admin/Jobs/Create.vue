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
const { job_types,employers } = defineProps<{
  job_types;
  employers;
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
function setCountry(v){
    job.value.location = employers.find((e)=>e.id==v).country;

}
</script>
<template>
  <AppLayout title="Jobs">
    <q-page padding class="flex w-full">
      <q-form ref="form" class="mx-auto" @submit.prevent="submit">
        <q-card flat bordered class="max-w-7xl">
          <q-card-section>
            <div class="text-h6">Job Details</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-input dense
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
                placeholder="Type Job Description here..."
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
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
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
              <div class="p-2 bg-gray-100 grid grid-cols-1 gap-3">
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
            <div class="grid grid-cols-2 gap-3">
                <q-select dense
              v-model="job.employer_id"
              outlined
              label="Employer"
              :options="employers"
              @update:model-value="setCountry"
              map-options
              emit-value
              :option-value="(b) => b.id"
              :option-label="(v) => v.name"
            />
            <q-select dense
              use-input
              :options="options"
              @filter="filterFn"
              v-model="job.location"
              outlined
              label="Country"
              :loading="isFetching"
              :option-label="(v) => v?.name?.common"
              map-options
              emit-value
              :option-value="(b) => b?.name?.common"
            />
            </div>
          </q-card-section>
          <q-card-section class="flex gap-3">
            <q-input dense
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
              dense
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
            <q-input dense
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
            <q-input dense
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
            <q-file dense outlined v-model="job.images" multiple :rules="[
                (v) => !!v || 'Please upload at least one image',
                (v) => v.length <= 5 || 'Please upload at most 5 images',
                (v)=>v.every((b)=>b.size < 8000000) || 'Please upload images less than 8mb',
                (v)=>v.every((b)=>b.type.includes('image')) || 'Please upload images only',
            ]">
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
