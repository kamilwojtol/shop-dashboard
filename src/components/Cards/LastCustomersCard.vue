<script lang="ts" setup>
import Card from "../shared/Card/Card.vue";
import Table from "../shared/Table/Table.vue";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@gmail.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@gmail.com",
  },
];
</script>

<template>
  <Card>
    <template #title>
      <h2 class="text-white">Last Customers</h2>
    </template>
    <template #content>
      <Table :table="customers" />
    </template>
  </Card>
</template>
