<template>
  <div>
    <Navbar />
    <section class="relative md:py-24 py-16">
      <div class="container relative pt-10 mt-15">
        <div class="grid grid-cols-1 text-center">
          <span class="text-violet-600 font-semibold mb-2 uppercase">Biaya Studi</span>
          <h4 class="mb-1 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            🎓 Kuliah di UMPKU? <br>
            Gak perlu mahal-mahal, kok!
          </h4>
          <p class="text-slate-400 max-w-xl mb-6 mx-auto">
            Silakan pilih jalur yang sesuai untuk melihat rincian biaya pendidikan Anda.
          </p>

          <div class="flex justify-center space-x-4 mb-10">
            <button @click="currentTab = 'reguler'"
                    :class="['h-12 px-6 tracking-wide font-bold rounded-lg transition duration-300',
                                     currentTab === 'reguler' ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50' : 'bg-white border border-gray-300 text-gray-700 dark:bg-slate-800 dark:text-white/70']">
              <i class="iconoir-user-star me-2"></i>Jalur Reguler
            </button>
            <button @click="currentTab = 'rpl'"
                    :class="['h-12 px-6 tracking-wide font-bold rounded-lg transition duration-300',
                                     currentTab === 'rpl' ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50' : 'bg-white border border-gray-300 text-gray-700 dark:bg-slate-800 dark:text-white/70']">
              <i class="iconoir-medal me-2"></i>Jalur RPL
            </button>
          </div>
        </div>

        <div class="relative overflow-x-auto shadow-xl dark:shadow-gray-700 sm:rounded-lg transition-all duration-300">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-violet-600 dark:bg-violet-700">
            <tr>
              <th scope="col" class="px-4 py-3 font-bold tracking-wider rounded-tl-lg">
                🎓 Program Studi ({{ currentTab.toUpperCase() }})
              </th>
              <th scope="col" class="px-4 py-3 font-bold tracking-wider text-center">
                {{ currentTab === 'reguler' ? 'Cicilan UKT 1' : 'Tahap 1 / Smt 1' }}
              </th>
              <th scope="col" class="px-4 py-3 font-bold tracking-wider text-center">
                {{ currentTab === 'reguler' ? 'Cicilan UKT 2' : 'Tahap 2 / Smt 2' }}
              </th>
              <th scope="col" class="px-4 py-3 font-bold tracking-wider text-right rounded-tr-lg">
                Total Biaya
              </th>
            </tr>
            </thead>
            <transition-group name="fade" tag="tbody">
              <tr v-for="(item, index) in displayData" :key="currentTab + index"
                  class="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition duration-300">

                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.prodi }}
                </th>

                <td class="px-4 py-3 text-center">
                  {{ item.angsuran1 }}
                </td>

                <td class="px-4 py-3 text-center">
                  {{ item.angsuran2 }}
                </td>

                <td class="px-4 py-3 font-medium text-right font-semibold text-violet-600">
                  {{ item.totalUKT }}
                </td>
              </tr>
            </transition-group>
          </table>
        </div>


      </div>
    </section>

    <Footer />
    <ScrollToTop />
    <Switcher />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { biayaUkt, biayaRpl } from '@/data/biaya'; // Pastikan biayaRpl sudah di-export di file data

const currentTab = ref('reguler');

// Logika untuk menentukan data mana yang tampil
const displayData = computed(() => {
  return currentTab.value === 'reguler' ? biayaUkt : biayaRpl;
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>