<script lang="ts" setup>
import { ref, Suspense } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
const leftDrawerOpen = ref(true);
const show = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-green text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/logo.png" />
          </q-avatar>
        </q-toolbar-title>
        <q-btn-dropdown flat label="Account Settings">
          <div class="row no-wrap q-pa-md">
            <div class="flex flex-col">
              <q-avatar size="72px">
                <q-img :src="$page.props.user.profile_photo_url" />
              </q-avatar>
              <div class="text-subtitle1 q-mt-md q-mb-xs uppercase">
                {{ $page.props.user.name }}
              </div>
              <q-btn
                @click="$inertia.post('/logout')"
                color="primary"
                label="Logout"
              />
            </div>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer bordered v-model="leftDrawerOpen" side="left" behavior="desktop">
      <q-list separator>
        <q-item clickable href="/dashboard">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="mdi-view-dashboard-outline" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-expansion-item
          :default-opened="true"
          icon="mdi-account-search-outline"
          label="Posting"
          expand-icon-class="text-primary"
        >
          <q-item clickable @click="$inertia.get(`/admin/jobs`)">
            <q-item-section avatar>
              <q-avatar>
                <q-icon name="list" />
              </q-avatar>
            </q-item-section>
            <q-item-section>Jobs</q-item-section>
          </q-item>

          <q-item @click="$inertia.get(`/admin/jobs/create`)" clickable>
            <q-item-section avatar>
              <q-avatar>
                <q-icon name="mdi-plus" />
              </q-avatar>
            </q-item-section>
            <q-item-section>Post Job</q-item-section>
          </q-item>
        </q-expansion-item>
        <q-item clickable @click="$inertia.get('/admin/employers')">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="mdi-account-cog-outline" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Employers</q-item-section>
        </q-item>
        <q-item clickable @click="$inertia.get('/admin/user-management')">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="mdi-account-cog-outline" />
            </q-avatar>
          </q-item-section>
          <q-item-section>User Management</q-item-section>
        </q-item>
        <q-item clickable @click="$inertia.get('/admin/branches')">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="mdi-account-cog-outline" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Branch Management</q-item-section>
        </q-item>
        <q-item clickable @click="$inertia.get('/admin/company')">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="mdi-cog-outline" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Company Settings</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
        <slot />
    </q-page-container>
  </q-layout>
</template>
