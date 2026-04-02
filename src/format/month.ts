import { Union } from 'ts-toolbelt';

import type { Locale } from '@/submodules/voiduse/src/composables/useLocale/useLocale.types.ts';

type Value = Union.Nullable<number | Date>;

type Variant = 'Long' | 'Short' | 'Numeric';

/**
 * Get month name.
 *
 * @example
 * ```ts
 * month(1); // 'January'
 * month(new Date(2077, 0, 1)); // 'January'
 * ```
 */
function month(value: Value): string;

/**
 * Get month name.
 *
 * @example
 * ```ts
 * month(1, 'Long'); // 'January'
 * month(1, 'Short'); // 'Jan'
 * month(1, 'Numeric'); // '1'
 * ```
 */
function month(value: Value, variant: Variant): string;

/**
 * Get month name.
 *
 * @example
 * ```ts
 * month(1, 'en-US'); // 'January'
 * month(1, 'es-ES'); // 'enero'
 * month(1, 'ru-RU'); // 'январь'
 * ```
 */
function month(value: Value, locale: Locale): string;

/**
 * Get month name.
 *
 * @example
 * ```ts
 * month(1, 'Long', 'en-US'); // 'January'
 * ```
 */
function month(value: Value, variant: Variant, locale: Locale): string;

// TODO: Implement with overload.
/**
 * Get month name.
 *
 * @param value
 * @param variant
 * @param locale
 */
function month(value: Value, variant: Variant | Locale, locale: Locale): string {
  throw new Error('format is not implemented');
}
