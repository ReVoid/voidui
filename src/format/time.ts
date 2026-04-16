import { isNumber } from '@sniptt/guards';

import { defineFormat } from './defineFormat';
import { unbreakable } from '@/format/unbreakable.ts';


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

// TODO: Add segments.
// TODO: Add tests.
export const time = defineFormat((value: Value, variant: Variant = '24h', segments: Segments = ['Hour', 'Minute']) => {
  const time: Time = (() => {
    if(isNumber(value)) {
      const hour = Math.floor(value / 3600000);
      value %= 3600000;

      const minute = Math.floor(value / 60000);
      value %= 60000;

      const second = Math.floor(value / 1000);
      const millisecond = value % 1000;

      return {
        hour,
        minute,
        second,
        millisecond,
      };
    }

    return value;
  })();

  if (variant === "24h") {
    return unbreakable(`${time.hour}:${time.minute}:${time.second}`);
  }

  if (variant === "12h") {
    const meridian: "AM" | "PM" = time.hour >= 12
      ? "PM"
      : "AM";

    return unbreakable(`${time.hour}:${time.minute}:${time.second} ${meridian}`);
  }

  return '';
});
