import { type VNode } from 'vue';

export type IVoTable<TColumns> = {
  Props: {
    columns?: Columns<TColumns>;
    rows?: Rows<TColumns>;
    selectable?: boolean;
  };

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
};

export type Columns<T> = T extends Record<string, unknown>
  ? { [K in keyof T]: ColumnOptions }
  : never;

export type Row<T> = T extends Record<string, unknown>
  ? { [K in keyof T]: T[K] }
  : never;

export type Rows<T> = Row<T>[];

type RowColumnSlots<TColumns> = {
  [K in keyof TColumns as `column[${Extract<K, string>}]`]: (props: { row: Row<TColumns> }) => VNode[];
};
