<script setup lang="ts">
import Nav from "./components/shared/Nav/Nav.vue";
</script>

<template>
  <div class="flex">
    <Nav />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
@import "./assets/css/fonts.css";
</style>
