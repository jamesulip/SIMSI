<template>
  <q-layout view="lHh Lpr lFf" class="h-screen" container>
    <Header />
    <slot />
  </q-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Header from "../Components/Pages/Header.vue";
</script>
