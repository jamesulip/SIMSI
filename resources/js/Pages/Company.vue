<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { ref, toRefs } from "vue";
const props = defineProps<{
  company;
}>();
const {company } = toRefs(props);
const settings = ref(null);
import { useQuasar } from "quasar";
const $q = useQuasar();
function submit() {
    if(!settings?.value.validate()) return;

    Inertia.put(`/admin/company/${company.value.id}`, {
        company_name: company.value.company_name,
        poea: company.value.poea,
    },{
        onSuccess:()=>{
            $q.notify({
                message: "Company settings updated",
                color: "green",
                position: "bottom",
                timeout: 2000,
            });
        }
    });
}
</script>
<template>
  <AppLayout title="Jobs">
  
    <q-page padding>
        <q-form ref="settings" class="max-w-7xl" @submit.prevent="submit()">
            <q-card>
                <q-card-section>
                    <!-- title -->
                    <div class="text-h6">Company Settings</div>
                </q-card-section>
                <qseparator />
                <q-card-section>
                    <q-input
                        v-model="company.company_name"
                        label="Company Name"
                        class="q-mb-md" outlined
                    />
                    <q-input
                        v-model="company.poea"
                        label="Poea"
                        class="q-mb-md" outlined
                    />
                </q-card-section>
                <q-separator />
                <q-card-actions>
                <q-space/>
                    <q-btn type="submit"
                        unelevated
                        icon="mdi-content-save"
                        label="Save"
                        color="green"
                    />
                </q-card-actions>
            </q-card>
        </q-form>
    </q-page>
  </AppLayout>
</template>
