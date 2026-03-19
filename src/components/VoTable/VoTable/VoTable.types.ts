import {
  type VNode,
} from 'vue';

export type IVoTable<TColumns, R = TColumns> = {
  Models: {
    selected: R[];
  };

  Props: {
    columns?: Columns<TColumns>;
    columnsOrder?: ColumnsOrder<TColumns>;
    rows?: TColumns[];
    rowsOrder?: RowsOrder<TColumns>;
    selectable?: boolean;
    selector?: (row: TColumns) => R;
    loading?: boolean;
  };

  Emits: {
    // That syntax doesn’t yield the proper result in certain cases. :(
    // 'update:selected': [payload: R[]];
    // 'update:selected': (payload: R[]) => void; // And that one too :(.
    (e: 'update:selected', payload: R[]): void;
  };

  Slots: {
    header?: () => VNode[];
    default?: () => VNode[];
  } & HeaderSlots<TColumns> &
    RowSlots<TColumns>;
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

type HeaderSlots<TColumns> = {
  [K in keyof TColumns as `header[${Extract<K, string>}]`]: (props: { header: Columns<TColumns>[K] }) => VNode[];
};

type RowSlots<TColumns> = {
  [K in keyof TColumns as `row[${Extract<K, string>}]`]: (props: { row: TColumns }) => VNode[];
};

type SortDirection = 'asc' | 'desc';
type SortOrder<T extends Record<string, unknown>> = `${Extract<keyof T, string>}:${SortDirection}`
export type RowsOrder<T> = T extends Record<string, unknown>
  ? SortOrder<T>[]
  : never;

export type ColumnsOrder<TColumns> = Array<keyof Columns<TColumns>>;
