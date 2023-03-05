<template>
    <div class="relative bg-gray-100 div-anchors px-3 md:h-screen h-auto flex" id="mission">
        <div class="lg:mx-auto m-auto lg:grid lg:max-w-5xl lg:grid-cols-1 grid-rows-2 lg:items-start  lg:px-8">
            <div class=" flex gap-2  p-3">
                <div class="flex ">

                    <!-- mission icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-12 h-12 m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>

                </div>
                <div>
                    <h3 class="mt-2 text-base font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">
                        Our Mission
                    </h3>
                    <p class="mt-3 text-base md:text-lg text-justify text-gray-500">
                        Our mission is to foster successful business partnerships with our employers, while maintaining
                        global competitiveness for our deployed Filipino workers. We are committed to organizing our
                        business around government goals, not only for adequate profit and growth, but also to
                        contribute to the national development and economic prosperity. We value respect and hospitality
                        towards all individuals, regardless of creed, race, or status. Our actions are guided by
                        sincerity and integrity, and we strive for fairness and justice in all our business transactions
                        with our employees, business associates, and job applicants.
                    </p>
                </div>
            </div>
            <div class=" flex gap-2  p-3">
                <div>
                    <h3 class=" mt-2 text-base font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">
                        Our Vision
                    </h3>
                    <p class="mt-3 text-base md:text-lg text-gray-500 text-justify">
                        Our company's vision is to establish ourselves as the leading and most trusted provider of
                        overseas employment services by setting the highest standards of excellence, leadership, and
                        integrity in all our endeavors. We aim to consistently exceed our employers' expectations by
                        delivering high-quality, timely, and cost-effective services that meet their every need.
                    </p>
                </div>
                <div class="flex">

                </div>
            </div>
        </div>
        <!-- <div
      class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"
    >
      <div class="relative sm:py-16 lg:py-0">

      </div>

      <div id="mission" class="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
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
    </div> -->
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
