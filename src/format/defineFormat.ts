import {
  type Union,
} from 'ts-toolbelt';

import {
  isUndefined,
  isNull,
} from '@sniptt/guards';

type Format<T, A extends unknown[]> = (value: Union.Nullable<T>, ...args: A) => string;

/**
 * Format function decorator to omit `undefined`, `null` and `NaN` values and check argument and return types.
 *
 * @example
 * ```ts
 * export const currency = defineFormat((value: number) => `${value} $`);
 *
 * currency(300); // '300 $'
 * currency(undefined); // ''
 * currency(null); // ''
 * currency(NaN); // ''
 * ```
 */
export function defineFormat<T, A extends unknown[]>(format: (value: T, ...args: A) => string): Format<T, A> {
  return (value, ...args) => {
    if (isUndefined(value) || isNull(value) || Number.isNaN(value) || !Number.isFinite(value)) {
      return '';
    }

    return format(value, ...args);
  };
}
