<script setup lang="ts">
import { VoDialogStory } from '@/components/VoDialog/stories';
import { VoTableStory } from '@/components/VoTable/stories';
import { VoInputStory } from '@/components/VoInput/stories';
import { VoButtonStory } from '@/components/VoButton/stories';
import { VoSelectStory} from '@/components/VoSelect/stories';
import { VoIconStory } from '@/components/VoIcon/stories';
</script>

<template>
  <h1>Void UI</h1>
  <VoDialogStory />
  <VoTableStory />
  <VoInputStory />
  <VoButtonStory v-if="false"/>
  <VoSelectStory />
  <VoIconStory />
</template>
