import type { VNode } from 'vue';

import type {
  IClassNames,
  ILoading,
  INavigation,
  ISize,
  IVariant,
} from '@/components/compositions';

export interface IVoButton {
  Props: {
    disabled?: boolean;
  } & INavigation
    & ISize<'Medium' | 'Small'>
    & IClassNames
    & ILoading
    & IVariant<'Regular' | 'Ghost' | 'Outlined'>;

  Emits: {
    click: [];
  };

  Slots: {
    default?: () => VNode[];
  };
}
