import { describe, test, expect } from 'vitest';

import { unbreakable } from '../unbreakable';

describe('unbreakable', () => {
  test.each([
    {
      payload: 'You shall not pass!',
      expected: 'You\xa0shall\xa0not\xa0pass!',
    }
  ])(`Returns unbreakable string with value: $payload`, ({ payload, expected }) => {
    expect(
      unbreakable(payload)
    ).toBe(expected);
  });
});
