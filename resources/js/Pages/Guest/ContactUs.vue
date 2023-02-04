<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import Guest from "@/Layouts/Guest.vue";
const { branches } = defineProps<{
  branches;
}>();
// const branches = [
//   {
//     name: "Main Branch",
//     address:
//       "Units 500 & 501 L & S Bldg., 1414 Roxas Blvd. cor. Sta. Monica St., Ermita, Manila, Philippines",
//     telephone: ["(632) 523-7112", "(632) 523-4472"],
//     fax: ["(632) 525-1198"],
//     email: ["shaso2010@yahoo.com"],
//     map:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15445.655815073189!2d120.9802071!3d14.5754725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47ce5320a40684b6!2sSHASO%20INTERNATIONAL%20MANPOWER%20SERVICES%20INC!5e0!3m2!1sen!2sph!4v1672343580923!5m2!1sen!2sph",
//   },
//   {
//     name: "Cagayan De Oro Branch",
//     address:
//       "Unit 2A, 2nd Floor, 52nd Business Center MIRDC Building Justo Gaerlan St., Cagayan De Oro City",
//     telephone: ["088-850-0039"],
//     fax: ["088-850-0039"],
//     email: ["shasocagayan2014@gmail.com"],
//     map:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.239451710341!2d124.63967812555398!3d8.476081791564802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d6660adf93%3A0x808f106083549821!2sThe%2052nd%20Business%20Center!5e0!3m2!1sen!2sph!4v1672343387520!5m2!1sen!2sph",
//   },
//   {
//     name: "Davao Branch",
//     address: "2ND FLOOR, DOOR 2, BLUE BLDG., RIZAL EXTENSION, DAVAO CITY",
//     telephone: ["082-222-1612"],
//     fax: ["082-222-1612"],
//     email: ["shaso.davao@gmail.com"],
//     map:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.514387917732!2d125.60718301309736!3d7.066198477034473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d82f60457f3%3A0xe5913b911c6e6503!2sShaso%20International%20Manpower%20Services%20Inc.!5e0!3m2!1sen!2sph!4v1672343641399!5m2!1sen!2sph",
//   },
// ];
</script>

<template>
  <Guest>
    <!-- ====== Contact Section Start -->
    <section class="relative  overflow-hidden bg-white py-20 lg:py-[120px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap lg:justify-between">
          <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div class="mb-12 max-w-[570px] lg:mb-0">
              <h2
                class="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
              >
                GET IN TOUCH WITH US
              </h2>

              <div>
                <div v-for="(item, index) in branches" :key="index">
                  <div class="mb-8 flex w-full">
                    <h4 class="text-dark mb-1 text-xl font-bold">{{ item.name }}</h4>
                    <!-- <iframe
                      :src="item.map"
                      class="w-full h-[450px] rounded-lg"
                      style="border: 0"
                      allowfullscreen="true"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe> -->
                    <div class="w-full">
                      <p class="text-body-color text-base">
                        {{ item.address }}
                      </p>
                    </div>
                  </div>
                  <div class="mb-8 flex w-full max-w-[370px]">
                    <div class="w-full">
                      <h4 v-if="item.phone.length >0" class="text-dark mb-1 text-xl font-bold">Telephone No.</h4>
                      <p v-if="item.phone.length >0"
                        class="text-body-color text-base"
                        v-for="(c, index) in item.phone"
                        :key="index"
                      >
                        {{ c }}
                      </p>
                      <h4 v-if="item.email.length >0" class="text-dark mb-1 text-xl font-bold">Email Address</h4>
                      <p v-if="item.email.length >0"
                        class="text-body-color text-base"
                        v-for="(c, index) in item.email"
                        :key="index"
                      >
                        {{ c }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Contact Section End -->
  </Guest>
</template>
