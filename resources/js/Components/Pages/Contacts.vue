<script lang="ts" setup>
import Offices from "./Offices.vue";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="isolate bg-white">
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl py-20">
          <div>
            <div class="flex flex-col items-center p-10">
              <div>
                <img :src="'/logo.png'" class="w-auto h-32" />
              </div>
              <h1 class="text-yellow-600 text-h6 font-semibold">
                International Manpower Services Inc.
              </h1>
            </div>
            <div>
              <Offices />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
