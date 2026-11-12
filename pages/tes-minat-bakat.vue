<template>
  <Navbar/>
  <div class="min-h-screen bg-[#f8fafc] dark:bg-slate-900 pb-24 font-body text-left">

    <div v-if="step === 'test'"
         class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-[74px] z-30 py-4 shadow-sm">
      <div class="container mx-auto px-4 max-w-2xl">
        <div
            class="flex items-center justify-between mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 font-sans">
          <span>PERNYATAAN {{ currentIndex + 1 }} DARI 24</span>
          <span class="text-violet-600">{{ completionPercentage }}% SELESAI</span>
        </div>
        <div class="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex">
          <div class="h-full bg-violet-600 transition-all duration-500 ease-out"
               :style="{ width: `${completionPercentage}%` }"></div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl">
      <transition name="fade" mode="out-in">

        <div v-if="step === 'identity'" class="max-w-xl mx-auto mt-24">
          <div
              class="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl p-10 border border-slate-100 dark:border-slate-700 relative overflow-hidden shadow-violet-200/20">
            <div class="relative z-10">
              <div class="text-center mb-10">
                <div
                    class="w-20 h-20 bg-violet-100 dark:bg-violet-900/30 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce-slow">
                  <i data-feather="user" class="text-violet-600 size-10"></i>
                </div>
                <h2 class="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight leading-none">
                  VIBE CHECK</h2>
                <p class="text-[11px] text-slate-400 mt-3 font-bold uppercase tracking-widest"> Kenalin diri lu lebih
                  dalam, let's go!</p>
              </div>

              <div class="space-y-6">
                <div>
                  <label class="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2.5 block">Nama
                    Lengkap</label>
                  <input v-model="identity.nama" type="text" placeholder="Cth: Ahmad Fauzi"
                         class="w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 outline-none transition-all text-sm font-semibold"/>
                </div>

                <div class="grid grid-cols-2 gap-5">
                  <div>
                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2.5 block">Usia
                      (Tahun)</label>
                    <input v-model="identity.usia" type="number" placeholder="18"
                           class="w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-4 focus:ring-violet-600/10 focus:border-violet-600 outline-none transition-all text-sm font-semibold"/>
                  </div>
                  <div>
                    <label
                        class="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2.5 block text-left">Tanggal
                      Tes</label>
                    <div
                        class="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-950 text-slate-400 text-sm flex items-center cursor-not-allowed border border-slate-200 dark:border-slate-800 font-bold">
                      <i data-feather="calendar" class="size-3 me-2 opacity-50"></i> {{ identity.tanggal }}
                    </div>
                  </div>
                </div>

                <div>
                  <label class="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2.5 block text-left">Jenis
                    Kelamin</label>
                  <div class="grid grid-cols-2 gap-4">
                    <button v-for="g in ['Laki-laki', 'Perempuan']" :key="g" @click="identity.gender = g"
                            :class="identity.gender === g ? 'bg-violet-600 text-white border-violet-600 shadow-xl shadow-violet-600/30' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50'"
                            class="py-4 rounded-2xl border-2 text-[11px] font-black transition-all uppercase tracking-widest">
                      {{ g }}
                    </button>
                  </div>
                </div>

                <transition name="fade">
                  <p v-if="errorMessage" class="text-center text-rose-500 text-[10px] font-black uppercase tracking-widest mb-4">
                    {{ errorMessage }}
                  </p>
                </transition>

                <button @click="startTest"
                        class="w-full py-5 bg-violet-600 hover:bg-violet-700 text-white rounded-[1.5rem] font-black shadow-2xl shadow-violet-600/40 transition-all mt-6 uppercase tracking-[2px] text-sm active:scale-95">
                  Mulai Analisis Sekarang
                </button>
              </div>
            </div>
            <i data-feather="grid" class="absolute -right-10 -bottom-10 size-40 opacity-5 text-slate-400"></i>
          </div>
        </div>

        <div v-else-if="step === 'test'" class="max-w-2xl mx-auto mt-24 text-center">

          <transition name="fade" mode="out-in">
            <div :key="currentInfo.title"
                 class="mb-8 p-5 bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-slate-700 rounded-3xl flex items-start gap-4 transition-all text-left">
              <div
                  class="bg-white dark:bg-slate-800 p-2.5 rounded-2xl shadow-sm border border-violet-100 dark:border-slate-700">
                <i :data-feather="currentInfo.icon" class="size-5 text-violet-600"></i>
              </div>
              <div>
                <h4 class="text-[10px] font-black text-violet-900 dark:text-violet-300 uppercase tracking-[2px] mb-1">
                  {{ currentInfo.title }}</h4>
                <p class="text-[11px] text-violet-700/70 dark:text-violet-400/70 leading-relaxed font-medium">
                  {{ currentInfo.text }}</p>
              </div>
            </div>
          </transition>

          <transition name="fade-slide" mode="out-in">
            <div :key="currentIndex"
                 class="bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-violet-200/20">
              <div class="p-5 border-b bg-slate-50/50 dark:bg-slate-900/40">
                <div class="flex justify-center mb-3">
      <span
          class="px-3 py-1 bg-violet-100 dark:bg-violet-900/40 text-violet-600 text-[10px] font-black uppercase tracking-widest rounded-full">
        Hi, {{ identity.nama.split(' ')[0] }}! ✨
      </span>
                </div>

                <h2 class="text-lg font-bold text-slate-800 dark:text-white leading-tight">
                  Mana yang <span class="text-violet-500 italic">Paling Relate</span> (P)<br>
                  dan yang <span class="text-slate-400">Enggak Relate</span> (K)?
                </h2>
              </div>

              <div class="p-6 md:p-10 space-y-4">
                <div v-for="(opt, optIdx) in questions[currentIndex].options" :key="optIdx"
                     class="relative p-5 rounded-[2rem] border-2 transition-all duration-300 flex items-center justify-between group"
                     :class="isSelected(optIdx) ? 'border-violet-200 bg-violet-50/30 dark:border-violet-900/30' : 'border-slate-50 dark:border-slate-700 hover:border-violet-100'">

                  <span class="text-sm font-semibold text-slate-700 dark:text-slate-300 pr-16 text-left leading-snug">{{
                      opt.text
                    }}</span>

                  <div class="flex gap-3">
                    <button @click="selectAnswer('p', optIdx)"
                            class="w-12 h-12 rounded-2xl font-black text-xs transition-all flex items-center justify-center border-2 shadow-sm active:scale-90"
                            :class="answers[currentIndex].p === optIdx ? 'bg-emerald-500 border-emerald-500 text-white shadow-emerald-500/30' : 'bg-white dark:bg-slate-700 border-slate-100 text-slate-300 hover:text-emerald-500 hover:border-emerald-200'">
                      P
                    </button>
                    <button @click="selectAnswer('k', optIdx)"
                            class="w-12 h-12 rounded-2xl font-black text-xs transition-all flex items-center justify-center border-2 shadow-sm active:scale-90"
                            :class="answers[currentIndex].k === optIdx ? 'bg-rose-500 border-rose-500 text-white shadow-rose-500/30' : 'bg-white dark:bg-slate-700 border-slate-100 text-slate-300 hover:text-rose-500 hover:border-rose-200'">
                      K
                    </button>
                  </div>
                </div>
              </div>

              <div
                  class="p-8 bg-slate-50/50 dark:bg-slate-900/40 flex justify-between items-center border-t border-slate-100 dark:border-slate-700">
                <button @click="prev" :disabled="currentIndex === 0"
                        class="flex items-center text-[10px] font-black text-slate-400 hover:text-slate-600 disabled:opacity-0 transition-all uppercase tracking-[2px]">
                  <i data-feather="arrow-left" class="size-4 me-2"></i> Sebelumnya
                </button>

                <div class="flex gap-1.5 overflow-hidden px-4">
                  <div v-for="i in 24" :key="i" class="w-1.5 h-1.5 rounded-full transition-all duration-500"
                       :class="i-1 === currentIndex ? 'bg-violet-600 scale-[1.8] shadow-lg shadow-violet-600/30' : (isComplete(i-1) ? 'bg-emerald-400' : 'bg-slate-200 dark:bg-slate-700')"></div>
                </div>

                <button v-if="currentIndex < 23" @click="next" :disabled="!isComplete(currentIndex)"
                        class="flex items-center text-[10px] font-black text-violet-600 disabled:text-slate-200 transition-all uppercase tracking-[2px]">
                  Lanjut <i data-feather="arrow-right" class="size-4 ms-2"></i>
                </button>
                <button v-else @click="calculateAndShowResult" :disabled="!isComplete(currentIndex)"
                        class="px-8 py-3.5 bg-violet-600 text-white rounded-2xl text-[10px] font-black shadow-xl shadow-violet-600/40 active:scale-95 uppercase tracking-[2px]">
                  Proses Hasil
                </button>
              </div>
            </div>
          </transition>
        </div>

        <div v-else-if="step === 'result'"
             class="container mx-auto px-4 max-w-6xl mt-12 animate-fade-in pb-20 text-left">
          <div
              class="bg-white dark:bg-slate-800 rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-violet-500/10">
            <div class="grid lg:grid-cols-12">

              <div class="lg:col-span-6 p-10 md:p-14 space-y-10 border-r border-slate-100 dark:border-slate-700">
                <div class="border-b pb-8 dark:border-slate-700">
                  <div class="flex items-center gap-2 mb-3">
                    <span
                        class="w-3 h-3 bg-violet-600 rounded-full animate-pulse shadow-lg shadow-violet-600/50"></span>
                    <span
                        class="text-[10px] font-black text-violet-600 uppercase tracking-[5px]">Hasil Analisis DISC</span>
                  </div>
                  <h1 class="text-4xl font-black text-slate-800 dark:text-white mt-2 uppercase tracking-tighter leading-tight">
                    {{ finalResult.profileName }}</h1>
                  <p class="text-sm text-slate-400 mt-4 font-bold uppercase tracking-widest">{{ identity.nama }} •
                    {{ identity.usia }} Tahun</p>
                </div>

                <div class="space-y-10">
                  <section v-for="layer in layers" :key="layer.title">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="w-3 h-8 rounded-full shadow-sm" :class="layer.color"></div>
                      <h3 class="font-black text-slate-800 dark:text-white text-xs uppercase tracking-[2px]">
                        {{ layer.title }}</h3>
                    </div>
                    <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed text-justify font-medium">
                      {{ layer.content }}</p>
                  </section>
                </div>

                <div
                    class="p-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[2.5rem] text-white shadow-2xl shadow-violet-600/40 relative overflow-hidden group">
                  <div class="relative z-10">
                    <h4 class="text-[10px] font-black uppercase mb-6 flex items-center tracking-[4px] opacity-90">
                      <i data-feather="map-pin" class="size-4 me-2"></i> Rekomendasi Prodi UMPKU:
                    </h4>
                    <div class="grid gap-3">
                      <div v-for="prodi in finalResult.prodi" :key="prodi"
                           class="bg-white/10 px-6 py-4 rounded-[1.2rem] border border-white/20 text-sm font-black flex items-center backdrop-blur-md transition-all hover:bg-white/20 hover:translate-x-2">
                        <i data-feather="check-circle" class="size-5 me-4 text-emerald-300 shadow-sm"></i> {{ prodi }}
                      </div>
                    </div>
                    <p class="mt-8 text-[10px] opacity-60 font-bold uppercase tracking-widest italic">*Data dipetakan
                      berdasarkan potensi akademik alami Anda.</p>
                  </div>
                  <i data-feather="award"
                     class="absolute -right-8 -bottom-8 size-56 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000"></i>
                </div>
              </div>

              <div
                  class="lg:col-span-6 p-10 md:p-14 bg-slate-50/50 dark:bg-slate-900/30 flex flex-col h-full border-t lg:border-t-0">
                <h3 class="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mb-12 flex items-center">
                  <i data-feather="bar-chart-2" class="size-4 me-2 text-violet-600"></i> Grafik Karakter
                </h3>

                <div class="flex-grow min-h-[420px]">
                  <Line :data="chartData" :options="chartOptions"/>
                </div>

                <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                      class="p-7 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                    <h4 class="text-[10px] font-black text-emerald-600 uppercase mb-5 tracking-[2px] flex items-center">
                      <i data-feather="plus-circle" class="size-3 me-2"></i> Kelebihan Utama
                    </h4>
                    <ul class="space-y-3">
                      <li v-for="k in finalResult.strengths" :key="k"
                          class="text-[11px] font-bold text-slate-600 dark:text-slate-400 flex items-start leading-tight">
                        <span class="me-2 text-emerald-500 font-black">✓</span> {{ k }}
                      </li>
                    </ul>
                  </div>
                  <div
                      class="p-7 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow">
                    <h4 class="text-[10px] font-black text-rose-500 uppercase mb-5 tracking-[2px] flex items-center">
                      <i data-feather="minus-circle" class="size-3 me-2"></i> Tantangan Diri
                    </h4>
                    <ul class="space-y-3">
                      <li v-for="k in finalResult.weaknesses" :key="k"
                          class="text-[11px] font-bold text-slate-600 dark:text-slate-400 flex items-start leading-tight">
                        <span class="me-2 text-rose-400 font-black">!</span> {{ k }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="mt-14 flex flex-col sm:flex-row gap-5">
                  <button @click="printResult"
                          class="flex-1 py-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-[11px] font-black rounded-2xl uppercase tracking-[2px] hover:bg-slate-100 shadow-sm transition-all flex items-center justify-center">
                    <i data-feather="download" class="size-4 me-2"></i> Download Laporan
                  </button>
                  <button @click="restart"
                          class="flex-1 py-5 bg-slate-900 text-white text-[11px] font-black rounded-2xl uppercase tracking-[2px] hover:bg-black shadow-2xl transition-all active:scale-95 flex items-center justify-center">
                    <i data-feather="refresh-ccw" class="size-4 me-2"></i> Ulangi Tes
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, watch} from 'vue'
import feather from 'feather-icons'
import {Line} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

// ==========================================
// STATE MANAGEMENT
// ==========================================
const step = ref('identity')
const currentIndex = ref(0)
const identity = ref({nama: '', usia: '', gender: '', tanggal: ''})
const errorMessage = ref('')
// DATA 24 SOAL LENGKAP DENGAN MAPPING DIMENSI ASLI (Sesuai File DISCTEST.csv)
const questions = [
  {
    options: [{text: 'Gampang gaul, Mudah setuju'}, {text: 'Percaya, Mudah percaya pada orang'}, {text: 'Petualang, Mengambil resiko'}, {text: 'Toleran, Menghormati'}],
    p_key: ['I', 'S', 'D', 'C'],
    k_key: ['I', 'S', 'D', 'C']
  },
  {
    options: [{text: 'Lembut suara, Pendiam'}, {text: 'Optimistik, Visioner'}, {text: 'Pusat Perhatian, Suka gaul'}, {text: 'Pendamai, Membawa Harmoni'}],
    p_key: ['C', 'D', 'I', 'S'],
    k_key: ['C', 'D', 'I', 'S']
  },
  {
    options: [{text: 'Menyemangati orang'}, {text: 'Berusaha sempurna'}, {text: 'Bagian dari kelompok'}, {text: 'Ingin membuat tujuan'}],
    p_key: ['I', 'C', 'S', 'D'],
    k_key: ['I', 'C', 'S', 'D']
  },
  {
    options: [{text: 'Menjadi frustrasi'}, {text: 'Menyimpan perasaan saya'}, {text: 'Menceritakan sisi saya'}, {text: 'Siap beroposisi'}],
    p_key: ['D', 'S', 'I', 'C'],
    k_key: ['D', 'S', 'I', 'C']
  },
  {
    options: [{text: 'Hidup, Suka bicara'}, {text: 'Gerak cepat, Tekun'}, {text: 'Usaha menjaga keseimbangan'}, {text: 'Usaha mengikuti aturan'}],
    p_key: ['I', 'D', 'S', 'C'],
    k_key: ['I', 'D', 'S', 'C']
  },
  {
    options: [{text: 'Kelola waktu secara efisien'}, {text: 'Sering terburu-buru, Merasa tertekan'}, {text: 'Masalah sosial itu penting'}, {text: 'Suka selesaikan apa yang saya mulai'}],
    p_key: ['D', 'C', 'I', 'S'],
    k_key: ['D', 'C', 'I', 'S']
  },
  {
    options: [{text: 'Tolak perubahan mendadak'}, {text: 'Cenderung janji berlebihan'}, {text: 'Tarik diri di tengah tekanan'}, {text: 'Tidak takut bertempur'}],
    p_key: ['S', 'I', 'C', 'D'],
    k_key: ['S', 'I', 'C', 'D']
  },
  {
    options: [{text: 'Penyemangat yang baik'}, {text: 'Pendengar yang baik'}, {text: 'Penganalisa yang baik'}, {text: 'Delegator yang baik'}],
    p_key: ['I', 'S', 'C', 'D'],
    k_key: ['I', 'S', 'C', 'D']
  },
  {
    options: [{text: 'Hasil adalah penting'}, {text: 'Lakukan dengan benar, Akurasi penting'}, {text: 'Dibuat menyenangkan'}, {text: 'Mari kerjakan bersama'}],
    p_key: ['D', 'C', 'I', 'S'],
    k_key: ['D', 'C', 'I', 'S']
  },
  {
    options: [{text: 'Akan berjalan terus tanpa kontrol diri'}, {text: 'Akan membeli sesuai dorongan hati'}, {text: 'Akan menunggu, Tanpa tekanan'}, {text: 'Akan mengusahakan yang kuinginkan'}],
    p_key: ['*', 'I', 'S', 'D'],
    k_key: ['*', 'I', 'S', 'D']
  },
  {
    options: [{text: 'Ramah, Mudah bergabung'}, {text: 'Unik, Bosan rutinitas'}, {text: 'Aktif mengubah sesuatu'}, {text: 'Ingin hal-hal yang pasti'}],
    p_key: ['S', 'I', 'D', 'C'],
    k_key: ['S', 'I', 'D', 'C']
  },
  {
    options: [{text: 'Non-konfrontasi, Menyerah'}, {text: 'Dipenuhi hal detail'}, {text: 'Perubahan pada menit terakhir'}, {text: 'Menuntut, Kasar'}],
    p_key: ['S', 'C', '*', 'D'],
    k_key: ['S', 'C', '*', 'D']
  },
  {
    options: [{text: 'Ingin kemajuan'}, {text: 'Puas dengan segalanya'}, {text: 'Terbuka memperlihatkan perasaan'}, {text: 'Rendah hati, Sederhana'}],
    p_key: ['D', 'S', 'I', 'C'],
    k_key: ['D', 'S', 'I', 'C']
  },
  {
    options: [{text: 'Tenang, Pendiam'}, {text: 'Bahagia, Tanpa beban'}, {text: 'Menyenangkan, Baik hati'}, {text: 'Tak gentar, Berani'}],
    p_key: ['C', 'I', 'S', 'D'],
    k_key: ['C', 'I', 'S', 'D']
  },
  {
    options: [{text: 'Menggunakan waktu berkualitas dgn teman'}, {text: 'Rencanakan masa depan, Bersiap'}, {text: 'Bepergian demi petualangan baru'}, {text: 'Menerima ganjaran atas tujuan yg dicapai'}],
    p_key: ['S', 'C', 'I', 'D'],
    k_key: ['S', 'C', 'I', 'D']
  },
  {
    options: [{text: 'Aturan perlu dipertanyakan'}, {text: 'Aturan membuat adil'}, {text: 'Aturan membuat bosan'}, {text: 'Aturan membuat aman'}],
    p_key: ['D', 'C', 'I', 'S'],
    k_key: ['D', 'C', 'I', 'S']
  },
  {
    options: [{text: 'Pendidikan, Kebudayaan'}, {text: 'Prestasi, Ganjaran'}, {text: 'Keselamatan, keamanan'}, {text: 'Sosial, Perkumpulan kelompok'}],
    p_key: ['C', 'D', 'S', 'I'],
    k_key: ['C', 'D', 'S', 'I']
  },
  {
    options: [{text: 'Memimpin, Pendekatan langsung'}, {text: 'Suka bergaul, Antusias'}, {text: 'Dapat diramal, Konsisten'}, {text: 'Waspada, Hati-hati'}],
    p_key: ['D', 'I', 'S', 'C'],
    k_key: ['D', 'I', 'S', 'C']
  },
  {
    options: [{text: 'Tidak mudah dikalahkan'}, {text: 'Kerjakan sesuai perintah, Ikut pimpinan'}, {text: 'Mudah terangsang, Riang'}, {text: 'Ingin segalanya teratur, Rapi'}],
    p_key: ['D', 'C', 'I', '*'],
    k_key: ['D', 'C', 'I', '*']
  },
  {
    options: [{text: 'Saya akan pimpin mereka'}, {text: 'Saya akan melaksanakan'}, {text: 'Saya akan meyakinkan mereka'}, {text: 'Saya dapatkan fakta'}],
    p_key: ['D', 'S', 'I', 'C'],
    k_key: ['D', 'S', 'I', 'C']
  },
  {
    options: [{text: 'Memikirkan orang dahulu'}, {text: 'Kompetitif, Suka tantangan'}, {text: 'Optimis, Positif'}, {text: 'Pemikir logis, Sistematik'}],
    p_key: ['S', 'D', 'I', 'C'],
    k_key: ['S', 'D', 'I', 'C']
  },
  {
    options: [{text: 'Menyenangkan orang, Mudah setuju'}, {text: 'Tertawa lepas, Hidup'}, {text: 'Berani, Tak gentar'}, {text: 'Tenang, Pendiam'}],
    p_key: ['S', 'I', 'D', 'C'],
    k_key: ['S', 'I', 'D', 'C']
  },
  {
    options: [{text: 'Ingin otoritas lebih'}, {text: 'Ingin kesempatan baru'}, {text: 'Menghindari konflik'}, {text: 'Ingin petunjuk yang jelas'}],
    p_key: ['D', 'I', 'S', 'C'],
    k_key: ['D', 'I', 'S', 'C']
  },
  {
    options: [{text: 'Dapat diandalkan, Dapata dipercaya'}, {text: 'Kreatif, Unik'}, {text: 'Garis dasar, Orientasi hasil'}, {text: 'Jalankan standar yang tinggi, Akurat'}],
    p_key: ['S', 'I', 'D', 'C'],
    k_key: ['S', 'I', 'D', 'C']
  }
]

const answers = ref(questions.map(() => ({p: null, k: null})))
const finalResult = ref({
  profileName: '', public: '', pressure: '', core: '',
  scores: {p: {D: 0, I: 0, S: 0, C: 0}, k: {D: 0, I: 0, S: 0, C: 0}, core: {D: 0, I: 0, S: 0, C: 0}},
  prodi: [], strengths: [], weaknesses: []
})

// ==========================================
// DATABASE INFORMASI (DARI D,I,S,C .csv)
// ==========================================
const discDatabase = {
  D: {
    name: 'Dominance (Penggerak)',
    public: 'Anda tampak tegas, dominan, dan menyukai kontrol. Orang lain melihat Anda sebagai pemimpin yang mendambakan hasil nyata dan tantangan.',
    pressure: 'Saat di bawah tekanan, Anda cenderung menjadi kaku, tidak sabar, dan sangat menuntut hasil secara instan.',
    core: 'Karakter asli Anda adalah seorang inovator pemberani yang mandiri, kompetitif, dan sangat efisien dalam mencapai target.',
    strengths: ['Cepat membuat keputusan', 'Berani mengambil resiko', 'Inovatif & Efisien', 'Menghargai waktu'],
    weaknesses: ['Cenderung melanggar peraturan', 'Kurang suka mendengar pendapat', 'Terlalu berfokus pada tugas', 'Tidak sabar'],
    prodi: ['S1 - Hukum', 'S1 - Manajemen', 'D4 - Keperawatan Anestesiologi']
  },
  I: {
    name: 'Influence (Antusias)',
    public: 'Anda tampil sebagai pribadi yang ramah, optimis, dan pandai menghidupkan suasana. Anda adalah pusat perhatian yang komunikatif.',
    pressure: 'Saat stres, Anda bisa menjadi sangat impulsif, tidak sistematis, dan terlalu mengandalkan perasaan daripada logika.',
    core: 'Diri asli Anda adalah seorang komunikator kreatif yang mampu memotivasi orang lain dengan energi positif yang tinggi.',
    strengths: ['Kreatif dalam solusi', 'Mampu mengatasi konflik', 'Optimistik & Ceria', 'Pandai menjual ide'],
    weaknesses: ['Impulsif', 'Tidak sistemetik', 'Kurang memperhatikan detail', 'Terlalu percaya orang'],
    prodi: ['S1 - Psikologi', 'S1 - Informatika', 'S1 - Manajemen']
  },
  S: {
    name: 'Steadiness (Pendamai)',
    public: 'Anda tampak sabar, loyal, pendengar yang baik, dan sangat kooperatif. Anda menyukai stabilitas dan harmoni kelompok.',
    pressure: 'Di bawah tekanan, Anda cenderung menarik diri, sulit mengambil keputusan, dan sangat takut akan perubahan mendadak.',
    core: 'Karakter asli Anda adalah sosok yang sabar, stabil, memiliki empati tinggi, dan sangat dapat diandalkan oleh tim.',
    strengths: ['Dapat dipercaya', 'Pendengar ulung', 'Sabar & Empati', 'Loyalitas tinggi'],
    weaknesses: ['Takut akan perubahan', 'Sulit menetapkan prioritas', 'Sering tidak suka dikritik', 'Kurang inisiatif'],
    prodi: ['S1 - Keperawatan', 'S1 - Kebidanan', 'D3 - Keperawatan', 'Profesi Ners', 'Profesi Bidan']
  },
  C: {
    name: 'Compliance (Pemikir)',
    public: 'Anda tampil sangat teliti, formal, analitis, dan selalu mengikuti aturan. Anda mengutamakan akurasi di atas segalanya.',
    pressure: 'Saat stres, Anda menjadi sangat defensif bila dikritik dan bisa terjebak dalam detail kecil sehingga lambat bertindak.',
    core: 'Diri asli Anda adalah pemikir objektif yang disiplin, akurat, dan sangat berhati-hati dalam setiap tindakan.',
    strengths: ['Berpikir objektif', 'Sangat teliti & Hati-hati', 'Analitis & Logis', 'Disiplin tinggi'],
    weaknesses: ['Ragu-ragu bertindak', 'Cenderung rewel', 'Sangat defensif', 'Terlalu kaku pada prosedur'],
    prodi: ['S1 - Informatika', 'S1 - Gizi', 'D4 - Teknologi Rekayasa Elektro-Medis']
  }
}

// ==========================================
// ENGINE PERHITUNGAN SCORING
// ==========================================
const selectAnswer = (type, optIdx) => {
  const cur = answers.value[currentIndex.value]
  if (type === 'p') {
    if (cur.k === optIdx) cur.k = null // BUG FIX: Mutual Exclusion (Hapus K jika baris yang sama dipilih P)
    cur.p = optIdx
  } else {
    if (cur.p === optIdx) cur.p = null // BUG FIX: Mutual Exclusion (Hapus P jika baris yang sama dipilih K)
    cur.k = optIdx
  }
  if (cur.p !== null && cur.k !== null && currentIndex.value < 23) {
    setTimeout(() => {
      currentIndex.value++
    }, 500)
  }
}
// KODE LAMA TETAP DI SINI (SESUAI REQUEST)
//
// const calculateAndShowResult = () => {
//   const pS = {D: 0, I: 0, S: 0, C: 0}, kS = {D: 0, I: 0, S: 0, C: 0}, cS = {D: 0, I: 0, S: 0, C: 0}
//
//   answers.value.forEach((a, i) => {
//     const pK = questions[i].p_key[a.p], kK = questions[i].k_key[a.k]
//     if (pK && pK !== '*') pS[pK]++
//     if (kK && kK !== '*') kS[kK]++
//   })
//
//   Object.keys(pS).forEach(d => {
//     cS[d] = pS[d] - kS[d]
//   })
//   const dominant = Object.keys(cS).reduce((a, b) => cS[a] > cS[b] ? a : b)
//   const db = discDatabase[dominant]
//
//   finalResult.value = {
//     profileName: db.name, public: db.public, pressure: db.pressure, core: db.core,
//     scores: {p: pS, k: kS, core: cS},
//     prodi: db.prodi, strengths: db.strengths, weaknesses: db.weaknesses
//   }
//
//   step.value = 'result'
//   setTimeout(() => {
//     feather.replace()
//   }, 100)
// }

const calculateAndShowResult = async () => {
  const pS = {D: 0, I: 0, S: 0, C: 0}, kS = {D: 0, I: 0, S: 0, C: 0}, cS = {D: 0, I: 0, S: 0, C: 0}

  // 1. Logika Hitung (Tetap seperti aslinya)
  answers.value.forEach((a, i) => {
    const pK = questions[i].p_key[a.p], kK = questions[i].k_key[a.k]
    if (pK && pK !== '*') pS[pK]++
    if (kK && kK !== '*') kS[kK]++
  })

  Object.keys(pS).forEach(d => {
    cS[d] = pS[d] - kS[d]
  })
  const dominant = Object.keys(cS).reduce((a, b) => cS[a] > cS[b] ? a : b)
  const db = discDatabase[dominant]

  // 2. Update State Final (DIPERBAIKI: Menambahkan public, pressure, core agar layers tidak error)
  finalResult.value = {
    profileName: db.name,
    public: db.public,   // Tambahkan ini
    pressure: db.pressure, // Tambahkan ini
    core: db.core,       // Tambahkan ini
    scores: {p: pS, k: kS, core: cS},
    prodi: db.prodi,
    strengths: db.strengths,
    weaknesses: db.weaknesses
  }

  // 3. KIRIM KE API (BAGIAN PENYAMBUNG)
  try {
    const response = await fetch('https://psikotes.umpku.ac.id/api_simpan.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nama: identity.value.nama,
        usia: identity.value.usia,
        gender: identity.value.gender === 'Laki-laki' ? 'L' : 'P',
        profile_name: db.name,
        scores: finalResult.value.scores,
        answers: answers.value,
        prodi: db.prodi
      })
    });

    // Pastikan response oke sebelum diparsing
    if (response.ok) {
      const result = await response.json();
      if (result.status === 'success') {
        console.log('Data tersimpan dengan ID:', result.id);
      }
    }
  } catch (error) {
    console.error('Gagal simpan data ke database:', error);
    // Tetap lanjut tampilkan hasil meski API gagal agar user tidak stuck
  }

  // 4. Pindah ke Halaman Hasil
  step.value = 'result'
  setTimeout(() => {
    feather.replace()
  }, 100)
}
// const calculateAndShowResult = () => {
//   const pS = {D: 0, I: 0, S: 0, C: 0}, kS = {D: 0, I: 0, S: 0, C: 0}, cS = {D: 0, I: 0, S: 0, C: 0}
//
//   answers.value.forEach((a, i) => {
//     const pK = questions[i].p_key[a.p], kK = questions[i].k_key[a.k]
//     if (pK && pK !== '*') pS[pK]++
//     if (kK && kK !== '*') kS[kK]++
//   })
//
//   Object.keys(pS).forEach(d => {
//     cS[d] = pS[d] - kS[d]
//   })
//   const dominant = Object.keys(cS).reduce((a, b) => cS[a] > cS[b] ? a : b)
//   const db = discDatabase[dominant]
//
//   finalResult.value = {
//     profileName: db.name, public: db.public, pressure: db.pressure, core: db.core,
//     scores: {p: pS, k: kS, core: cS},
//     prodi: db.prodi, strengths: db.strengths, weaknesses: db.weaknesses
//   }
//
//   step.value = 'result'
//   setTimeout(() => {
//     feather.replace()
//   }, 100)
// }

// ==========================================
// CHART & UI HELPERS
// ==========================================
const chartData = computed(() => ({
  labels: ['DOMINANCE', 'INFLUENCE', 'STEADINESS', 'COMPLIANCE'],
  datasets: [
    {
      label: 'PUBLIK (MASK)',
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      data: Object.values(finalResult.value.scores.p),
      tension: 0.4,
      fill: true
    },
    {
      label: 'TEKANAN (STRESS)',
      borderColor: '#f43f5e',
      backgroundColor: 'rgba(244, 63, 94, 0.1)',
      data: Object.values(finalResult.value.scores.k),
      tension: 0.4,
      fill: true
    },
    {
      label: 'ASLI (CORE)',
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      data: Object.values(finalResult.value.scores.core),
      tension: 0.4,
      borderWidth: 5,
      fill: true
    }
  ]
}))

const chartOptions = {
  responsive: true, maintainAspectRatio: false,
  plugins: {legend: {position: 'bottom', labels: {boxWidth: 12, font: {size: 10, weight: 'bold'}, padding: 20}}},
  scales: {y: {beginAtZero: false, grid: {color: 'rgba(0,0,0,0.05)'}}}
}

const infoList = [
  {
    icon: 'info',
    title: 'Tentang DISC',
    text: 'Analisis ini membagi perilaku menjadi 4 dimensi utama: Dominance, Influence, Steadiness, & Compliance.'
  },
  {
    icon: 'zap',
    title: 'Fokus Hasil',
    text: 'Hasil tes ini didasarkan pada Standard Scoring yang umum digunakan di biro psikologi internasional.'
  },
  {
    icon: 'smile',
    title: 'Tips Mengisi',
    text: 'Semakin jujur jawaban Anda, semakin akurat rekomendasi Program Studi yang akan muncul.'
  }
]
const currentInfo = computed(() => {
  const p = completionPercentage.value
  return p < 35 ? infoList[0] : p < 70 ? infoList[1] : infoList[2]
})

const startTest = () => {
  if (identity.value.nama && identity.value.usia && identity.value.gender) {
    errorMessage.value = '' // Reset error jika sukses
    step.value = 'test'
  } else {
    errorMessage.value = 'Lengkapi dulu profil lu biar hasilnya akurat! 🔥'
    setTimeout(() => { errorMessage.value = '' }, 3000)
  }
}
const prev = () => currentIndex.value--
const next = () => currentIndex.value++
const restart = () => location.reload()
const printResult = () => window.print()
const isSelected = (idx) => answers.value[currentIndex.value].p === idx || answers.value[currentIndex.value].k === idx
const isComplete = (idx) => answers.value[idx].p !== null && answers.value[idx].k !== null
const completionPercentage = computed(() => Math.floor((answers.value.filter(a => a.p !== null && a.k !== null).length / 24) * 100))
const layers = computed(() => [
  {title: 'Topeng Sosial (Mask)', content: finalResult.value.public, color: 'bg-blue-500 shadow-blue-500/50 shadow-lg'},
  {
    title: 'Diri Saat Tertekan (Core)',
    content: finalResult.value.pressure,
    color: 'bg-rose-500 shadow-rose-500/50 shadow-lg'
  },
  {
    title: 'Karakter Alami (Mirror)',
    content: finalResult.value.core,
    color: 'bg-violet-600 shadow-violet-600/50 shadow-lg'
  }
])

onMounted(() => {
  identity.value.tanggal = new Date().toISOString().split('T')[0]
  feather.replace()
})
watch(currentIndex, () => setTimeout(() => feather.replace(), 50))
watch(step, () => setTimeout(() => feather.replace(), 50))
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

@media print {
  .sticky, button, .flex-shrink-0 {
    display: none !important;
  }

  .max-w-6xl {
    max-width: 100% !important;
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .rounded-[

3.5rem

] {
  border-radius: 0 !important;
}
}
</style>