<template>
  <div class="relative bg-white py-16 sm:py-24">
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"
    >
      <div class="relative sm:py-16 lg:py-0">
        <div
          aria-hidden="true"
          class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
        >
          <div
            class="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72"
          />
          <svg
            class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            width="404"
            height="392"
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
              height="392"
              fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
            />
          </svg>
        </div>
        <div
          class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20"
        >
          <!-- Testimonial card-->
         
        </div>
      </div>

      <div id="mission" class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <div
            class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg p-6 sm:p-10 rounded-lg bg-gray-100"
          >
            <h3
              class="mt-2 text-base font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl"
            >
              MISSION STATEMENT
            </h3>
            <p class="mt-3 text-base md:text-lg text-justify text-gray-500">
              To deliver successful business relationships with our
              employer while ensuring global competitiveness of our deploying
              Filipino workers; to organize the business to government
              goals aiming not only for adequate profit and growth but also to
              contribute to the national development and economic prosperity. We
              always adhere in showing respect and hospitality to every
              human being regardless of creed, race, and status;
              Sincerity  and integrity in everything we do;
              Fairness and justice in all our business transactions with the
              employees, business associates and job applicants.
            </p>
            <br>
            <h3
              class=" mt-2 text-base font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl"
            >
              VISION STATEMENT
            </h3>
            <p class="mt-3 text-base md:text-lg text-gray-500 text-justify">
              We should be aggressive in setting the standard for
              excellence, leadership and integrity in the overseas employment
              industry and in all our endeavors so as to provide services that
              meets our employers’ expectations in terms of quality, quantity,
              timeliness and cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <q-separator inset />
  <div class="relative bg-[#2c3e50]  text-white py-16 sm:py-24 px-3" >
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"
    >
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1tqcDEGFvOpDKDOcGbP9RhrO5kn8NutA&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
  </div>
  <div class="relative bg-[#2c3e50] text-white py-16 sm:py-24 px-3" id="requirements">
    <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"
    >


    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];

const people = [
  {
    name: "Ms. Estrlita P. Ignacio",
    role: "President",
    imageUrl: "/images/pres.jpg",
    // bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: "Mr. Mahamed Osman",
    role: "Director",
    imageUrl: "/images/osman.jpg",
    // bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  // More people...
];
</script>
