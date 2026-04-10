import type { EmitFn, VNode } from 'vue';

// TODO: Implement flexible base type for any component
export interface IVoComponent<
  TProps extends Record<string, unknown>,
  TEmits,
  TSlots,
  TModels extends Record<string, unknown>
> {
  Props: TProps;
  Emits: EmitFn<TEmits> & EmitFn<ModelsEmits<TModels>>;
  Slots: Slots<TSlots>;
  Models: TModels;
}

type ModelsEmits<T> = {
  [K in keyof T as `update:${K & string}`]: [payload: T[K]];
};

// Overrides the original config with the strictest one.
type Slots<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] extends () => unknown
    ? (scope: never) => VNode[]
    : T[K] extends (scope: infer S) => unknown
      ? (scope: S) => VNode[]
      : never;
};
