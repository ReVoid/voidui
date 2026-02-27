import { defineFormat } from './defineFormat';

type Value = string | number | Date;

type Variant = 'Numeric' | 'Long' | 'Short';

// TODO: Implement
export const date = defineFormat((value: Value, variant: Variant) => {
  throw new Error('format is not implemented');
});
