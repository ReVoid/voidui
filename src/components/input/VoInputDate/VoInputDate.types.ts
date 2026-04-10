import { type VNode } from 'vue';


export interface IVoInputDate<T extends DateValue> {
  Props: {
    date?: T;
  };
  Emits: {};
  Slots: {
    default: (scope: never) => VNode[];
  };
}

type DateTime = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

type DateValue = string | Date | DateTime;


