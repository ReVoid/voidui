import { describe, test, expect } from 'vitest';
import { numeric } from '../numeric';

describe('format | numeric', () => {
  test.each([
    undefined,
    null,
  ])('Renders blank values', (value) => {
    expect(numeric(value)).toBe('');
  });

  test.each([
    { value: 0, expected: '0' },
    { value: 1000, expected: '1,000' },
    { value: 1000, fractions: { min: 0, max: 0 }, expected: '1,000' },
    { value: 1000, fractions: { min: 0, max: 2 }, expected: '1,000' },
    { value: 1000, fractions: { min: 2, max: 2 }, expected: '1,000.00' },
    { value: 1000.1, fractions: { min: 2, max: 2 }, expected: '1,000.10' },
    { value: 1000, fractions: { min: 1, max: 2 }, expected: '1,000.0' },
    { value: 1000.1, fractions: { min: 1, max: 2 }, expected: '1,000.1' },
    { value: 1000.25, fractions: { min: 1, max: 2 }, expected: '1,000.25' },
  ])('Renders common format: $value + min: $fraction.min + max: $fraction.max > $expected', ({ value, expected, fractions }) => {
    expect(numeric(value, fractions)).toBe(expected);
  });
});
