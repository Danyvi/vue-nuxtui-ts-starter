<template>
  <TheLayout>
    <template #left>
      <SidebarComponent />
    </template>

    <template #right>
      <h1 class="text-xl font-semibold mb-4">Main Content</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is the main content area.</p>
    </template>
  </TheLayout>
</template>

<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
</script>
