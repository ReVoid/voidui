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
    // TODO: Fix it
    {
      payload: [undefined, null, '', ' ', '  '],
      expected: '',
    },
    {
      payload: [],
      expected: '',
    },
  ])(`Returns unbreakable string : $payload => $expected`, ({ payload, expected }) => {
    expect(unbreakable(payload)).toBe(expected);
  });
});
