<script setup lang="ts">
import DynamicTable from '@/components/molecules/DynamicTable.vue'

import Card from '@/components/atoms/Card.vue'
// import TablePagination from '@/components/atoms/TablePagination.vue'
import type { ColumnConfig } from '@/types/HomeTable'
import { useAlumnStore } from '@/stores'
import { computed, onBeforeMount } from 'vue'

const alumnStore = useAlumnStore()

const cardItems = [
  {
    title: 'Total de alunos',
    value: alumnStore.totalAlumns,
    color: 'blue',
  },
  {
    title: 'Compras feitas',
    value: alumnStore.soldProductsCount,
    color: 'green',
  },
  {
    title: 'Acesso expirando',
    value: alumnStore.sortedByClosestExpirationAlumns.length,
    color: 'red',
  },
  {
    title: 'Produto mais vendido',
    value: alumnStore.mostSoldProduct,
    color: 'orange',
  },
]

// Columnas personalizadas para la tabla
const customColumns: ColumnConfig[] = [
  { key: 'name', label: 'Nome', type: 'string' },
  { key: 'expiring_product', label: 'Produto', type: 'string' },
  { key: 'expiration_date', label: 'Data de Expiração', type: 'date' },
  { key: 'last_contact_date', label: 'Último contato', type: 'date' },
]

const alumns = computed(() => alumnStore.sortedByClosestExpirationAlumns.slice(0, 10))

onBeforeMount(async () => {
  await alumnStore.getAllAlumns()
})
</script>

<template>
  <Suspense>
    <div class="container pt-8 space-y-8">
      <div class="flex items-center justify-between gap-8">
        <h1 class="primary-title">Dashboard</h1>

        <button class="primary-button">Novo Aluno</button>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <Card
          v-for="{ title, value, color } in cardItems"
          :key="`dashboard-card-item-${title}`"
          :title="title"
          :value="value"
          :color="color"
        />
      </div>

      <div>
        <DynamicTable :data="alumns" :columns="customColumns" :page-size="10" />

        <!--
        <TablePagination
          v-if="totalPages > 1"
          :current-page="currentPage"
          :totalPages="totalPages"
          :pageSize="currentPageSize"
          :totalItems="tableData.length"
        /> -->
      </div>
    </div>
  </Suspense>
</template>
