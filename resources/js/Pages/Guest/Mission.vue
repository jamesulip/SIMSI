<template>
  <Guest>
    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/flagged/photo-1560532886-43f59bee690d?ixlib=rb-4.0.3&dl=grass-america-4YCueV54nxU-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            alt=""
          />
        </div>
      </div>
      <div
        class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8"
      >
        <div class="lg:col-start-2 lg:pl-8">
          <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h3
              class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
            >
              MISSION STATEMENT
            </h3>
            <p class="mt-8 text-lg text-gray-500">
              To deliver <b>successful</b> business relationships with our employer while
              ensuring global competitiveness of our deploying Filipino workers; to
              <b>organize</b> the business to government goals aiming not only for
              adequate profit and growth but also to contribute to the national
              development and economic prosperity. We always adhere in showing respect and
              <b>hospitality</b> to every human being regardless of creed, race, and
              status; <b>Sincerity </b> and <b>integrity</b> in everything we do; Fairness
              and justice in all our business transactions with the employees, business
              associates and job applicants.
            </p>
            <h3
              class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
            >
              VISION STATEMENT
            </h3>
            <p class="mt-8 text-lg text-gray-500">
              We should be <b>aggressive</b> in setting the standard for excellence,
              leadership and integrity in the overseas employment industry and in all our
              endeavors so as to provide services that meets our employers’ expectations
              in terms of quality, quantity, timeliness and cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Guest>
</template>
<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import Guest from "@/Layouts/Guest.vue";
</script>
