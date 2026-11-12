<template>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-6 gap-8">
        <div v-for="(item, index) in biayaPendaftaran" :key="index"
            class="p-8 bg-white dark:bg-slate-900 shadow-xl dark:shadow-gray-700 rounded-3xl transition duration-500 hover:scale-[1.03] border-t-4 border-violet-600/50">
            
            <div class="content text-center">
                <div class="size-14 bg-violet-600/10 text-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i :class="item.icon ? item.icon : 'iconoir-dollar'" class="text-3xl"></i>
                </div>
                
                <span class="text-gray-900 dark:text-gray-300 font-bold mb-1 block uppercase tracking-wider text-sm">{{ item.title }}</span>
                
                <h4 class="mb-4 text-4xl font-extrabold text-violet-600 leading-normal">
                    {{ item.biaya }}
                </h4>

                <div class="h-px bg-gray-100 dark:bg-slate-800 mx-auto w-1/2 mb-4"></div>

                <p class="text-slate-600 dark:text-slate-400 mt-3 text-center leading-relaxed" v-html="item.desc"></p>

                <div class="mt-6">
                    <NuxtLink :to="item.link"
                        class="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-full bg-violet-600 text-white hover:bg-violet-700 transition duration-300">
                        Daftar Sekarang <i class="mdi mdi-arrow-right ms-1"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { biayaPendaftaran } from '@/data/biaya';
// import BiayaPendaftaran from '~/pages/biaya-pendaftaran.vue'; // Ini tidak diperlukan dan harus dihapus

// Asumsi: data biayaPendaftaran sekarang terlihat seperti ini (misalnya):
// export const biayaPendaftaran = [
//     {
//         icon: 'iconoir-student-male',
//         title: 'REGULER',
//         biaya: 'Rp 100.000',
//         desc: '✨ Buat kamu lulusan SMA/SMK.<br>💸 Daftar cuma 100 ribu aja!<br>🚀 Mulai kuliah dari basic, No Worries!',
//         link: '...'
//     },
//     {
//         icon: 'iconoir-refresh-circle',
//         title: 'ALIH JENJANG',
//         biaya: 'Rp 200.000',
//         desc: '🔁 Buat yang mau lanjut kuliah.<br>📚 Belajar fleksibel, sesuai pengalaman kerja.<br>💰 Daftar 200 ribu, langsung gas kuliah!',
//         link: '...'
//     },
// ];
</script>