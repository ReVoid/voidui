import { defineFormat } from './defineFormat';

// Millisecond amount.
type Duration = number;

// Implicit time.
type Time = {
  hour: number,
  minute: number,
  second: number,
  millisecond: number,
};

type Value = Duration | Time;

type Segment =
  | "Hour"
  | "Minute"
  | "Second"
  | "Millisecond";

type Variant = "12h" | "24h";

type Segments = Segment | Segment[];

// TODO: Implement
export const time = defineFormat((value: Value, variant: Variant = '24h', segments: Segments = ['Hour', 'Minute']) => {
  throw new Error('format is not implemented');
});
