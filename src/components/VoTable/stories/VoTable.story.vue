<script setup lang="ts">
import { ref } from 'vue';

import { type IVoTable, VoTable } from '@/components/';

type Person = {
  name: string;
  age: number;
};

type Component = IVoTable<Person>;

const columns: Component['Props']['columns'] = {
  name: {
    title: 'Name',
    width: 100,
  },
  age: {
    title: 'Age',
    width: 100,
  },
};

const rows: Component['Props']['rows'] = [
  {
    name: 'John Doe',
    age: 30,
  },
  {
    name: 'Jane Doe',
    age: 28,
  },
];

const selected = ref<string[]>([]);
</script>

<template>
  <article>
    <h2>VoTable.vue</h2>
    <p>
      Selected: {{ selected }}
    </p>
    <VoTable
      v-model:selected="selected"
      :columns="columns"
      :columns-order="['age', 'name']"
      :rows="rows"
      selectable
      :selector="(row) => row.name"
    >
      <template #column[name]="{ row }">
        {{ row.name }}
      </template>

      <template #column[age]="{ row }">
        {{ row.age }} years
      </template>
    </VoTable>
  </article>
</template>
