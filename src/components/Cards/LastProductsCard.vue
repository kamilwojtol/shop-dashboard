<script lang="ts" setup>
import Card from "../shared/Card/Card.vue";
import Table from "../shared/Table/Table.vue";
import useProducts from "@/composables/useProducts";

const { products } = useProducts();
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-white">Last Products</h2>
    </template>
    <template #content>
      <Table :table="products" />
    </template>
  </Card>
</template>
