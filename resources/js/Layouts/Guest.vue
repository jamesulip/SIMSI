<template>
  <main>
    <div class="relative">
      <nav
        class="w-full top-0 right-0 gap-5 justify-between items-center flex p-5 text-xl mx-auto"
      >
        <div class="flex gap-5 text-black">
          <Link href="/">Home</Link>
          <Link href="/jobs">Careers</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </nav>
      <div>
        <slot />
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>
