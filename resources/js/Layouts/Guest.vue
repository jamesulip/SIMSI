<template>
  <main>
    <Header />
  </main>
</template>
<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import Header from "../Components/Pages/Header.vue";
const menu = ref(false);
</script>
