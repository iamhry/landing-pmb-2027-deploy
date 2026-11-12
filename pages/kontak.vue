<template>
    <div class="font-sans antialiased text-gray-900 dark:text-gray-200">
        <Navbar :navlight="true" />

        <section class="relative table w-full py-36 lg:py-52 bg-no-repeat bg-center bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-black/70"></div>
            <div class="container relative z-10 text-center px-6">
                <span class="text-violet-400 font-semibold mb-4 uppercase tracking-widest block animate-fade-in">Kontak
                    Kami</span>
                <h1 class="text-white md:text-5xl text-3xl font-bold mb-6">Terhubung dengan Kami</h1>
                <p class="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
                    Tim admisi kami siap membantu menjawab pertanyaan Anda mengenai pendaftaran jalur Reguler maupun RPL
                    secara cepat dan profesional.
                </p>
            </div>
        </section>

        <section class="relative py-20 md:py-28 bg-gray-50 dark:bg-slate-900 overflow-hidden">
            <div class="container relative px-6 mx-auto">

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div class="lg:col-span-5 space-y-10">
                        <div class="text-left">
                            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                Informasi <span class="text-violet-600">Kampus</span>
                            </h2>
                            <p class="text-gray-500 dark:text-gray-400 mt-4 text-lg">
                                Kunjungi kami atau hubungi melalui saluran informasi resmi berikut.
                            </p>
                        </div>

                        <div class="space-y-6">
                            <div
                                class="group p-7 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                <div class="flex items-start">
                                    <div
                                        class="h-14 w-14 shrink-0 bg-violet-600/10 text-violet-600 rounded-xl flex items-center justify-center text-2xl group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div class="ms-6 flex-1">
                                        <h5 class="text-xl font-bold dark:text-white mb-2">Alamat Utama</h5>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                            Jl. Tulang Bawang Sel. No.26, Kadipiro, Banjarsari, Kota Surakarta, Jawa
                                            Tengah 57136
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="group p-7 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                <div class="flex items-start">
                                    <div
                                        class="h-14 w-14 shrink-0 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <i class="iconoir-mail"></i>
                                    </div>
                                    <div class="ms-6 flex-1">
                                        <h5 class="text-xl font-bold dark:text-white mb-2">Email Akademik</h5>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm font-medium">info@umku.ac.id
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7">
                        <div
                            class="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
                            <div class="mb-10 text-center lg:text-left">
                                <h3 class="text-2xl font-bold dark:text-white">Layanan Chat Cepat</h3>
                                <p class="text-gray-500 mt-2">Pilih jalur pendaftaran untuk berkonsultasi langsung
                                    dengan admin kami via WhatsApp.</p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <a href="https://wa.me/628112636175?text=Halo%20Admin%20PMB%2C%20saya%20ingin%20bertanya%20mengenai%20persyaratan%20pendaftaran%20jalur%20Reguler."
                                    target="_blank"
                                    class="relative overflow-hidden group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-white dark:from-slate-700 dark:to-slate-800 border border-green-100 dark:border-green-900/30 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                                    <div class="relative z-10 text-center">
                                        <div
                                            class="h-20 w-20 bg-green-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                                            <i class="iconoir-user-star"></i>
                                        </div>
                                        <h4 class="text-xl font-bold dark:text-white">Jalur Reguler</h4>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                                            Pendaftaran untuk lulusan SMA/SMK/MA sederajat.</p>
                                        <div
                                            class="mt-6 inline-flex items-center text-green-600 font-bold text-sm uppercase tracking-wider group-hover:text-green-700">
                                            Chat Sekarang <i
                                                class="iconoir-arrow-right ms-2 transition-transform group-hover:translate-x-2"></i>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute -bottom-8 -right-8 text-green-500/5 text-9xl transition-transform group-hover:scale-110">
                                        <i class="iconoir-whatsapp"></i>
                                    </div>
                                </a>

                                <a href="https://wa.me/6285815203566?text=Halo%20Admin%20PMB%2C%20saya%20ingin%20konsultasi%20mengenai%20pendaftaran%20jalur%20RPL%20atau%20Pindahan."
                                    target="_blank"
                                    class="relative overflow-hidden group p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-white dark:from-slate-700 dark:to-slate-800 border border-violet-100 dark:border-violet-900/30 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300">
                                    <div class="relative z-10 text-center">
                                        <div
                                            class="h-20 w-20 bg-violet-600 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                                            <i class="iconoir-medal"></i>
                                        </div>
                                        <h4 class="text-xl font-bold dark:text-white">Jalur RPL</h4>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">Jalur
                                            transfer S1 bagi yang sudah bekerja/kuliah.</p>
                                        <div
                                            class="mt-6 inline-flex items-center text-violet-600 font-bold text-sm uppercase tracking-wider group-hover:text-violet-700">
                                            Chat Sekarang <i
                                                class="iconoir-arrow-right ms-2 transition-transform group-hover:translate-x-2"></i>
                                        </div>
                                    </div>
                                    <div
                                        class="absolute -bottom-8 -right-8 text-violet-500/5 text-9xl transition-transform group-hover:scale-110">
                                        <i class="iconoir-whatsapp"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-20 md:mt-28 relative">
                    <div
                        class="absolute -top-10 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-6 py-2 rounded-full z-10 shadow-lg font-bold text-sm uppercase tracking-widest">
                        Lokasi Kampus
                    </div>
                    <div
                        class="rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 h-[500px] group relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.377584838672!2d110.81399777318997!3d-7.533732274355233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1700245141fd%3A0x28f4257bb5c0e67f!2sUniversitas%20Muhammadiyah%20PKU%20Surakarta!5e0!3m2!1sid!2sid!4v1766115798538!5m2!1sid!2sid"
                            class="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
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
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import bg from '@/assets/images/team/t-3.jpg';

// Bisa ditambahkan logika tambahan jika diperlukan saat komponen dimuat
onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<style scoped>
/* Efek Grayscale pada Maps untuk tampilan yang lebih elegan */
.grayscale {
    filter: grayscale(100%) contrast(1.1);
}

.grayscale:hover {
    filter: grayscale(0%) contrast(1);
}

/* Animasi sederhana untuk Hero */
.animate-fade-in {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Memastikan container memiliki max-width yang baik */
.container {
    max-width: 1200px;
}
</style>