<script setup lang="ts">
import {
  type IVoNotificationBarItem,
} from './VoNotificationBarItem.types.ts'

type Component = IVoNotificationBarItem;

type Props = Component['Props'];

const props = withDefaults(defineProps<Props>(), {
  type: 'Info',
  duration: 5000,
  title: '',
  message: '',
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
    </slot>
  </article>
</template>

<style scoped lang="scss">
.vo-notification-item {

}
</style>
