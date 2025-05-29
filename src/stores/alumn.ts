import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'

import type { Alumn } from '@/types/Alumn'

import { sampleData } from '@/data/alumns'
import type { Product } from '@/types/Product'

const initialAlumnState = () => ({
  allAlumns: [] as Alumn[],
})

export const useAlumnStore = defineStore('alumn', {
  state: () => useSessionStorage('@crm-a/alumn', initialAlumnState()),
  getters: {
    pagedAlumns: (state) => state.allAlumns.slice(0, 10),
    totalAlumns: (state) => state.allAlumns.length,
    soldProductsCount: (state) =>
      state.allAlumns.reduce((acc, { products }) => [...acc, ...products], [] as Product[]).length,
    mostSoldProduct: () => 'Ebook da Teacher',
    sortedByClosestExpirationAlumns: (state) =>
      [...state.allAlumns].sort((a, b) => {
        const dateA = new Date(a.expiration_date).getTime()
        const dateB = new Date(b.expiration_date).getTime()
        return dateA - dateB
      }),
  },
  actions: {
    clear() {
      Object.assign(this, initialAlumnState())
    },
    async getAllAlumns() {
      this.allAlumns = sampleData
    },
  },
})
