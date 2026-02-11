<script setup lang="ts" generic="TColumns, R">
import {
  computed,
} from 'vue';

import {
  type IVoTable,
  type Columns,
  type ColumnsOrder,
  type Row,
  type Rows,
  type RowsOrder,
  VoTableHeader,
  VoTableRow,
  VoTableBody,
  VoTableCell,
} from '@/components/VoTable';

import {
  isEqual,
  pick,
  orderBy,
  xorWith,
} from 'lodash-es';

import {
  isArray,
} from '@sniptt/guards';

type Component = IVoTable<TColumns, R>;

const props = withDefaults(defineProps<Component['Props']>(), {
  columns: () => ({}) as Columns<TColumns>,
  columnsOrder: () => [] as ColumnsOrder<TColumns>,
  rows: () => [] as Rows<TColumns>,
  rowsOrder: () => [] as unknown as RowsOrder<TColumns>,
  selectable: false,
  selector: (row: Row<TColumns>) => row as R,
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

  return orderBy(props.rows, orders.names, orders.directions as never); // TODO: Get rid of never
});

function select(rows: Row<TColumns> | Rows<TColumns>): void {
  const payload: R[] = isArray(rows)
    ? rows.map(props.selector)
    : [props.selector(rows)];

  selected.value = xorWith(selected.value, payload, isEqual);
}

function isSelected(row: Row<TColumns>): boolean {
  const payload: R = props.selector(row);
  return selected.value.some((item) => isEqual(item, payload));
}

// TODO: Optimize
function rowKey(row: Row<TColumns>): string {
  return JSON.stringify(row);
}
</script>

<template>
  <table class="vo-table">
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
      <VoTableRow v-for="row in rows" :key="rowKey(row)">
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

<style lang="scss">
.vo-table {
}
</style>
