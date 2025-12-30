<script setup lang="ts">
import { VoIcon } from '@/components/VoIcon';

function onClick() {
  console.log('onClick');
}
</script>

<template>
  <article>
    <h2>VoIcon</h2>
    <VoIcon @click="onClick">
      🔥
    </VoIcon>
  </article>
</template>

<style scoped lang="scss"></style>
