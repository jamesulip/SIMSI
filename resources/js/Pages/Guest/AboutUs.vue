<template>
  <Guest>
    <div class="relative ">
      <div class="absolute inset-0">
        <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&dl=jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
        <div
          class="absolute inset-0 bg-[#3c75ca] mix-blend-multiply"
          aria-hidden="true"
        ></div>
      </div>
      <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Company Overview
        </h1>
        <p class="mt-6 max-w-3xl text-xl text-white">
          The word SHASO is an acronym which embodies our company’s goals and virtues in
          conceiving the corporate agency. Likewise, the word serves as our guiding
          principle in order to be competitive and make a difference in the overseas
          recruitment industry.
        </p>

        <div class="flex flex-col rounded-2xl bg-white shadow-xl mt-10 max-w-md">
          <div class="flex flex-col rounded-2xl bg-white shadow-xl">
            <div class="relative flex-1 p-6 pb-8 md:px-8">
              <h3 class="text-xl font-medium text-gray-900">SHASO stands for:</h3>
              <p class="mt-4 text-base text-gray-500">
                <table>
                    <tr>
                        <td class="text-h5">S</td>
                        <td>uccess</td>
                    </tr>
                    <tr>
                        <td class="text-h5">H</td>
                        <td>ospitable</td>
                    </tr>
                    <tr>
                        <td class="text-h5">A</td>
                        <td>ggresive</td>
                    </tr>
                    <tr>
                        <td class="text-h5">S</td>
                        <td>incere</td>
                    </tr>
                    <tr>
                        <td class="text-h5">O</td>
                        <td>rganized</td>
                    </tr>
                </table>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6  text-xl text-white bg-[#3c75ca0b] p-10 rounded-md  sm:px-6 lg:px-8">
            <p>A reliable and dynamic land-based recruitment agency, strategically located in the business center of Manila. Shaso International Manpower Services, Inc. is composed of new breed of human resources-consultants that are solely committed to specialize manpower placement delivering only the best among the Filipino workers. The dynamic team is determined to definitely have a competitive advantage in pursuing quality customer service for the complete satisfaction of everyone involved in the business.</p>
<p>Duly recognized by the Department of Labor & Employment and the Philippine Overseas Employment Administration, our business license was granted on January 07, 2011. As such, we are authorized to recruit, process and deploy Filipino workers to reputable companies in as many parts of the world.</p>
<p>Confidence in the versatility and industry of the Filipinos coupled with the desire in assisting individuals to achieve a rewarding overseas career to secure a better future is the foundation of our organization. Moreover, it is our commitment to maintain the high standards of integrity by providing prompt, efficient and effective service both to our valued employers and Filipino workers.</p>
<p>Certainly, we are more than glad to be of great service to all our business partners at all times. After all, they are the main reason for our existence in this business.</p>
        </div>
      </div>
    </div>
    <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Meet our leadership</h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-4">
                <img class="rounded-lg object-cover shadow-lg" :src="person.imageUrl" alt="" />
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3>{{ person.name }}</h3>
                    <p class="text-green-600">{{ person.role }}</p>
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
  </Guest>
</template>
<script lang="ts" setup>
import Guest from "@/Layouts/Guest.vue";
const people = [
  {
    name: 'Ms. Estrlita P. Ignacio',
    role: 'President',
    imageUrl:
      '/images/pres.jpg',
    // bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  {
    name: 'Mr. Mahamed Osman',
    role: 'Director',
    imageUrl:
      '/images/osman.jpg',
    // bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
  },
  // More people...
]
</script>
