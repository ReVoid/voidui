import { describe, test, expect } from 'vitest';

import { defineFormat } from '../defineFormat';

describe('defineFormat', () => {
  test.each([
    undefined,
    null,
    NaN,
    Infinity,
  ])('Returns an empty string with: %s', (value) => {
    const formatter = defineFormat(() => "whatever");

    expect(
      formatter(value),
    ).toEqual("");
  });

  test('Returns a formatted string', () => {
    const formatter = defineFormat((value) => `[${value}]` );

    expect(
      formatter(42),
    ).toEqual('[42]');
  });
});
