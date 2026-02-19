<script setup lang="ts">
import { RouterLink } from "vue-router";
import Logo from "../Logo/Logo.vue";
import {
  ChartBarIcon,
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
  WrenchIcon,
} from "@heroicons/vue/20/solid";
import { ShoppingBagIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <div class="nav flex flex-col bg-midnight h-screen">
    <div class="flex items-center py-4 justify-center my-4">
      <RouterLink to="/dashboard">
        <Logo />
      </RouterLink>
    </div>
    <nav class="border-t border-zodiac-blue pl-8 pt-8">
      <ul class="flex flex-col gap-4">
        <RouterLink to="/dashboard" active-class="font-bold">
          <div class="flex flex-row items-center">
            <HomeIcon class="w-5 h-5 inline-block mr-4" />
            <li class="text-lg">Dashboard</li>
          </div>
        </RouterLink>
        <RouterLink to="/products" active-class="font-bold">
          <div class="flex flex-row items-center">
            <ShoppingBagIcon class="w-5 h-5 inline-block mr-4" />
            <li class="text-lg">Products</li>
          </div>
        </RouterLink>
        <RouterLink to="/orders" active-class="font-bold">
          <div class="flex flex-row items-center">
            <ShoppingCartIcon class="w-5 h-5 inline-block mr-4" />
            <li class="text-lg">Orders</li>
          </div>
        </RouterLink>
        <RouterLink to="/customers" active-class="font-bold">
          <div class="flex flex-row items-center">
            <UserIcon class="w-5 h-5 inline-block mr-4" />
            <li class="text-lg">Customers</li>
          </div>
        </RouterLink>
        <RouterLink to="/analytics" active-class="font-bold">
          <div class="flex flex-row items-center">
            <ChartBarIcon class="w-5 h-5 inline-block mr-4" />
            <li class="text-lg">Analytics</li>
          </div>
        </RouterLink>
        <RouterLink to="/settings" active-class="font-bold">
          <div class="flex flex-row items-center">
            <WrenchIcon class="w-5 h-5 inline-block mr-4" />
            <li class="text-lg">Settings</li>
          </div>
        </RouterLink>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  width: 320px;
}
</style>
