<script setup lang="ts" generic="T, R">
import { VoSelectOption } from './index.ts';

import type { IVoSelect } from './VoSelect.types.ts';

defineOptions({
  inheritAttrs: false,
});

type Component = IVoSelect<T, R>;

type Props = Component['Props'];

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  selector: (option: T) => option as unknown as R,
});

const selected = defineModel<Props['selected']>('selected', {
  required: false,
  default: undefined,
});

type Emits = Component['Emits'];

const emits = defineEmits<Emits>();

type Slots = Component['Slots'];

const slots = defineSlots<Slots>();

function select(option: T) {
  selected.value = props.selector(option);
}
</script>

<template>
  <select v-model="selected" class="vo-select" :class="props.class" @up="select" multiple>
    <slot name="default">
      <VoSelectOption v-for="(option, index) in props.options" :key="index">
        {{ option }}
      </VoSelectOption>
    </slot>
  </select>
</template>

<style scoped lang="scss">
.vo-select {
}
</style>
