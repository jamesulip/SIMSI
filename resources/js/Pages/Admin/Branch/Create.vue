<script lang="ts" setup>
// import applayout
import AppLayout from "@/Layouts/AppLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { ref } from "vue";
;

const branch = ref({
    name: "",
    address: "",
    phone: [""],
    email: [""],
    website: "",
    description: "",
})
const form = ref(null)
function submit(){
   if(!form.value.validate())
       return
    
    Inertia.post('/admin/branches', branch.value)
}
</script>
<template>
    <AppLayout title="Jobs">
        <q-page padding class="flex w-full">
            <!-- create a form for branches -->
            <q-form ref="form" class="mx-auto max-w-xl w-full" @submit.prevent="submit()">
                <q-card flat bordered class="">
                    <q-card-section>
                        <div class="text-h6">Branch Details</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section>
                        <q-form class="q-gutter-md">
                          <q-input dense outlined v-model="branch.name" label="Name" />
                            <q-input dense type="textarea" outlined v-model="branch.address" label="Address" />
                            <q-btn
                                class="q-mr-sm"
                                color="primary"
                                label="Add Phone" unelevated
                                icon="add"
                                @click="branch.phone.push('')"
                            />
                            <div class="p-2 bg-gray-100 grid grid-cols-2 gap-3">
                            <q-input dense outlined v-for="(phone,ind) in branch.phone" :key="`phone-${ind}`" v-model:model-value="branch.phone[ind]" label="Phone" >
                                <template #append>
                                    <q-btn unelevated
                                        class="q-mr-sm"
                                        color="red"
                                        icon="delete" flat
                                        @click="branch.phone.splice(ind,1)"
                                    />
                                </template>
                            </q-input>
                            </div>
                            <q-btn
                            unelevated
                                class="q-mr-sm"
                                color="primary"
                                icon="add"
                                label="Add Email"  
                                @click="branch.email.push(null)"
                            />
                            <div class="p-2 bg-gray-100 grid grid-cols-2 gap-3">
                                <q-input 
                                 dense outlined v-for="(email,ind) in branch.email" v-model:model-value="branch.email[ind]" label="Email" >
                                <template #append>
                                    <q-btn
                                        class="q-mr-sm"
                                        color="red"
                                        icon="delete" flat
                                        @click="branch.email.splice(ind,1)"
                                    />
                                </template>
                                </q-input>
                            </div>
                            <q-input dense outlined v-model="branch.website" label="Website" />
                            <q-input dense outlined v-model="branch.description" label="Description" />
                        </q-form>
                    </q-card-section>
                    <!-- card actopm -->
                    <q-separator />
                    <q-card-actions align="right">
                        <q-btn type="submit" color="primary" label="Update" />
                    </q-card-actions>
                </q-card>
                </q-form>
        </q-page>
    </AppLayout>
</template>
