<script setup lang="ts" generic="T extends string | Date, M extends boolean">
const date = defineModel<T>('date');

const year = defineModel<number>('year');

const month = defineModel<number>('month');

const day = defineModel<number>('day');

const hour = defineModel<number>('hour');

const second = defineModel<number>('second');
</script>

<template>
  <input v-model="date" type="text" />
</template>
