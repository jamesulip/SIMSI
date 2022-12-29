<template>
  <GuestVue>
    <section class="overflow-hidden bg-gray-50 py-12 md:py-20 lg:py-24 h-screen">
      <div class="relative mx-auto my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          class="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
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
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div class="relative">
          <div class="flex w-full justify-center">
            <!-- make it center -->
            <div class="text-h5">
              Application for <b>{{ $page.props.job.title }}</b> was successful submitted
            </div>
          </div>
          <blockquote class="mt-10">
            <div
              class="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900"
            >
              <p>
                Thank you for submitting your application! We are pleased to confirm that
                it was successfully received and is currently being reviewed.
              </p>
              <br />
              <p class="text-sm">
                Please be aware that due to the high volume of applications we receive, it
                may take some time for us to review and process your application. We
                appreciate your patience and encourage you to continue checking your email
                and voicemail for any updates or requests for additional information.
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  </GuestVue>
</template>
<script lang="ts" setup>
import GuestVue from "@/Layouts/Guest.vue";
</script>
