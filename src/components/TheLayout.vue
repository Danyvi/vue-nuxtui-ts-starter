<template>
  <div class="flex min-h-screen">
    <!-- Left Sidebar -->
    <div class="w-64">
      <slot name="left" />
    </div>

    <!-- Right Content -->
    <main class="flex-1 p-6">
      <slot name="right" />
    </main>
  </div>
</template>
