

export interface IVoInputDate<T extends DateValue> {
  Props: {
    date?: T
  },
  Emits: {},
  Slots: {},
}

type DateValue = string | Date | DateExpanded;

type DateExpanded = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
};
