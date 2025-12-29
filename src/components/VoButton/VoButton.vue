<script setup lang="ts">
import { computed } from 'vue';

import { useLink, useRouter } from 'vue-router';

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

type Tag = keyof Pick<HTMLElementTagNameMap, 'button' | 'a'>;

const tag = computed<Tag>(() => {
  return props.to ? 'a' : 'button';
});

const navigation = computed(() => {
  if (props.to) {
    const router = useRouter();

    return {
      href: router.resolve(props.to).href,
    };
  }

  return {};
});

function onClick(e: PointerEvent): void {
  e.preventDefault();

  if (!isActive.value) {
    return;
  }

  if (props.to) {
    useLink({
      to: props.to,
    }).navigate();
  }

  emit('click');
}
</script>

<template>
  <Component
    :is="tag"
    class="vo-button"
    :class="[
      props.class,
      {
        disabled: props.disabled,
        loading: props.loading,
      },
    ]"
    :href="navigation.href"
    :disabled="props.disabled"
    @click="onClick"
  >
    <slot name="default" />
  </Component>
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
