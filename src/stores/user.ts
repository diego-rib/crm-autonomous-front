import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'

import type { User } from '@/types/User'

const initialUserState = () => ({
  name: [] as User[],
  email: '',
  permissions: [] as string[],
})

export const useUserStore = defineStore('user', {
  state: () => useSessionStorage('@crm-a/user', initialUserState()),
  actions: {
    clear() {
      Object.assign(this, initialUserState())
    },
  },
})
