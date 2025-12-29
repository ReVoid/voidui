import type { VNode } from 'vue';

import type {
  IClassNames,
  ILoading,
} from '@/components/compositions';

export interface IVoSelect<T, R> {
  Props: {
    selected?: R;
    selector?: (item: T) => R;
    options?: T[];
  } & IClassNames &
    ILoading;

  Emits: {
    'update:selected': [payload: T];
  };

  Slots: {
    default: () => VNode[];
  };
}
