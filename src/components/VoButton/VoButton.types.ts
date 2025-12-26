import type { VNode } from 'vue';

import type {
  IClassNames,
  ILoading,
  INavigation,
  ISize,
} from '@/components/compositions';

export interface IVoButton {
  Props: {
    disabled?: boolean;
  } & INavigation
    & ISize
    & IClassNames
    & ILoading;

  Emits: {
    click: [];
  };

  Slots: {
    default?: () => VNode[];
  };
}
