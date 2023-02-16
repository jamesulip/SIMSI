<script lang="ts" setup>
const menus = [
  {
    name: "Home",
    href: "/",
    current: true,
    icon: "mdi-home-outline",
  },
  {
    name: "Jobs",
    href: "/jobs",
    current: false,
    icon: "mdi-briefcase-outline",
  },
  {
    name: "About",
    href: "/#about",
    current: false,
    icon: "mdi-account-outline",
  },

  {
    name: "Mission",
    href: "/#mission",
    current: false,
    icon: "mdi-earth",
  },
  {
    name: "Branches",
    href: "/#branches",
    current: false,
    icon: "mdi-earth",
  },
];
</script>
<template>
  <header class="!sticky top-0 z-10">
    <nav class="flex bg-[#2c3847]">
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 desktop-only">
        <div class="flex items-center justify-center h-16 ">
          <div class="">
            <div class="flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                v-for="menu in menus"
                :key="menu.name"
                :href="menu.href"
                class="px-3 text-xl py-2 rounded-md font-medium hover:text-gray-100 text-gray-500"
                >{{ menu.name }}</a
              >
            </div>
          </div>
          <!-- for mobile -->
        </div>
      </div>
      <div class="flex justify-between w-full p-3 mobile-only">

        <div class="flex-shrink-1 flex justify-between w-full">
          <q-btn icon="menu" flat text-color="white" size="lg">
            <q-menu fit class="w-full flex flex-col" >
              <q-list>
                <q-item :href="menu.href" v-for="menu in menus" :key="menu.name" clickable>
                  <q-item-section avatar>
                    <q-icon :name="menu.icon" />
                  </q-item-section>
                  <q-item-section>{{ menu.name }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <img src="/logo.png" alt="logo" class="w-14 h-14" />
        </div>
      </div>
    </nav>
  </header>
</template>
