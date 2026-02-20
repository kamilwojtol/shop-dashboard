<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import Nav from "./components/Nav/Nav.vue";
</script>

<template>
  <div class="flex">
    <Nav />
    <main class="px-8 pt-8 bg-midnight w-screen">
      <Header />
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
@import "./assets/css/fonts.css";
</style>
