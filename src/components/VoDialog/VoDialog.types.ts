import type { VNode } from 'vue';

// TODO: Research making interface close to original HTMLDialogElement
export interface IDialog {
  Props: {
    visible?: boolean;
    closable?: boolean;
    persistent?: boolean;
  };

  Emits: {
    'update:visible': [payload: boolean];
    submit: [];
  };

  Slots: {
    header?: (props: { close: () => void; submit: () => void }) => VNode[];
    default?: (props: { close: () => void; submit: () => void }) => VNode[];
    footer?: (props: { close: () => void; submit: () => void }) => VNode[];
  }
}
