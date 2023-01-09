<script lang="ts" setup>
const menus = [
  {
    name: "Home",
    href: "#home",
    current: true,
    icon: "mdi-home-outline",
  },
  {
    name: "Jobs",
    href: "#jobs",
    current: false,
    icon: "mdi-briefcase-outline",
  },
  {
    name: "About",
    href: "#about",
    current: false,
    icon: "mdi-account-outline",
  },
  {
    name: "Contact",
    href: "#contact",
    current: false,
    icon: "mdi-email-outline",
  },
  {
    name: "Mission",
    href: "#mission",
    current: false,
    icon: "mdi-earth",
  },
];
</script>
<template>
  <header>
    <nav class="flex">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 desktop-only">
        <div class="flex items-center justify-between h-16">
          <!--create  tailwind navbar center maxwidth max-w-7xl
            for Home, Jobs, About, Contact and Mission
            -->
          <div class="flex items center">
            <div class="flex-shrink-0 self-center">
              <img class="h-12 w-auto" src="/logo.png" alt="Workflow" />
            </div>
            <div class="">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  v-for="menu in menus"
                  :key="menu.name"
                  :href="menu.href"
                  class="px-3 text-xl py-2 rounded-md font-medium text-gray-500 hover:text-gray-900"
                  >{{ menu.name }}</a
                >
              </div>
            </div>
          </div>
          <!-- for mobile -->
        </div>
      </div>
      <div class="flex justify-between w-full p-3 mobile-only">
        <div class="flex-shrink-1 self-center">
          <img
            class="block lg:hidden h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
            alt="Workflow"
          />
        </div>
        <div class="flex-shrink-1">
          <q-btn icon="menu" flat text-color="white" size="lg">
            <q-menu fit class="w-full">
              <q-list>
                <q-item v-for="menu in menus" :key="menu.name" clickable>
                  <q-item-section avatar>
                    <q-icon :name="menu.icon" />
                  </q-item-section>
                  <q-item-section>{{ menu.name }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </nav>
  </header>
</template>
