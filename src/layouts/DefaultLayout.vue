<script setup lang="ts">
import Sidebar from '@/components/organisms/Sidebar.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row min-h-[100vh]">
    <aside class="w-full max-w-full lg:max-w-[400px]">
      <Sidebar />
    </aside>

    <main class="w-full">
      <RouterView />
    </main>
  </div>
</template>
