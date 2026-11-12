<template>
    <div>
        <Navbar :navlight="true" />
        <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-black/70"></div>
            <div class="container relative z-10 text-center">
                <span class="text-white font-semibold mb-3 uppercase">Brosur</span>
                <h1 class="text-white md:text-4xl text-2xl font-bold mb-3">Wujudkan Masa Depan Bersama Kami</h1>
                <p class="text-white/80 max-w-xl mx-auto">
                    Pendidikan berkualitas kini semakin mudah dijangkau. Ambil langkah pertama menuju karier dan masa
                    depan yang lebih baik!
                </p>
            </div>
        </section>
        <section class="relative pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-24 bg-gray-50 dark:bg-slate-900">
            <div class="container relative">
               <div class="lg:col-span-12 md:col-span-12 mx-auto text-center w-full max-w-4xl">
    <h2 class="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug">
        Pilih <span class="text-violet-600">Jalur Seleksi</span> Anda
    </h2>
    <p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Silakan pilih brosur sesuai jalur yang Anda minati: <strong>Reguler</strong> untuk lulusan baru, atau <strong>RPL</strong> untuk yang berpengalaman.
    </p>

    <div class="flex justify-center space-x-4 mb-10">
        <button @click="changeBrochure('reguler')"
            :class="['h-12 px-6 tracking-wide font-bold rounded-lg transition duration-300 transform', 
                     selectedBrochure === 'reguler' ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50 hover:bg-violet-700' : 'bg-white border border-gray-300 text-gray-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-slate-700']">
            <i class="iconoir-user-star me-2"></i>Reguler
        </button>
        <button @click="changeBrochure('rpl')"
            :class="['h-12 px-6 tracking-wide font-bold rounded-lg transition duration-300 transform', 
                     selectedBrochure === 'rpl' ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/50 hover:bg-violet-700' : 'bg-white border border-gray-300 text-gray-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-slate-700']">
            <i class="iconoir-medal me-2"></i>  RPL 
        </button>
    </div>

    <div class="relative overflow-hidden rounded-2xl shadow-2xl shadow-violet-500/30 cursor-pointer group mb-6"
        @click="toggleZoom">
        <img :src="productImg" alt="Visual Brosur Utama"
            class="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.01]" />

        <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <i class="iconoir-zoom-in text-white text-4xl p-3 bg-white/30 rounded-full"></i>
        </div>
    </div>

    <div class="flex justify-center mt-6">
        <button type="button" @click="downloadBrosur"
            class="h-12 px-8 tracking-wide inline-flex items-center justify-center font-bold rounded-lg bg-violet-600 text-white shadow-lg shadow-violet-500/50 hover:bg-violet-700 transition duration-300 transform hover:scale-[1.02] text-base">
            <i class="iconoir-download me-2"></i> Unduh Brosur PMB UMPKU ({{ selectedBrochure === 'reguler' ? 'Reguler' : 'RPL' }})
        </button>
    </div>
</div>
            </div>
        </section>

        <div class="relative">
            <div class="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <Footer />
        <ScrollToTop />
        <Switcher />

        <div v-if="isZoomed" @click.self="toggleZoom"
            class="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300 overflow-auto">

            <button @click="toggleZoom"
                class="fixed top-6 right-6 text-white text-3xl z-[10000] p-2 rounded-full bg-black/50 hover:bg-black/80 transition">
                &times;
            </button>

            <img :src="productImg" alt="Brosur Zoom"
                class="w-auto h-auto max-w-full max-h-none shadow-2xl rounded-lg mx-auto my-auto cursor-default" />

        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import brochureRPL from '@/assets/images/brosur/brosur-rpl.jpeg';
import bg from '@/assets/images/team/t-3.jpg'

const brochureReguler = '/flayer_pmb_2027_2028_umpku.webp'

const selectedBrochure = ref('reguler'); 

const productImg = ref(brochureReguler);

watch(selectedBrochure, (newSelection) => {
    if (newSelection === 'reguler') {
        productImg.value = brochureReguler;
    } else if (newSelection === 'rpl') {
        productImg.value = brochureRPL;
    }
});

const changeBrochure = (type) => {
    selectedBrochure.value = type;
};

const isZoomed = ref(false);

const toggleZoom = () => {
    isZoomed.value = !isZoomed.value;
};

watch(isZoomed, (newValue) => {
    document.body.style.overflow = newValue ? 'hidden' : '';
});


const downloadBrosur = () => {
    const fileName = selectedBrochure.value === 'reguler' ? 'flayer_pmb_2027_2028_umpku.webp' : 'brosur_pmb_rpl_umpku.jpeg';
    const link = document.createElement('a');

    link.href = productImg.value; 
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>