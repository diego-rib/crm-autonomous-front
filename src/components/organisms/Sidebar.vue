<script setup lang="ts">
import NavItems from '@/components/molecules/NavItems.vue'
</script>

<template>
  <div class="w-full bg-[#ccc]">
    <div class="h-[64px] p-4 border-b">
      <div class="flex items-center gap-2">
        <div class="h-6 w-6" />
        <span class="font-semibold">logo</span>
      </div>
    </div>
    <div class="pb-4 mb-4 lg:(h-[calc(100vh-64px)] pb-0 mb-0) overflow-auto">
      <div>
        <NavItems />
      </div>
    </div>
  </div>
</template>
