<script setup lang="ts">
import { ref } from 'vue'

const url = import.meta.env.VITE_KINDE_DOMAIN || 'undefined'

const isAuth = ref(false)
const toggleAuth = () => {
  isAuth.value = !isAuth.value
  console.log('url:', url)
}
</script>

<template>
  <ClientOnly>
    <div class="auth-icon-container">
      <div
        :class="isAuth ? 'i-gravity-ui-person' : 'i-gravity-ui-key'"
        ml-5px
        @click="toggleAuth"
      />
    </div>
  </ClientOnly>
</template>

<style scoped>
.auth-icon-container::before {
  margin-right: 8px;
  margin-left: 8px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider);
  content: '';
}
.auth-icon-container {
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 36px;
  margin-left: 3px;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.auth-icon-container:hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.auth-icon-container > :deep(div) {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
