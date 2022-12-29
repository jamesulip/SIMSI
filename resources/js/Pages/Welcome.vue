<template>
  <Guest>
    <div class="lg:relative">
      <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block xl:inline"> Shaso International </span>
            <span class="block text-green-600 xl:inline">Manpower Services</span>
          </h1>
          <p
            class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            " Your reliable source for skilled and versatile Filipino workers, delivering
            top-quality customer service and maintaining the highest standards of
            integrity."
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-center">
            <div class="rounded-md shadow">
              <a
                href="/jobs"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"
                >Job Openings
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative h-72 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
      >
        <svg
          class="absolute -z-10 top-1/3 right-1/2 -mr-3 lg:left-0 lg:m-0"
          width="404"
          height="392"
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-green-200"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="392"
            fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
          ></rect>
        </svg>
        <div>
          <q-carousel
            class="w-full"
            v-model="slide"
            navigation
            autoplay
            infinite
            animated
          >
            <q-carousel-slide name="1">
              <q-img src="images/IMG_0406.JPG" />
            </q-carousel-slide>

            <q-carousel-slide name="2" img-src="images/IMG_0406.JPG" />
            <q-carousel-slide name="3" img-src="images/OUR_OFFICE.jpg" />
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recent Jobs Posted
          </h2>
        </div>
        <div class="mx-auto mt-12 grid max-w-full gap-5 lg:max-w-none lg:grid-cols-3">
          <div
            v-for="post in computedRecentJobs"
            :key="post.title"
            class="flex flex-col overflow-hidden rounded-lg shadow-lg border"
          >
            <div class="flex-shrink-0" v-if="post.imageUrl">
              <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
              <div class="flex-1">
                <a :href="post.href" class="mt-2 block">
                  <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                  <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="ml-3">
                  <div class="flex space-x-1 text-sm text-gray-500">
                    Date Posted:
                    <time class="font-semibold">{{ post.date }}</time>
                  </div>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    Date Expires:
                    <time class="font-semibold">{{ post.datetime }}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Guest>
</template>
<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import Guest from "../Layouts/Guest.vue";
import { computed, ref } from "vue";
const slide = ref(1);
const { recentJobs } = defineProps<{ recentJobs: any }>();
const computedRecentJobs = computed(() => {
  return recentJobs.map((job: any) => {
    return {
      title: job.title,
      href: `/job/${job.id}`,
      category: {
        name: "Job Hiring",
        href: `/job/${job.id}`,
      },
      description: job.description.replace(/(<([^>]+)>)/gi, "").substring(0, 250) + "...",
      date: job.date_posted,
      datetime: job.date_expires,
      imageUrl: job.media[0]?.original_url,
    };
  });
});
</script>
