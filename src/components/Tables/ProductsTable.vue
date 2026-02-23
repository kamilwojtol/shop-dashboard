<script setup lang="ts">
import Table from "../shared/Table/Table.vue";
import Button from "../shared/Button/Button.vue";
import useProducts from "@/composables/useProducts";

const { products } = useProducts();
</script>

<template>
  <Table class="rounded-lg" :table="products" editable />
  <Button
    label="Add Product"
    variant="primary"
    class="mt-4"
    @click="() => console.log('Add Product clicked')"
  />
</template>

<style scoped></style>
