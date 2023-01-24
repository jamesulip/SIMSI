<template>
  <div class="relative bg-white py-16 sm:py-24" id="mission" >
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
          <div class="space-y-12">
            <h2 class="uppercase mt-2 text-base font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">
              Meet our Managers
            </h2>

            <ul role="list" class="space-y-12 flex gap-3">
              <li v-for="person in people" :key="person.name">
                <div
                  class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8  p-12"
                >
                  <div class="">
                    <img
                      class="rounded-lg object-cover shadow-lg"
                      :src="person.imageUrl"
                      alt=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <div class="space-y-4">
                      <div class="space-y-1 text-lg font-medium leading-6">
                        <h3 class="text-base sm:!text-3xl text-center uppercase">
                          {{ person.name }}
                        </h3>
                        <p class="text-green-600 text-center">{{ person.role }}</p>
                      </div>
                      <div class="text-lg">
                        <p class="text-gray-500">{{ person.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
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
      <div >
        <h1 class="text-h6">SHASO INTERNATIONAL MANPOWER SERVICES, INC.</h1>
        <br>

        <h1 class="text-h6">Includes</h1>
        <!-- numbered list -->
        <ol class="list-decimal list-inside text-sm sm:text-h5 leading-relaxed">
          <li>
            Pre-selection of qualified and experienced Filipino professionals
            and workers of good moral character.
          </li>
          <li>
            Evaluation of pre-selected workers through trade testing to
            determine their skills competence.
          </li>
          <li>
            Medical, physical, dental and psychiatric examination of
            pre-selected workers to determine their fitness for the work
            required.
          </li>
          <li>
            Facilitation of the foreign principal's visit to Manila by providing
            him with the facilities necessary for the convenience of his
            business in the Philippines, including an interview space in our
            designated area.
          </li>
          <li>
            Processing of the vital documents of the workers selected by the
            foreign principal for the approval of the Philippine Overseas
            Employment Administration (POEA).
          </li>
          <li>
            Coordination with airline specified by the foreign principal to
            transport selected workers to the overseas job site
          </li>
          <li>
            Orientation of selected workers on the customs, tradition, work
            habits and other important information regarding the country where
            they will be deployed.
          </li>
        </ol>
      </div>
      <div>
        <h1 class="text-base sm:text-h5">
        CHECKLIST REQUIREMENTS FOR VERIFICATION OF SKILLED CATEGORIES
      </h1>
      <br>
        <ol class="list-decimal list-inside text-sm sm:text-h5 leading-relaxed">
          <li>
            Demand Letter/Job Order/Manpower Request indicating the position,
            the number of required workers, and the basic salaries offered.
          </li>
          <li>
            Special Power-of-Attorney issued by the Employer to the licensed
            Philippine recruitment agency (or Recruitment Agreement or Service
            Agreement).
          </li>
          <li>
            Model or Master Employment Contract which stipulates, among others,
            the minimum provisions of employment contracts of land-based workers
            (pls. submit actual employment contract of your
            company/establishment, if there is any).
          </li>
          <li>
            Valid Business License/Commercial Registration Certificate or
            equivalent document with official English translation.
          </li>
          <li>
            Copy of the block visa indicating the categories with the official
            English translation.
          </li>
          <li>
            For Drivers, Individual Employment Contracts and Comprehensive
            Insurance Policy covering the vehicles, third party liability, and
            personal accident benefits of drivers (The insurance policy should
            be in English).
          </li>
          <li>Copy of I.D. or passport of the Employer or the signatory.</li>
          <li>Location Sketch of the Company and the workers accommodation.</li>
          <li>
            Current number of Filipino workers in the company (if there are any)
            in an official letter.
          </li>
          <li>
            Two (2) sets duplicate copies of all above-mentioned documents.
          </li>
        </ol>
      </div>
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
