// TODO: Implement flexible base type for any component
export interface IVoComponent<TModels, TProps, TEmits extends ModelsEmits<TModels>, TSlots = never> {
  Models: TModels;
  Props: TProps;
  Emits: TEmits;
  Slots: TSlots;
}

type ModelsEmits<T> = {
  [K in keyof T as `update:${K & string}`]: [payload: T[K]];
};

type XXX = IVoComponent<{ visible: boolean }, object, { 'update:visible': [payload: boolean] }>;

const x: XXX = {
  Models: {
    visible: true
  },
  Props: {},
  Emits: {
    'update:visible': [true]
  },
  Slots: {},
};

