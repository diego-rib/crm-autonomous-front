<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

const route = useRoute()
const layout = computed(() => route.meta.layout || 'default')

const layouts: { [key: string]: string } = {
  default: DefaultLayout,
  blank: BlankLayout,
}

const layoutComponent = computed(() => {
  const layoutName = (layout.value as string) ?? 'default'

  if (['default', 'blank'].includes(layoutName)) {
    return layouts[layoutName]
  }

  return layouts.default
})
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
