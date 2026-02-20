<script lang="ts" setup>
import { Card } from "primevue";
</script>

<template>
  <Card class="bg-zodiac-blue">
    <template #title>
      <slot name="title" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </Card>
</template>
