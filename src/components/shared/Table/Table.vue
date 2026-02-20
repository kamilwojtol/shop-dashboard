<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const props = defineProps<{
  products: {
    code: string;
    name: string;
    category: string;
    quantity: number;
  }[];
}>();
</script>

<template>
  <DataTable :value="props.products">
    <Column
      v-for="product in props.products"
      :key="product.code"
      :field="product.code"
      :header="product.name"
    />
  </DataTable>
</template>
