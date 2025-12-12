import type { VNode } from 'vue';

export interface IDialog {
  Props: {
    visible?: boolean;
    closable?: boolean;
  };

  Emits: {
    'update:visible': [payload: boolean];
    submit: [payload: never];
  };

  Slots: {
    header?: (props: { close: () => void }) => VNode[];
    default?: (props: { close: () => void }) => VNode[];
    footer?: (props: { close: () => void }) => VNode[];
  };
}
