<script setup lang="ts">
import NavItem from '@/components/atoms/NavItem.vue'

const navItems = [
  {
    name: 'Início',
    path: '/',
    icon: '',
  },
  {
    name: 'Alunos',
    path: '/alunos',
    icon: '',
  },
  {
    name: 'Produtos',
    path: '/s',
    icon: '',
  },
  {
    name: 'Compras',
    path: '/d',
    icon: '',
  },
  {
    name: 'Expirações',
    path: '/e',
    icon: '',
  },
]
</script>

<template>
  <nav class="space-y-4">
    <NavItem
      v-for="{ name, path, icon } in navItems"
      :key="`nav-item-${name}`"
      :name="name"
      :path="path"
      :icon="icon"
    />
  </nav>
</template>
