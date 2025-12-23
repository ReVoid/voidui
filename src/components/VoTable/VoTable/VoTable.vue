<script setup lang="ts" generic="TColumns, R">
import { computed } from 'vue';

import {
  type IVoTable,
  type Columns,
  type Row,
  type Rows,
  VoTableHeader,
  VoTableRow,
  VoTableBody,
  VoTableCell,
} from '@/components/VoTable';

import { isEqual, pick } from 'lodash-es';

type Component = IVoTable<TColumns, R>;

const props = withDefaults(defineProps<Component['Props']>(), {
  columns: () => ({}) as Columns<TColumns>,
  columnsOrder: () => [],
  rows: () => [] as Rows<TColumns>,
  selectable: false,
  selector: (row: Row<TColumns>) => row as R,
});

const selected = defineModel<R[]>('selected', {
  required: false,
  default: () => [],
});

defineSlots<Component['Slots']>();

function select(row: Row<TColumns>): void {
  const payload: R = props.selector(row);

  const value = selected.value.find((item) => isEqual(item, payload));

  if (value) {
    selected.value = selected.value.filter((item) => !isEqual(item, payload));
  } else {
    selected.value = [...selected.value, payload];
  }
}

function isSelected(row: Row<TColumns>): boolean {
  const payload: R = props.selector(row);
  return selected.value.some((item) => isEqual(item, payload));
}

const columns = computed<Columns<TColumns>>(() => {
  if (!props.columnsOrder.length) {
    return props.columns;
  }

  return pick(props.columns, props.columnsOrder) as unknown as Columns<TColumns>;
});
</script>

<template>
  <table>
    <VoTableHeader>
      <VoTableCell v-if="props.selectable">
        <!-- Just a placeholder for an extra column ;)  -->
      </VoTableCell>

      <slot name="header">
        <VoTableCell v-for="(column, index) in columns" :key="index">
          {{ column.title }}
        </VoTableCell>
      </slot>
    </VoTableHeader>

    <VoTableBody>
      <VoTableRow v-for="(row, index) in props.rows" :key="index">
        <VoTableCell v-if="props.selectable">
          <input :checked="isSelected(row)" type="checkbox" @change="select(row)" />
        </VoTableCell>

        <VoTableCell v-for="(_, name) in columns" :key="name">
          <slot :name="`column[${name as string}]` as keyof Component['Slots']" :row="row">
            {{ row[name as keyof typeof row] }}
          </slot>
        </VoTableCell>
      </VoTableRow>
    </VoTableBody>
  </table>
</template>
