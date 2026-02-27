import {
  type Union,
} from 'ts-toolbelt';

import {
  isUndefined,
  isNull,
} from '@sniptt/guards';

type Format<T, A extends unknown[]> = (value: Union.Nullable<T>, ...args: A) => string;

/**
 * Format function wrapper to omit `undefined` and `null` values and check argument and return types.
 *
 * @example
 * ```ts
 * export const currency = defineFormat((value: number, glyph: '$' | '€') => `${value} ${glyph}`);
 *
 * currency(100, '$'); // '100 $'
 * currency(undefined, '$'); // ''
 * currency(null, '$'); // ''
 * ```
 */
export function defineFormat<T, A extends unknown[]>(format: (value: T, ...args: A) => string): Format<T, A> {
  return (value, ...args) => {
    if (isUndefined(value) || isNull(value)) {
      return '';
    }

    return format(value, ...args);
  };
}
