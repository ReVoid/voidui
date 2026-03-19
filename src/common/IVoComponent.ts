import type { EmitFn } from 'vue';

// TODO: Implement flexible base type for any component
export interface IVoComponent<
  TProps extends Record<string, unknown>,
  TEmits,
  TSlots,
  TModels extends Record<string, unknown>
> {
  Props: TProps;
  Emits: EmitFn<TEmits> & EmitFn<ModelsEmits<TModels>>;
  Slots: TSlots;
  Models: TModels;
}

type ModelsEmits<T> = {
  [K in keyof T as `update:${K & string}`]: [payload: T[K]];
};
