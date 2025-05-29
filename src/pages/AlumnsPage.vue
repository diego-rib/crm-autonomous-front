<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'

import { useAlumnStore } from '@/stores'

import type { ColumnConfig } from '@/types/HomeTable'

import DynamicTable from '@/components/molecules/DynamicTable.vue'

const alumnStore = useAlumnStore()

// Columnas personalizadas para la tabla
const customColumns: ColumnConfig[] = [
  { key: 'name', label: 'Nome', type: 'string' },
  { key: 'email', label: 'E-mail', type: 'string' },
  { key: 'phone', label: 'Telefone', type: 'string' },
  { key: 'expiration_date', label: 'Data de Expiração', type: 'date' },
  { key: 'products', label: 'Produtos', type: 'array' },
  { key: 'tags', label: 'Etiquetas', type: 'array' },
]

const alumns = computed(() => alumnStore.allAlumns)

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
