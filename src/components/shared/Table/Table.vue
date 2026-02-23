<script lang="ts" setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { PencilIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  table: { [key: string]: string | number }[];
  editable?: boolean;
}>();
</script>

<template>
  <DataTable v-if="props.table.length > 0" :value="props.table">
    <Column v-for="(value, key) in props.table[0]" :key="key" :field="key" :header="key">
      <template #body="slotProps">
        <div class="flex items-center">
          <p>{{ slotProps.data[key as keyof typeof slotProps.data] }}</p>
          <PencilIcon v-if="editable" class="w-4 h-4 text-gray-500 ml-2 cursor-pointer" />
        </div>
      </template>
    </Column>
  </DataTable>
</template>
