<script setup lang="ts">
import { VoDialogStory } from '@/components/VoDialog/stories';
import { VoTableStory } from '@/components/VoTable/stories';
import { VoInputStory } from '@/components/input/VoInput/stories';
import { VoButtonStory } from '@/components/VoButton/stories';
import { VoSelectStory } from '@/components/VoSelect/stories';
import { VoIconStory } from '@/components/VoIcon/stories';
import { VoNotificationBarStory } from '@/components/VoNotificationBar/stories';
import { VoInputDateStory } from '@/components/input/VoInputDate/stories';
</script>

<template>
  <h1>Void UI</h1>
  <VoDialogStory />
  <VoTableStory />
  <VoInputStory />
  <VoSelectStory />
  <VoIconStory />

  <VoButtonStory v-if="false" />
  <VoNotificationBarStory v-if="false" />
  <VoInputDateStory />
</template>
