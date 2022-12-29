<template>
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
      <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        <div
          v-for="post in computedRecentJobs"
          :key="post.title"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
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
        <!-- show all jobs link -->
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-1 flex flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <p class="text-sm font-medium text-green-600">
                <Link href="/jobs">View All Jobs</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: {
      name: "Article",
      href: "#",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
</script>
