<script setup lang="ts">
import {
  VoTableRow,
} from '../VoTableRow';
</script>

<template>
  <thead>
    <VoTableRow>
      <slot name="default" />
    </VoTableRow>
  </thead>
</template>
