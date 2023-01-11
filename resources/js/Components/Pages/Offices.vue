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
  {
    name: "Cagayan",
    address:
      "Unit 2A, 2nd Floor, 52nd Business Center MIRDC Building Justo Gaerlan St., Cagayan De Oro City",
    telephone: ["088-850-0039"],
    fax: ["088-850-0039"],
    email: ["shasocagayan2014@gmail.com"],
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.239451710341!2d124.63967812555398!3d8.476081791564802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d6660adf93%3A0x808f106083549821!2sThe%2052nd%20Business%20Center!5e0!3m2!1sen!2sph!4v1672343387520!5m2!1sen!2sph",
  },
  {
    name: "Davao",
    address: "2ND FLOOR, DOOR 2, BLUE BLDG., RIZAL EXTENSION, DAVAO CITY",
    telephone: ["082-222-1612"],
    fax: ["082-222-1612"],
    email: ["shaso.davao@gmail.com"],
    map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.514387917732!2d125.60718301309736!3d7.066198477034473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d82f60457f3%3A0xe5913b911c6e6503!2sShaso%20International%20Manpower%20Services%20Inc.!5e0!3m2!1sen!2sph!4v1672343641399!5m2!1sen!2sph",
  },
];
</script>
<template>
  <div
    class=" sm:mx-auto py-5 sm:w-full sm:max-w-2xl sm:overflow-hidden sm:rounded-lg shadow-sm"
  >
    <div class="mx-auto max-w-xl px-3 sm:py-6">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900">Our offices</h2>

      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1">
        <div class="bg-white rounded-md p-3" v-for="(branch, index) in branches" :key="index">
          <h3 class="text-lg font-medium text-gray-900">{{ branch.name }}</h3>
          <!-- <iframe
                      :src="branch.map"
                      class="w-full h-[450px] rounded-lg"
                      style="border: 0"
                      allowfullscreen="true"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> -->
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
