<script setup lang="ts">
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
</script>

<template>
  <article>
    <h2>VoTable.vue</h2>
    <VoTable :columns="columns" :rows="rows">
      <template #column[name]="{ row }">
        {{ row.name }}
      </template>

      <template #column[age]="{ row }">
        {{ row.age }} years
      </template>
    </VoTable>
  </article>
</template>
