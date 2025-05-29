<template>
  <div class="flex items-center justify-between">
    <div class="text-sm text-gray-500">
      Mostrando
      {{ Math.min(currentPage * pageSize, totalItems) }} de {{ totalItems }} resultados
    </div>

    <div class="flex items-center space-x-2">
      <button
        class="p-1 rounded-md border"
        :disabled="currentPage === 1"
        @click="$emit('update:page', 1)"
      >
        <ChevronsLeft class="h-4 w-4" />
      </button>

      <button
        class="p-1 rounded-md border"
        :disabled="currentPage === 1"
        @click="$emit('update:page', currentPage - 1)"
      >
        <ChevronLeft class="h-4 w-4" />
      </button>

      <select
        class="border rounded-md px-2 py-1 text-sm w-16"
        :value="currentPage.toString()"
        @change="$emit('update:page', Number.parseInt($event.target.value))"
      >
        <option v-for="page in totalPages" :key="page" :value="page.toString()">
          {{ page }}
        </option>
      </select>

      <span class="text-sm text-gray-500">de {{ totalPages }}</span>

      <button
        class="p-1 rounded-md border"
        :disabled="currentPage === totalPages"
        @click="$emit('update:page', currentPage + 1)"
      >
        <ChevronRight class="h-4 w-4" />
      </button>

      <button
        class="p-1 rounded-md border"
        :disabled="currentPage === totalPages"
        @click="$emit('update:page', totalPages)"
      >
        <ChevronsRight class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizeOptions: {
    type: Array as () => number[],
    default: () => [5, 10, 20, 50, 100],
  },
  totalItems: {
    type: Number,
    required: true,
  },
})

defineEmits(['update:page', 'update:pageSize'])
</script>
