import { useStack } from '@/submodules/voiduse/src/composables'

// Used here for a purpose.
const { items: dialogs, isOnTop: isActive, push, remove } = useStack<symbol>([]);

// TODO: Implement persistent dialog option
export function useDialogStack() {
  return {
    dialogs,
    isActive,
    push,
    remove,
  }
}
