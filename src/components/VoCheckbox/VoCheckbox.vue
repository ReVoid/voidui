<script setup lang="ts" generic="T">
// TODO: Implement component

const checked = defineModel<boolean>('checked', {
  required: false,
  default: false,
});
</script>

<template>
  <input v-model="checked" type="checkbox" />
</template>
