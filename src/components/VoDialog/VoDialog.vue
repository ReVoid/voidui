<script setup lang="ts">
import { computed, watch } from 'vue';
import { onKeyStroke } from '@vueuse/core';

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

type Emits = Component['Emits'];

type Slots = Component['Slots'];

const props = withDefaults(defineProps<Props>(), {
  closable: false,
  persistent: false,
});

const emit = defineEmits<Emits>();

const slots = defineSlots<Slots>();

const dialogs = useDialogStack();

const id = Symbol('VoDialog.vue');

const isActive = computed<boolean>(() => {
  return dialogs.isActive(id);
});

// DOM node to append to.
// Should be the closest position to the HTML bottom.
const TARGET = document.body;

function close(): void {
  if (!props.closable) {
    return;
  }

  visible.value = false;
}

function submit(): void {
  emit('submit');
}

onKeyStroke('Escape', (e) => {
  if (isActive.value) {
    e.preventDefault();
    close();
  }
});

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

watch(
  isActive,
  (isActive) => {
    document.body.style.overflow = isActive
      ? 'hidden'
      : '';
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <Teleport v-if="isActive" :to="TARGET">
    <div class="vo-dialog__backdrop" @click="close"></div>
    <article class="vo-dialog">
      <button v-if="props.closable" @click="close">Close</button>
      <header v-if="slots.header">
        <div>
          <slot
            name="header"
            :close="close"
            :submit="submit"
          />
        </div>
      </header>
      <div>
        <slot
          name="default"
          :close="close"
          :submit="submit"
        />
      </div>
      <footer v-if="slots.footer">
        <slot
          name="footer"
          :close="close"
          :submit="submit"
        />
      </footer>
    </article>
  </Teleport>
</template>

<style lang="scss">
.vo-dialog {
  position: fixed;
  border: 1px solid black;
  padding: 16px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
  min-height: 500px;
  max-width: 100vw;
  max-height: 100vh;

  &__backdrop {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
