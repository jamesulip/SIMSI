
<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";
const el = ref(null)
const isVisible = useElementVisibility(el)

</script>
<template>
    <div ref="el" class="relative h-auto div-anchors" id="about">
        <div class="absolute inset-0 " >
            <div class="absolute inset-0 mix-blend-multiply"  aria-hidden="true"></div>
        </div>
        <div class="relative mx-auto max-w-7xl  flex flex-col px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 class="uppercase mt-4 text-base font-bold  tracking-tight  sm:text-4xl text-center ">
                Shaso International
                Manpower Services Inc.
            </h1>
            <p class="mt-6 max-w-7xl  md:text-xl   text-base md:text-lg text-justify text-gray-500">
                The word SHASO is an acronym which embodies our company’s goals and virtues in
                conceiving the corporate agency. Likewise, the word serves as our guiding
                principle in order to be competitive and make a difference in the overseas
                recruitment industry.
            </p>

            <div class="flex flex-col w-xs  rounded-2xl   mt-10 max-w-md ">
                <div class="flex flex-col rounded-2xl  relative  ">
                    <div class="bg-white absolute top-0 w-full h-full border rounded-lg opacity-75">

                    </div>
                    <div class="relative flex-1 p-6 pb-8 md:px-8">
                        <h3 class="text-sm font-medium text-gray-900">SHASO stands for:</h3>
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
            <div class="mt-6  md:text-xl  p-1 rounded-md  ">
                <p class="text-base md:text-lg text-justify text-gray-500">A reliable and dynamic land-based recruitment agency, strategically located in
                    the business center of Manila. Shaso International Manpower Services, Inc. is composed of new breed
                    of human resources-consultants that are solely committed to specialize manpower placement delivering
                    only the best among the Filipino workers. The dynamic team is determined to definitely have a
                    competitive advantage in pursuing quality customer service for the complete satisfaction of everyone
                    involved in the business.
                    Duly recognized by the Department of Labor & Employment and the Philippine Overseas Employment
                    Administration, our business license was granted on January 07, 2011. As such, we are authorized to
                    recruit, process and deploy Filipino workers to reputable companies in as many parts of the world.
                    Confidence in the versatility and industry of the Filipinos coupled with the desire in assisting
                    individuals to achieve a rewarding overseas career to secure a better future is the foundation of
                    our organization. Moreover, it is our commitment to maintain the high standards of integrity by
                    providing prompt, efficient and effective service both to our valued employers and Filipino workers.
                    Certainly, we are more than glad to be of great service to all our business partners at all times.
                    After all, they are the main reason for our existence in this business.</p>
            </div>
        </div>
    </div>

</template>
