<script setup lang="ts">
import { ref } from 'vue';

import { VoInput } from '@/components/VoInput';

const text = ref<string>('');
</script>

<template>
  <VoInput :text="text" />
</template>

<style scoped lang="scss"></style>
