import { defineFormat } from './defineFormat';

import {
  isArray,
  isNonEmptyString,
  isUndefined,
  isNull,
} from '@sniptt/guards';

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
      .filter((chunk) => !isUndefined(chunk) && !isNull(chunk))
      .map(replace)
      .filter(isNonEmptyString)
      .join(UNBREAKABLE_SPACE);
  }

  return replace(value);
});

// Replaces spaces with non-breaking spaces.
function replace(v: string): string {
  return v.trim().replace(/\s+/g, UNBREAKABLE_SPACE);
}
