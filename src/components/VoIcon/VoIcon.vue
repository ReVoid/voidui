<script setup lang="ts">
import type { IVoIcon } from './index.ts';

defineOptions({
  inheritAttrs: true,
});

type Component = IVoIcon;

type Props = Component['Props'];

const props = defineProps<Props>();

type Emits = Component['Emits'];

const emit = defineEmits<Emits>();

function onClick(e: PointerEvent) {
  e.preventDefault();
  emit('click');
}
</script>

<template>
  <i @click="onClick">
    <!-- Something is coming! -->
  </i>
</template>

<style scoped lang="scss"></style>
