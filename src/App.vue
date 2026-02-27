<template>
  <div id="app" class="app-root">
    <header class="header">大屏演示 - Vue 3 + TS + Pinia</header>
    <main class="main">
      <Dashboard />
    </main>
  </div>
</template>

<script setup lang="ts">
import Dashboard from './pages/Dashboard.vue'
</script>

<style scoped>
.app-root { height: 100vh; display:flex; flex-direction:column; background: #0b1b2b; color: #e6eef8 }
.header { height:64px; display:flex; align-items:center; padding:0 24px; font-size:18px; background: linear-gradient(90deg,#0f2b44,#072033) }
.main { flex:1; padding:20px }
</style>
