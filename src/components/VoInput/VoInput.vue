<script setup lang="ts" generic="T">
import { computed, useId } from 'vue';

import { isNumber } from '@sniptt/guards';
import type { IVoInput } from '@/components/VoInput/VoInput.types.ts';

type Component = IVoInput<T>;

type Props = Component['Props'];

const props = defineProps<Component['Props']>()
const text = defineModel<Props['text']>();

type Meta = {
  type: 'text' | 'number';
};

const meta = computed<Meta>(() => {
  const type = isNumber(text.value) ? 'number' : 'text';

  return {
    type,
  };
});

const id = useId();
</script>

<template>
  <label :for="id"> Whatever </label>
  <input :type="meta.type" :id="id" />
</template>
