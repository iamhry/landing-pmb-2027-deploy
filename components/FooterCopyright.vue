<template>
  <div >
 © {{ year }} PMB UMPKU Surakarta.
      Dibuat dengan
      <i class="mdi mdi-heart text-red-600"></i>
      oleh PDSI.
  </div>
</template>

<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>
