<script setup lang="ts">
import {
  computed,
  watch,
} from 'vue';

import type { IDialog } from '@/components';

import { useDialogStack } from './composables';


defineOptions({
  inheritAttrs: false,
});

const visible = defineModel<Component['Props']['visible']>('visible', {
  required: false,
  default: false,
});

type Component = IDialog;

type Props = Component['Props'];

const props = defineProps<Props>();

const dialogs = useDialogStack();

const id = Symbol('VoDialog.vue');

const isActive = computed<boolean>(() => {
  return dialogs.isActive(id);
});

// DOM node to append to.
// Should be the closest position to the HTML bottom.
const TARGET = document.body;

function open(): void {
  visible.value = true;
}

function close(): void {
  visible.value = false;
}

watch(
  visible,
  (isVisible) => {
    if (isVisible) {
      return dialogs.push(id);
    }

    return dialogs.remove(id);
  },
  {
    // Don't remove! This ensures the watcher runs immediately in case the dialog is visible initially.
    immediate: true,
  },
);
</script>

<template>
  <Teleport v-if="isActive" :to="TARGET">
    <article class="vo-dialog">
      <button v-if="props.closable" @click="close">Close</button>
      <header>
        <div>
          <slot name="header" :close="close" />
        </div>
      </header>
      <div>
        <slot name="default" :close="close" />
      </div>
      <footer>
        <slot name="footer" :close="close" />
      </footer>
    </article>
  </Teleport>
</template>

<style scoped>
.vo-dialog {
}
</style>
