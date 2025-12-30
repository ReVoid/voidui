import type { IClassNames, ILoading } from '@/components/compositions';

export interface IVoInput<T> {
  Props: {
  } & Text<T>
    & IClassNames
    & ILoading;
}


// This is currently the only known workaround for conditional type restrictions in Vue.
// See: https://github.com/vuejs/core/issues/11371
type Text<T> =
  | { text: NonNullable<T>, nonNullable: true }
  | { text?: T | undefined, nonNullable?: false };

