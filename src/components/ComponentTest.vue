<template>
  <UButton color="primary">Button</UButton>
  <UAvatar src="https://github.com/nuxt.png" size="lg" />
  <UButton
    trailing-icon="i-lucide-chevron-right"
    size="md"
    color="neutral"
    variant="outline"
    :ui="{
      trailingIcon: 'rotate-90 size-3'
    }"
  >
    Button
  </UButton>
  <UButton class="font-bold rounded-full">Button</UButton>
  <UIcon name="i-lucide-lightbulb" class="size-5" />
  <UButton icon="i-lucide-sun" variant="subtle">Button</UButton>

  <ColorModeButton />
</template>

<script setup>
import ColorModeButton from '@/components/ColorModeButton.vue';
</script>
