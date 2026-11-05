import { createSharedComposable } from '@vueuse/core';

import { useList } from '@/submodules/voiduse/src/composables';

type Dialog = {
  id: string;
  persistent: boolean;
};

/** Shared stack of open dialogs, with persistent dialogs on top. */
export const useDialogStack = createSharedComposable(() => {
  const list = useList<Dialog>((a, b) => a.id === b.id);

  function push(dialog: Dialog): void {
    list.remove(dialog);

    if (dialog.persistent) {
      return list.add(dialog);
    }

    const persistent = list.items.value.filter((item) => item.persistent);

    list.remove(persistent);

    list.add([
      dialog,
      ...persistent,
    ]);
  }

  return {
    items: list.items,
    isActive: list.isLast,
    push,
    remove: list.remove,
  };
});
