import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'

const initialLoginState = () => ({
  username: '',
  password: '',
})

export const useLoginStore = defineStore('login', {
  state: () => useSessionStorage('@crm-a/login', initialLoginState()),
  actions: {
    clear() {
      Object.assign(this, initialLoginState())
    },
  },
})
