<template>
  <q-layout view="lHh Lpr lFf" class="h-screen" container>
    <Contacts />
    <Header />
  </q-layout>
</template>
<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import Header from "../Components/Pages/Header.vue";
import Contacts from "../Components/Pages/Contacts.vue";
const menu = ref(false);
</script>
