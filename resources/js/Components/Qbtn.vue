<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import { defineProps } from "vue";
const props = defineProps({
  href: String,
  active: Boolean,
  classes: String,
});
</script>
<template>
  <q-btn :class="classes">
    <slot />
  </q-btn>
</template>
