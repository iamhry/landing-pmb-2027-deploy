<template>
  <div>
    <!-- Navbar -->
    <Navbar :navlight="true" />

    <!-- Hero Section -->
    <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bg})` }">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="container relative z-10 text-center">
        <h1 class="text-white md:text-4xl text-2xl font-bold mb-3">Mitra Kami</h1>
        <p class="text-white/60 max-w-xl mx-auto">Kami bangga bekerja sama dengan berbagai mitra terpercaya untuk
          mendukung layanan kami.</p>
      </div>
    </section>

    <!-- List Mitra -->
    <section class="py-12 bg-gray-50 dark:bg-slate-900">
      <div class="container mx-auto">
        <ListMitra />
      </div>
    </section>

    <!-- Footer & Utilities -->
    <Footer />
    <ScrollToTop />
    <Switcher />
  </div>
</template>

<script setup>
import ListMitra from '@/components/data-mitra.vue'
import bg from '@/assets/images/bg/5.jpg'
</script>

<style scoped>
/* Optional: bisa menambahkan hover effect tambahan di logo */
</style>
