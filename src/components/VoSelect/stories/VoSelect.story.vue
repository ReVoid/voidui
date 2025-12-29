<script setup lang="ts">
import { ref } from 'vue';

import { VoSelect, type IVoSelect } from '@/components/VoSelect';

type Person = {
  name: string;
  age: number;
};

type Component = IVoSelect<Person, string>;

const selected = ref<Component['Props']['selected']>();

const options: Person[] = [
  {
    name: 'John Doe',
    age: 30,
  },
  {
    name: 'Jane Doe',
    age: 28,
  },
];
</script>

<template>
  <article>
    <h2>VoSelect</h2>

    <p>Selected: {{ selected }}</p>
    <VoSelect
      v-model:selected="selected"
      :selector="(person) => person.name"
      :options="options"
    />
  </article>
</template>
