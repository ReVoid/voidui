<script setup lang="ts">
import { computed } from 'vue';

import { type IVoButton } from './VoButton.types.ts';


defineOptions({
  inheritAttrs: false,
});

type Component = IVoButton;

const props = withDefaults(defineProps<Component['Props']>(), {
  disabled: false,
  loading: false,
});

const emit = defineEmits<Component['Emits']>();

const isActive = computed(() => {
  return !props.disabled && !props.loading;
});

function onClick(e: PointerEvent): void {
  e.preventDefault();

  if (!isActive.value) {
    return;
  }

  emit('click');
}
</script>

<template>
  <button
    class="vo-button"
    :class="[
      props.class,
      {
        'disabled': props.disabled,
        'loading': props.loading,
      },
    ]"
    :disabled="props.disabled"
    @click="onClick"
  >
    <slot name="default" />
  </button>
</template>

<style scoped lang="scss">
.vo-button {
  cursor: pointer;
  user-select: none;

  &.disabled {
    pointer-events: none;
  }

  &.loading {
    pointer-events: none;
  }
}
</style>
