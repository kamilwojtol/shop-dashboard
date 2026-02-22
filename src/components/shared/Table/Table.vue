<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const props = defineProps<{
  table: { [key: string]: string | number }[];
}>();
</script>

<template>
  <DataTable v-if="props.table.length > 0" :value="props.table">
    <Column v-for="(value, key) in props.table[0]" :key="key" :field="key" :header="key">
      <template #body="slotProps">
        {{ slotProps.data[key as keyof typeof slotProps.data] }}
      </template>
    </Column>
  </DataTable>
</template>
