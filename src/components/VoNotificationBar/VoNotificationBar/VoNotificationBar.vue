<script setup lang="ts">
import { ref, computed, provide } from 'vue';

import { VoNotificationBarItem, type IVoNotificationBarItem } from '../VoNotificationBarItem';

import { type IVoNotificationBar } from './VoNotificationBar.types.ts';

import { useList } from '@/submodules/voiduse/src/composables';

type Component = IVoNotificationBar;

type Props = Component['Props'];

const props = defineProps<Props>();

const { items } = useList<IVoNotificationBarItem['Props']>();
</script>

<template>
  <article class="vo-notification-bar">
    <slot name="default">
      <VoNotificationBarItem
        v-for="(item, i) in items"
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
