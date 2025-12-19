<script setup lang="ts">
import { VoTableRow } from '@/components';
</script>

<template>
  <thead>
    <VoTableRow>
      <slot name="default" />
    </VoTableRow>
  </thead>
</template>
