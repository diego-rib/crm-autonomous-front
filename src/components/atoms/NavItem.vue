<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  name: string
  path: string
  icon: string
}>()

const route = useRoute()

const isActive = computed(() => {
  return route.path === props.path
})
</script>

<template>
  <div
    :class="[
      'flex justify-start items-center duration-800 ease-in-out',
      {
        'max-w-full': isActive,
        'max-w-[200px]': !isActive,
      },
    ]"
  >
    <RouterLink
      :to="path"
      :class="[
        'text-lg py-2 w-full decoration-none duration-300 ease-in-out',
        {
          'px-8 cursor-default bg-white text-black': isActive,
          'rounded-2xl mx-4 px-4 bg-black text-white hover:(bg-white text-black)': !isActive,
        },
      ]"
    >
      <!-- <img :src="icon" class="mr-2 h-4 w-4" /> -->
      {{ name }}
    </RouterLink>
  </div>
</template>
