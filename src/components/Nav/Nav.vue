<script setup lang="ts">
import { RouterLink } from "vue-router";
import Logo from "../shared/Logo/Logo.vue";
import {
  ArrowRightEndOnRectangleIcon,
  ChartBarIcon,
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
  WrenchIcon,
} from "@heroicons/vue/20/solid";
import { ShoppingBagIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";

const compactNav = ref(false);
</script>

<template>
  <div class="nav flex flex-col bg-zodiac-blue h-screen" :class="{ 'compact-nav': compactNav }">
    <div class="flex items-center py-4 justify-center my-4">
      <RouterLink to="/dashboard">
        <Logo :small="compactNav" />
      </RouterLink>
    </div>
    <nav class="mb-auto border-t border-zodiac-blue pl-8 pt-8">
      <ul class="flex flex-col gap-4">
        <RouterLink to="/dashboard" active-class="font-bold">
          <div class="flex flex-row items-center">
            <HomeIcon
              class="text-white w-5 h-5 inline-block mr-4 icon"
              :class="compactNav ? 'w-6 h-6' : 'w-5 h-5'"
            />
            <li class="text-white text-lg nav-label" :class="{ 'label-compact': compactNav }">
              Dashboard
            </li>
          </div>
        </RouterLink>
        <RouterLink to="/products" active-class="font-bold">
          <div class="flex flex-row items-center">
            <ShoppingBagIcon
              class="text-white w-5 h-5 inline-block mr-4 icon"
              :class="compactNav ? 'w-6 h-6' : 'w-5 h-5'"
            />
            <li class="text-white text-lg nav-label" :class="{ 'label-compact': compactNav }">
              Products
            </li>
          </div>
        </RouterLink>
        <RouterLink to="/orders" active-class="font-bold">
          <div class="flex flex-row items-center">
            <ShoppingCartIcon
              class="text-white w-5 h-5 inline-block mr-4 icon"
              :class="compactNav ? 'w-6 h-6' : 'w-5 h-5'"
            />
            <li class="text-white text-lg nav-label" :class="{ 'label-compact': compactNav }">
              Orders
            </li>
          </div>
        </RouterLink>
        <RouterLink to="/customers" active-class="font-bold">
          <div class="flex flex-row items-center">
            <UserIcon
              class="text-white w-5 h-5 inline-block mr-4 icon"
              :class="compactNav ? 'w-6 h-6' : 'w-5 h-5'"
            />
            <li class="text-white text-lg nav-label" :class="{ 'label-compact': compactNav }">
              Customers
            </li>
          </div>
        </RouterLink>
        <RouterLink to="/analytics" active-class="font-bold">
          <div class="flex flex-row items-center">
            <ChartBarIcon
              class="text-white w-5 h-5 inline-block mr-4 icon"
              :class="compactNav ? 'w-6 h-6' : 'w-5 h-5'"
            />
            <li class="text-white text-lg nav-label" :class="{ 'label-compact': compactNav }">
              Analytics
            </li>
          </div>
        </RouterLink>
        <RouterLink to="/settings" active-class="font-bold">
          <div class="flex flex-row items-center">
            <WrenchIcon
              class="text-white inline-block mr-4 icon"
              :class="compactNav ? 'w-6 h-6' : 'w-5 h-5'"
            />
            <li class="text-white text-lg nav-label" :class="{ 'label-compact': compactNav }">
              Settings
            </li>
          </div>
        </RouterLink>
      </ul>
    </nav>
    <div class="mb-8 flex flex-row justify-center items-center w-full">
      <button class="cursor-pointer" @click="compactNav = !compactNav">
        <ArrowRightEndOnRectangleIcon class="text-white w-8 h-8 inline-block" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.nav {
  width: 320px;
  position: relative;
  animation: fadeIn 0.4s ease-in-out;
  transition: width 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.compact-nav {
  width: 80px;
  position: relative;
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.nav .icon {
  transition:
    transform 200ms ease,
    width 200ms ease,
    height 200ms ease;
}

.nav-label {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  max-width: 240px;
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    max-width 250ms ease,
    margin 180ms ease;
  opacity: 1;
}

.label-compact {
  opacity: 0;
  transform: translateX(-6px);
  max-width: 0;
  margin: 0;
  pointer-events: none;
}
</style>
