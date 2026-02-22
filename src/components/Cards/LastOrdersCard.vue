<script lang="ts" setup>
import Card from "../shared/Card/Card.vue";
import Table from "../shared/Table/Table.vue";

const orders = [
  {
    id: 1,
    customer: "John Doe",
    total: "$100.00",
    status: "Pending",
  },
  {
    id: 2,
    customer: "Jane Smith",
    total: "$50.00",
    status: "Completed",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    total: "$75.00",
    status: "Cancelled",
  },
];
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-white">Last Orders</h2>
    </template>
    <template #content>
      <Table :table="orders" />
    </template>
  </Card>
</template>
