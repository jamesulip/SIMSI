<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";

const branches = [
  {
    name: "Main Office",
    address:
      "Units 500 & 501 L & S Bldg., 1414 Roxas Blvd. cor. Sta. Monica St., Ermita, Manila, Philippines",
    telephone: ["(632) 523-7112", "(632) 523-4472"],
    fax: ["(632) 525-1198"],
    email: ["shaso2010@yahoo.com"],
    map:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15445.655815073189!2d120.9802071!3d14.5754725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47ce5320a40684b6!2sSHASO%20INTERNATIONAL%20MANPOWER%20SERVICES%20INC!5e0!3m2!1sen!2sph!4v1672343580923!5m2!1sen!2sph",
  },

];
</script>
<template>
  <div
    class=" sm:mx-auto sm:w-full sm:max-w-2xl sm:overflow-hidden sm:rounded-lg shadow-sm"
  >
    <div class="mx-auto max-w-xl px-3 sm:py-6" id="contact">
      <h2 class="uppercase mt-2 text-base font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl ">Our offices</h2>
      <a href="/contact-us" class="color-blue-400 uppercase mt-2 text-base font-bold leading-8 tracking-tight  sm:text-lg ">See All Branches</a>


      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1">
        <div class="bg-white rounded-md p-3" v-for="(branch, index) in branches" :key="index">
          <a href="" target="_blank" class="text-blue uppercase text-lg font-medium text-gray-900">{{ branch.name }}</a>
          <iframe
                      :src="branch.map"
                      class="w-full h-[450px] rounded-lg"
                      style="border: 0"
                      allowfullscreen="true"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
          <p class="mt-2 text-base text-gray-500">
            <span class="block">{{ branch.address }}</span>
            <span class="block" v-for="(item, index) in branch.telephone" :key="index"
              >Tel: {{ item }}</span
            >
            <span class="block" v-for="(item, index) in branch.email" :key="index"
              >Tel: {{ item }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
