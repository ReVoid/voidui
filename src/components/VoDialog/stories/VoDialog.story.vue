<script setup lang="ts">
import {
  ref,
} from 'vue';

import { VoDialog } from '@/components';

const dialog_1 = ref<boolean>(false);
const dialog_2 = ref<boolean>(false);
const dialog_3 = ref<boolean>(false);
</script>

<template>
  <article>
    <h2>VoDialog.vue</h2>

    <div>
      <label>
        <span>1</span>
        <input type="checkbox" v-model="dialog_1" />
      </label>
      <label>
        <span>2</span>
        <input type="checkbox" v-model="dialog_2" />
      </label>
      <label>
        <span>3</span>
        <input type="checkbox" v-model="dialog_3" />
      </label>
    </div>

    <VoDialog v-model:visible="dialog_1" closable>
      Dialog 1

      <template #footer="{ close, submit }">
        <button @click="close">
          Close
        </button>
        <button @click="submit">
          Submit
        </button>
      </template>
    </VoDialog>

    <VoDialog v-model:visible="dialog_2" closable>
      Dialog 2
    </VoDialog>

    <VoDialog v-model:visible="dialog_3" closable>
      Dialog 3
    </VoDialog>
  </article>
</template>
