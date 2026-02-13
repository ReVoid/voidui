<script setup lang="ts">
import { ref, computed, provide } from 'vue';

import { VoNotificationBarItem, } from '../index.ts';
</script>

<template>
  <article class="vo-notification-bar">
    <slot name="default">
      <VoNotificationBarItem />
    </slot>
  </article>
</template>

<style scoped lang="scss">
.vo-notification-bar {
}
</style>
