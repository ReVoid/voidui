import { defineFormat } from './defineFormat';

import {
  isArray,
  isNonEmptyString,
} from '@sniptt/guards';

import type {
  Union,
} from 'ts-toolbelt';

const UNBREAKABLE_SPACE: string = '\xa0';

type Value = string | Array<Union.Nullable<string>>;

export const unbreakable = defineFormat((value: Value) => {
  if (isArray(value)) {
    return value
      .filter(isNonEmptyString)
      .map(replace)
      .join(UNBREAKABLE_SPACE);
  }

  return replace(value);
});

// Replaces spaces with non-breaking spaces.
function replace(v: string): string {
  return v.trim().replace(/\s+/g, UNBREAKABLE_SPACE);
}
