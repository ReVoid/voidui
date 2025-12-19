<script setup lang="ts" generic="TColumn, TRow">
import { type IDataTable } from '../index.ts';

type Component = IDataTable<TColumn, TRow>;

const props = withDefaults(defineProps<Component['Props']>(), {
  rows: () => [] satisfies TRow[],
});

const slots = defineSlots<Component['Slots']>();
</script>
<template>
  <table></table>
</template>
