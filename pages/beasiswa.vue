<template>
    <div>
        <Navbar :navlight="true" />
        <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover"
            :style="{ backgroundImage: `url(${bg})` }">
            <div class="absolute inset-0 bg-black/70"></div>
            <div class="container relative z-10 text-center">
                <span class="text-white font-semibold mb-3 uppercase">🚨 Beasiswa Alert</span>
                <h1 class="text-white md:text-4xl text-2xl font-bold mb-3">Peluang Emas Gak Datang Dua Kali ✨</h1>
                <p class="text-white/80 max-w-xl mx-auto">Belajar bukan cuma buat yang mampu. Sekarang semua bisa, asal kamu punya tekad!
                    </p>
            </div>
        </section>
        <section class="relative md:py-24 py-16 ">
            <div class="container relative pt-3 mt-3">
                <!-- <div class="grid grid-cols-1  text-center">
                    <span class="text-violet-600 font-semibold mb-3 uppercase">🚨 Beasiswa Alert</span>
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Peluang Emas Gak Datang Dua Kali ✨</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Belajar bukan cuma buat yang mampu. Sekarang semua bisa, asal kamu punya tekad!</p>
                </div> -->
                <ListBeasiswa />
            </div>
        </section>

        <Footer />
        <ScrollToTop />
        <Switcher />
    </div>
</template>

<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
import bg from '@/assets/images/team/img-5.jpg'
import map from '@/assets/images/map.svg'
</script>
