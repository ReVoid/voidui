<script setup lang="ts" generic="TColumns extends Record<string, unknown>, R = TColumns">
import { computed } from 'vue';

import {
  type IVoTable,
  type Columns,
  type ColumnsOrder,
  type RowsOrder,
  VoTableHeader,
  VoTableRow,
  VoTableBody,
  VoTableCell,
  VoTablePlaceholder,
} from '../index';

import { isEqual, pick, orderBy, xorWith } from 'lodash-es';

import { isArray } from '@sniptt/guards';

type Component = IVoTable<TColumns, R>;

const props = withDefaults(defineProps<Component['Props']>(), {
  columns: () => ({}) as Columns<TColumns>,
  columnsOrder: () => [] as ColumnsOrder<TColumns>,
  rows: () => [] as TColumns[],
  rowsOrder: () => [] as unknown as RowsOrder<TColumns>,
  selectable: false,
  selector: (row: TColumns) => row as unknown as R,
  loading: false,
});

const selected = defineModel<Component['Models']['selected']>('selected', {
  required: false,
  default: () => [],
});

defineEmits<Component['Emits']>();

defineSlots<Component['Slots']>();

// TODO: Implement column visibility
const columns = computed<Columns<TColumns>>(() => {
  if (!props.columnsOrder.length) {
    return props.columns;
  }

  return pick(props.columns, props.columnsOrder) as unknown as Columns<TColumns>; // TODO: Get rid of as
});

const rows = computed<typeof props.rows>(() => {
  type Orders = {
    names: string[];
    directions: string[];
  };

  const ORDERS_BLANK: Orders = {
    names: [],
    directions: [],
  };

  const orders = props.rowsOrder.reduce((accum, value) => {
    const [name, direction] = value.split(':');

    if (!name || !direction) {
      return accum;
    }

    // TODO: Remove duplicates
    return {
      names: [...accum.names, name],
      directions: [...accum.directions, direction],
    };
  }, ORDERS_BLANK);

  return orderBy(props.rows, orders.names, orders.directions as never[]); // TODO: Get rid of never
});

function select(rows: TColumns | TColumns[]): void {
  const payload: R[] = isArray(rows) ? rows.map(props.selector) : [props.selector(rows)];

  selected.value = xorWith(selected.value, payload, isEqual);
}

function isSelected(row: TColumns): boolean {
  const payload: R = props.selector(row);
  return selected.value.some((item) => isEqual(item, payload));
}

// TODO: Optimize
function rowKey(row: TColumns): string {
  return JSON.stringify(row);
}
</script>

<template>
  <table class="vo-table">
    <VoTableHeader>
      <VoTableCell v-if="props.selectable">
        <!-- Just a placeholder for an extra column ;)  -->
      </VoTableCell>

      <VoTableCell v-for="(column, name) in columns" :key="name">
        <slot :name="`header[${name as string}]` as keyof Component['Slots']" :header="column">
          {{ column.title }}
        </slot>
      </VoTableCell>
    </VoTableHeader>

    <VoTableBody v-if="rows.length">
      <VoTableRow
        v-for="row in rows"
        :key="rowKey(row)"
      >
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

    <VoTableBody v-else>
      <VoTablePlaceholder>
        No data
      </VoTablePlaceholder>
    </VoTableBody>
  </table>
</template>

<style lang="scss">
.vo-table {
}
</style>
