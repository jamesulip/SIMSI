<template>
  <main>
    <div>
      <q-toolbar class="bg-[#2c3847]">
        <!-- hide when mobile -->

        <div class="desktop-only">
          <div class="mx-auto max-w-7xl flex items-center justify-between w-full">
            <q-toolbar-title>
              <img src="/logo.png" class="w-24 mx-5" />
            </q-toolbar-title>
            <div
              class="flex items-center justify-between py-6 md:justify-start md:space-x-10 text-white"
            >
              <Link class="text-lg font-sans font-medium" href="/">Home</Link>
              <Link class="text-lg font-sans font-medium" href="/jobs">Careers</Link>
              <Link class="text-lg font-sans font-medium" href="/about-us">About Us</Link>
              <Link class="text-lg font-sans font-medium" href="/mission"
                >Our Mission</Link
              >
              <Link class="text-lg font-sans font-medium" href="/contact-us"
                >Contact Us</Link
              >
            </div>
          </div>
        </div>
        <!-- snakbar -->
        <q-btn
          class="mobile-only text-white"
          flat
          size="xl"
          @click="menu = !menu"
          round
          dense
          icon="menu"
        >
        </q-btn>
      </q-toolbar>

      <q-dialog full-width v-model="menu">
        <div class="relative">
          <q-card>
            <q-card-section class="flex">
              <img src="/logo.png" class="mx-auto w-24 h-20" />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <q-list>
                <q-item clickable href="/">
                  <q-item-section>Home</q-item-section>
                </q-item>
                <q-item clickable href="/jobs">
                  <q-item-section>Jobs</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section href="/about-us">About Us</q-item-section>
                </q-item>
                <q-item clickable href="/mission">
                  <q-item-section>Our Mission</q-item-section>
                </q-item>
                <q-item clickable href="/contact-us">
                  <q-item-section>Contact Us</q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </q-dialog>
      <slot />

      <footer class="bg-white">
        <div class="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div class="px-5 py-2">
              <a href="/about-us" class="text-base text-gray-500 hover:text-gray-900"
                >About</a
              >
            </div>

            <div class="px-5 py-2">
              <a href="/jobs" class="text-base text-gray-500 hover:text-gray-900">Jobs</a>
            </div>

            <div class="px-5 py-2">
              <a href="/partners" class="text-base text-gray-500 hover:text-gray-900"
                >Partners</a
              >
            </div>
          </nav>
          <div class="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/SIMSI.fbPage"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p class="mt-8 text-center text-base text-gray-400">
            <!-- &copy; 2020 Your Company, Inc. All rights reserved. -->
          </p>
        </div>
      </footer>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
const menu = ref(false);
</script>
