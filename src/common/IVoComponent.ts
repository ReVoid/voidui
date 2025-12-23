// TODO: Implement flexible base type for any component
export interface IVoComponent<TModels, TProps, TEmits, TSlots = never> {
  Models: TModels;
  Props: TProps;
  Emits: TEmits & ModelsEmits<TModels>;
  Slots: TSlots;
}

type ModelsEmits<T> = {
  [K in keyof T as `update:${K & string}`]: [payload: T[K]];
};
