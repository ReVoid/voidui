import { createSharedComposable } from '@vueuse/core';

import { useStack } from '@/submodules/voiduse/src/composables';

// TODO: Implement persistent dialog option
export const useDialogStack = createSharedComposable(() => {
  const {
    items: dialogs,
    isOnTop: isActive,
    push,
    remove,
  } = useStack<symbol>([]);

  return {
    dialogs,
    isActive,
    push,
    remove,
  };
});
