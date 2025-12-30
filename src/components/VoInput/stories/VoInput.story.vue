<script setup lang="ts">
import { ref } from 'vue';

import { VoInput } from '@/components/VoInput';

const text = ref<string>(''); // Try to remove the default value ;)
</script>

<template>
  <article>
    <h2>VoInput</h2>
    <VoInput v-model:text="text" non-nullable />
  </article>
</template>
