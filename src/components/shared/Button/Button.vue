<script lang="ts" setup>
import { Button } from "primevue";

const props = defineProps<{
  label: string;
  variant?: "primary" | "secondary";
}>();
</script>

<template>
  <Button
    :label="props.label"
    :class="{
      'p-button-primary': props.variant === 'primary',
      'p-button-secondary': props.variant === 'secondary',
    }"
  />
</template>

<style scoped></style>
