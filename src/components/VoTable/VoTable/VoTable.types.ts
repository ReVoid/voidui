import { type VNode } from 'vue';

export type IVoTable<TColumns, R = Row<TColumns>> = {
  Models: {
    selected: R[],
  };

  Props: {
    columns?: Columns<TColumns>;
    columnsOrder?: ColumnsOrder<TColumns>;
    rows?: Rows<TColumns>;
    rowsOrder?: RowsOrder<TColumns>;
    selectable?: boolean;
    selector?: (row: Row<TColumns>) => R;
    loading?: boolean;
  };

  Emits: {
    'update:selected': [payload: R[]];
  }

  Slots: {
    default?: () => VNode[];
    header?: () => VNode[];
    row?: () => VNode[];
  } & RowColumnSlots<TColumns>;
};

type Unit = 'px';

type ColumnOptions = {
  title?: string;
  width?: number | `${number}` | `${number}${Unit}`;
  pinned?: boolean;
};

export type Columns<T> = T extends Record<string, unknown>
  ? Record<keyof T, ColumnOptions>
  : never;

export type Row<T> = T extends Record<string, unknown>
  ? { [K in keyof T]: T[K] }
  : never;

export type Rows<T> = Row<T>[];

type RowColumnSlots<TColumns> = {
  [K in keyof TColumns as `column[${Extract<K, string>}]`]: (props: { row: Row<TColumns> }) => VNode[];
};

type SortDirection = 'asc' | 'desc';
type SortOrder<T extends Record<string, unknown>> = `${Extract<keyof T, string>}:${SortDirection}`
export type RowsOrder<T> = T extends Record<string, unknown>
  ? SortOrder<T>[]
  : never;

export type ColumnsOrder<TColumns> = Array<keyof Columns<TColumns>>;
