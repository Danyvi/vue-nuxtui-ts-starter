<template>
  <aside class="h-full w-64 border-r border-gray-200 p-4 flex flex-col justify-between">
    <!-- Top Navigation -->
    <nav>
      <UColorModeButton class="mb-4" />

      <UVerticalNavigation :links="links" class="space-y-2" />
    </nav>

    <!-- User Avatar -->
    <div class="flex justify-center mt-6">
      <UAvatar text="DV" size="md" />
    </div>
  </aside>
</template>

<script setup>
const links = [
  { label: 'Item 1', to: '/' },
  { label: 'Item 2', to: '/about' },
]
</script>
