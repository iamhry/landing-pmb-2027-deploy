<template>
    <div>
        <section class="relative bg-violet-600/5">
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <NuxtLink to="/"><img :src="logo" class="mx-auto" width="5%" alt=""/></NuxtLink>
                        </div>
                        <div class="title-heading text-center my-auto">
                            <img :src="errorImg" class="mx-auto" alt=""/>
                            <h1 class="my-6 md:text-4xl text-3xl font-bold">Halaman Tidak Ditemukan</h1>
                            <p class="text-slate-400"> Ups... terjadi kesalahan. <br />
                Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
                            
                            <div class="mt-4">
                                <NuxtLink to="/" class="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Back to Home</NuxtLink>
                            </div>
                        </div>
                        <div class="text-center">
                            <FooterCopyright />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <BackToHome/>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    import logo from '@/assets/images/logo/umpku_logo_2025.png'
    import errorImg from '@/assets/images/error.png'
    const year = ref(new Date().getFullYear())
</script>
