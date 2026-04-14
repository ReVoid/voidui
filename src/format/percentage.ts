import { defineFormat } from './defineFormat';
import { numeric } from './numeric';

// TODO: Add tests.
export const percentage = defineFormat((value: number) => {
  return numeric(value);
});
