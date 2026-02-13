<script setup lang="ts">
import {
  ref,
} from 'vue';

import {
  VoNotificationBarItem,
  type IVoNotificationBar,
  type IVoNotificationBarItem,
} from '.././index.ts';

// TODO: Design end implement.
const notifications = ref<IVoNotificationBarItem['Props'][]>([]);
</script>

<template>
  <article class="vo-notification-bar">
    <slot name="default">
      <VoNotificationBarItem
        v-for="(item, i) in notifications"
        :key="i"
        :type="item.type"
        :title="item.title"
        :message="item.message"
      />
    </slot>
  </article>
</template>

<style scoped lang="scss">
.vo-notification-bar {
}
</style>
