<script setup lang="ts" generic="T">
import {
  computed,
  useId,
} from 'vue';

import type { IVoInput } from '@/components/input/VoInput/VoInput.types.ts';

import { isNumber } from '@sniptt/guards';

type Component = IVoInput<T>;

type Props = Component['Props'];

const props = withDefaults(defineProps<Component['Props']>(), {
  loading: false,
  disabled: false,
  nonNullable: false,
});

const text = defineModel<Props['text']>('text', {
  required: false,
  default: undefined,
});

const id = useId();

type Meta = {
  type: 'text' | 'number';
};

const meta = computed<Meta>(() => {
  const type = isNumber(text.value) ? 'number' : 'text';

  return {
    type,
  };
});
</script>

<template>
  <label :for="id"> Whatever </label>
  <input :class="props.class" :id="id" :type="meta.type" />
</template>
