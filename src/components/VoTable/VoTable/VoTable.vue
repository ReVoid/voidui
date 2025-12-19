<script setup lang="ts" generic="TColumns extends Record<string, unknown>">
import {
  type IVoTable,
  type Columns,
  type Rows,
  VoTableHeader,
  VoTableRow,
  VoTableBody,
  VoTableCell,
} from '@/components/VoTable';

type Component = IVoTable<TColumns>;

const props = withDefaults(defineProps<Component['Props']>(), {
  columns: () => ({}) as Columns<TColumns>,
  rows: () => [] as Rows<TColumns>,
  selectable: false,
});

defineSlots<Component['Slots']>();
</script>

<template>
  <table>
    <VoTableHeader>
      <slot name="header">
        <VoTableCell v-for="(column, index) in props.columns" :key="index">
          {{ column.title }}
        </VoTableCell>
      </slot>
    </VoTableHeader>

    <VoTableBody>
      <VoTableRow v-for="(row, index) in props.rows" :key="index">
        <VoTableCell v-for="(_, name) in props.columns" :key="name">
          <slot
            :name="`column[${name as string}]` as keyof Component['Slots']"
            :row="row"
          >
            {{ row[name as keyof typeof row] }}
          </slot>
        </VoTableCell>
      </VoTableRow>
    </VoTableBody>
  </table>
</template>
