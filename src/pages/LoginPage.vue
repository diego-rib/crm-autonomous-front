<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Please enter both email and password.'
    return
  }

  // Replace with actual login logic
  console.log('Logging in with:', { email: email.value, password: password.value })
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg">
      <h1 class="text-2xl font-semibold mb-6 text-center">Login</h1>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          v-model="email"
          type="email"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          v-model="password"
          type="password"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
        />
      </div>

      <div v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</div>

      <button
        @click="handleLogin"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
      >
        Sign In
      </button>
    </div>
  </div>
</template>
