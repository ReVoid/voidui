import { defineFormat } from './defineFormat';

import {
  isNullOrUndefined,
  isArray,
  isNonEmptyStringAndNotWhitespace,
} from '@sindresorhus/is';

import type {
  Union,
} from 'ts-toolbelt';

const UNBREAKABLE_SPACE: string = '\xa0';

type Value = string | Array<Union.Nullable<string>>;

/**
 * Remove blank values and add non-breaking spaces to prevent unexpected line breaks.
 *
 * @example
 * ```ts
 * unbreakable('You shall not pass!'); // 'You\xa0shall\xa0not\xa0pass!'
 * unbreakable(['You', 'shall', 'not', 'pass!']); // 'You\xa0shall\xa0not\xa0pass!'
 * ```
 */
export const unbreakable = defineFormat((value: Value) => {
  if (isArray(value)) {
    return value
      .filter((chunk) => !isNullOrUndefined(chunk))
      .map(replace)
      .filter(isNonEmptyStringAndNotWhitespace)
      .join(UNBREAKABLE_SPACE);
  }

  return replace(value);
});

// Replaces spaces with non-breaking spaces.
function replace(v: string): string {
  return v.trim().replace(/\s+/g, UNBREAKABLE_SPACE);
}
