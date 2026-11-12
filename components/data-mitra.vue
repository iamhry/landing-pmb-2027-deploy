<template>
  <div class="container relative">
    <!-- Grid Partner -->
    <div class="grid md:grid-cols-4 grid-cols-2 items-center gap-6">
      <div
        v-for="(item, index) in partnerData"
        :key="index"
        class="mx-auto py-8 flex items-center justify-center"
      >
        <img 
          :src="item" 
          alt="Logo Mitra" 
          class="max-h-24 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { partnerData } from '~/data/data'
</script>

<style scoped>
/* Tidak perlu banyak karena Tailwind sudah handle hover & sizing */
</style>
