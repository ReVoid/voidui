<script setup lang="ts">
import { ref } from 'vue';

import { VoButton } from '@/components/VoButton';

const isDisabled = ref<boolean>(false);

function onClick() {
  console.log('onClick');
}
</script>

<template>
  <article>
    <h2>VoButton</h2>

    <input v-model="isDisabled" type="checkbox" />

    <VoButton @click="onClick">
      Click me
    </VoButton>
  </article>
</template>
