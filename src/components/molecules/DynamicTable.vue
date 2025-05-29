<template>
  <div class="rounded-xl border border-gray-200 bg-white shadow-sm">
    <div class="overflow-x-auto">
      <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              <div class="flex items-center gap-1">
                <span>{{ column.label }}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-black bg-white">
          <template v-for="(alumn, alumnIndex) in data" :key="alumnIndex">
            <tr
              class="transition-colors hover:bg-light-6 hover:cursor-pointer"
              @click="redirectToAlumnPage(alumn)"
            >
              <td
                v-for="column in columns"
                :key="`${alumnIndex}-${column.key}`"
                class="whitespace-nowrap px-6 py-4"
                :class="{
                  'text-gray-900': !column.type,
                  'text-gray-500': column.type === 'date',
                  'text-gray-700': column.type === 'string',
                  'text-right': column.type === 'number',
                  'font-medium': column.key === 'name',
                }"
              >
                <template v-if="getValueFromColumn(alumn, column)">
                  <span class="inline-flex items-center">
                    <span>
                      {{ getValueFromColumn(alumn, column) }}
                    </span>
                  </span>
                </template>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- Empty state -->
    <div v-if="!data.length" class="p-8 text-center">
      <div class="mx-auto max-w-md">
        <div class="mx-auto h-12 w-12 text-gray-400 i-ph-notebook-bold" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">No data available</h3>
        <p class="mt-1 text-sm text-gray-500">There are currently no records to display.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Alumn } from '@/types/Alumn'
import type { ColumnConfig } from '@/types/HomeTable'
import { dynamicTableValueFormat } from '@/utils/dynamicTableValueFormat'

const router = useRouter()

interface Props {
  data: Alumn[]
  columns?: ColumnConfig[]
  pageSize?: number
  hasPagination?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  columns: undefined,
  pageSize: 10,
})

function isAlumnKey(key: string): key is keyof Alumn {
  const columnsKeys = props.columns?.map(({ key }) => key) ?? []
  return columnsKeys.includes(key)
}

function getValueFromColumn(alumn: Alumn, column: ColumnConfig) {
  const index = column.key as string

  if (!isAlumnKey(index)) return null

  return dynamicTableValueFormat(alumn[index], column.type)
}

function redirectToAlumnPage(alumn: Alumn) {
  router.push(`/alunos/${alumn.id}`)
}
</script>
