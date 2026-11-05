import { createSharedComposable } from '@vueuse/core';

import { useStack } from '@/submodules/voiduse/src/composables';

/** Shared stack of open dialogs. */
export const useDialogStack = createSharedComposable(() => {
  return useStack<string>([]);
});
