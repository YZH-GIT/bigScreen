<template>
  <div class="dashboard">
    <section class="panel">示例面板 A</section>
    <section class="panel">示例面板 B</section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.dashboard { display:flex; gap:16px }
.panel { flex:1; background:rgba(255,255,255,0.03); border-radius:8px; padding:16px; min-height:200px }
</style>
