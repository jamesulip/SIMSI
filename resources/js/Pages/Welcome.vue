<template>
  <Guest>
    <div class="bg-[#f1f5e6]" style="min-height: inherit">
      <div class="h-[40vh] bg-blue-800">
        <div class="mx-auto relative max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div class="bg-blue-800 p-5 rounded-xl shadow-md border-red bottom-1">
            <div class="flex items-center">
              <img class="h-12 mx-auto w-auto sm:h-28" src="/logo.png" alt="Workflow" />
              <h1
                class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-[#f1f5e6]"
              >
                Shaso International Manpower Services
              </h1>
            </div>
            <p class="mt-6 text-lg leading-8 text-[#f1f5e6] sm:text-center">
              " Your reliable source for skilled and versatile Filipino workers,
              delivering top-quality customer service and maintaining the highest
              standards of integrity."
            </p>
            <div class="mt-8 flex gap-x-4 sm:justify-center">
              <Link
                href="/jobs"
                class="inline-block rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
              >
                Apply Now
                <span class="text-green-200" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <svg
              class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#438d21" />
                  <stop offset="1" stop-color="#054881" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Guest>
</template>
<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import Guest from "../Layouts/Guest.vue";
import { computed } from "vue";

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
      description: job.description,
      date: job.date_posted,
      datetime: job.date_expires,
      imageUrl: job.media[0]?.original_url,
    };
  });
});
</script>
