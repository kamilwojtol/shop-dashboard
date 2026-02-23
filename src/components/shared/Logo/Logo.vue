<script setup lang="ts">
import img from "@/assets/img/logo.svg";

const props = defineProps<{
  small?: boolean;
}>();
</script>

<template>
  <img :src="img" alt="logo" :class="props.small ? 'w-8 h-8' : 'w-12 h-12'" />
</template>
