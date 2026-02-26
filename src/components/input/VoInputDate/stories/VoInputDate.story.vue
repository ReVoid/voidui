<script setup lang="ts">
import { ref } from 'vue';

import { VoInputDate } from '@/components/';

const date = ref<Date>(new Date());
</script>

<template>
  <article>
    <h2>
      VoInputDate
    </h2>
    <VoInputDate v-model:date="date" />
    <p>
      date: {{ date }}
    </p>
  </article>
</template>
