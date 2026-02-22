<script lang="ts" setup>
import Card from "../shared/Card/Card.vue";
import Table from "../shared/Table/Table.vue";

const products = [
  {
    code: "P001",
    name: "Product 1",
    category: "Electronics",
    quantity: 10,
  },
  {
    code: "P002",
    name: "Product 2",
    category: "Clothing",
    quantity: 20,
  },
  {
    code: "P003",
    name: "Product 3",
    category: "Home & Kitchen",
    quantity: 5,
  },
];
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
