<script setup lang="ts">
import { onBeforeMount, inject, type Ref } from 'vue';

import { type IVoNotificationBarItem } from './VoNotificationBarItem.types.ts'

type Component = IVoNotificationBarItem;

type Props = Component['Props'];

import { isEqual } from 'lodash-es';

const props = withDefaults(defineProps<Props>(), {
  type: 'Info',
  duration: 5000,
  title: '',
  message: '',
});

const items = inject<Ref<Props[]>>('VoNotificationBar.items')!;

function dismiss() {

}

onBeforeMount(() => {
  items.value.push(props);

  setTimeout(() => {
    items.value = items.value.filter(item => isEqual(item,props));
  }, props.duration)
});
</script>

<template>
  <article class="vo-notification-item">
    <slot name="default">
      <i>
        {{ props.type }}
      </i>

      <h2>
        {{ props.title }}
      </h2>

      <p>
        {{ props.message }}
      </p>

      <button @click="dismiss">
        ╳
      </button>
    </slot>
  </article>
</template>

<style scoped lang="scss">
.vo-notification-item {

}
</style>
