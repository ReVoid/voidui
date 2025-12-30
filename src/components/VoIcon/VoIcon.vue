<script setup lang="ts">
import type { IVoIcon } from './index.ts';
import { computed, getCurrentInstance } from 'vue';

defineOptions({
  inheritAttrs: false,
});

type Component = IVoIcon;

type Props = Component['Props'];

const props = defineProps<Props>();

type Emits = Component['Emits'];

const emit = defineEmits<Emits>();

const tag = computed<'i' | 'button'>(() => {
  const instance = getCurrentInstance();
  const hasClickHandler: boolean = instance?.vnode?.props?.onClick !== undefined;

  return hasClickHandler ? 'button' : 'i';
});

function onClick(e: PointerEvent) {
  e.preventDefault();
  emit('click');
}
</script>

<template>
  <Component :is="tag" @click="onClick">
    <slot name="default" />
  </Component>
</template>

<style scoped lang="scss"></style>
