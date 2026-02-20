<script lang="ts" setup>
const props = defineProps<{
  goToDashboard: () => void;
  routeName: string;
}>();
</script>

<template>
  <h3 class="text-white text-xs">
    <span class="cursor-pointer" v-on:click="goToDashboard()">Pages</span> /
    {{ props.routeName[0]?.toUpperCase() + props.routeName.slice(1) }}
  </h3>
</template>
