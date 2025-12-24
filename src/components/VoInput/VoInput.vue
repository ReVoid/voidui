<script
  setup
  lang="ts"
  generic="
    T extends string | number
  "
>
import { computed, useId } from 'vue';

import { isNumber } from '@sniptt/guards';

type Props = {
  nonNullable?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  nonNullable: false,
});

const text = defineModel<T>('text', {
  required: false,
  default: undefined,
});

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
  <label :for="id">
    Whatever
  </label>
  <input v-model="text" :type="meta.type" :id="id" />
</template>
