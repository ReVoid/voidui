import { type VNode } from 'vue';

type Unit = 'px';

type Column = {
  width: number | `${number}` | `${number}${Unit}`;
}

export type IDataTable<TColumn extends Column, TRow> = {
  Props: {
    columns?: TColumn[];
    rows?: TRow[];
  }

  Slots: {
    row?: (props: { row: TRow }) => VNode[];
  }
}
