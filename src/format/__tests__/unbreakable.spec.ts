import { describe, test, expect } from 'vitest';

import { unbreakable } from '../unbreakable';

describe('format | unbreakable', () => {
  test.each([
    {
      payload: 'You shall not pass!',
      expected: 'You\xa0shall\xa0not\xa0pass!',
    },
    {
      payload: ' You  shall  not  pass! ',
      expected: 'You\xa0shall\xa0not\xa0pass!',
    },
    {
      payload: ['You', 'shall', 'not', 'pass!'],
      expected: 'You\xa0shall\xa0not\xa0pass!',
    },
    {
      payload: ['You shall', 'not pass!'],
      expected: 'You\xa0shall\xa0not\xa0pass!',
    },
    {
      payload: ['You ', ' shall ', 'not', 'pass! '],
      expected: 'You\xa0shall\xa0not\xa0pass!',
    },
    {
      payload: [undefined, null, '\xa0', '', ' ', '  '],
      expected: '',
    },
    {
      payload: [],
      expected: '',
    },
  ])(`Returns string with non-breaking spaces: $payload => $expected`, ({ payload, expected }) => {
    expect(unbreakable(payload)).toBe(expected);
  });
});
