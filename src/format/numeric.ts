import { defineFormat } from './defineFormat.ts';

type FractionConstraints = {
  min?: number;
  max?: number;
};

// TODO: Add tests
// TODO: Prevent fraction rounding.
export const numeric = defineFormat((value: number, fractions?: FractionConstraints) => {
  const { min = 0, max = 0 } = fractions ?? {};

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    useGrouping: true,
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  });

  return formatter.format(value);
});
