import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

const initialAuthState = () => ({
  token: '',
})

export const useAuthStore = defineStore('auth', {
  state: () => useLocalStorage('@crm-a/auth', initialAuthState()),
  actions: {
    clear() {
      Object.assign(this, initialAuthState())
    },
  },
})
