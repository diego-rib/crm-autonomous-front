<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  color: string
}>()
</script>

<template>
  <div class="card-container" :style="`--card-bg-color: ${color}`">
    <div class="card">
      <div class="card-content">
        <p class="text-lg">{{ title }}</p>
        <p class="text-4xl font-bold">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background-color: #f5f5f5;
  border: 1px solid black;
  border-radius: 30px;
  overflow: hidden;
}

.card {
  padding: 1rem;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* Bullet that will expand */
.card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: var(--card-bg-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition:
    width 0.5s ease,
    height 0.5s ease,
    opacity 0.3s ease;
  z-index: 1;
}

/* When hovering, expand the bullet */
.card:hover::before {
  width: 400px;
  height: 400px;
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #333;
  transition: color 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.card:hover .card-content {
  color: white;
}
</style>
