<template>
    <div>
        <Navbar :navlight="true"/>
        <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" :style="{backgroundImage:`url(${bg})`}">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Services / Features</h3>
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

        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <AppFeature/>
            </div>

            <div class="container relative lg:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Students Say ?</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <ClientOnly>
                    <ClientOne/>
                </ClientOnly>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <FaqAbout/>

                    <div class="lg:col-span-6 md:col-span-5">
                        <h4 class="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Questions & Answers</h4>
                        <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                        <FaqOne/>
                    </div>
                </div>
            </div>

            <div class="container relative lg:mt-24 mt-16">
                <GetInTouch/>
            </div>
        </section>

        <Footer/>

        <ScrollToTop/>

        <Switcher/>

    </div>
</template>

<script setup>

import bg from '@/assets/images/bg/3.jpg'

</script>
