import type { IClassNames, ILoading } from '@/components/compositions';

export interface IVoInput<T, TNonNullable> {
  Props: {
    nonNullable?: TNonNullable;
  } & Text<T, TNonNullable>
    & IClassNames
    & ILoading;
}


type Text<T, TNonNullable> = TNonNullable extends true
  ? { text: NonNullable<T> }
  : T extends NonNullable<T>
    ? { text?: T | undefined }
    : { text: T };
