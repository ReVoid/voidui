<script setup lang="ts" generic="T extends string | Date, M extends boolean">

const date = defineModel<T>('date', {
  required: false,
  default: undefined,
});
</script>

<template>
  <input v-model="date" type="text" />
</template>
