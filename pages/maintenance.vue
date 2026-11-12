<template>
    <div>
        <section class="md:h-screen py-36 flex items-center relative bg-no-repeat bg-center bg-cover" :style="{backgroundImage : `url(${bg})`}">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
            <div class="container relative z-3 text-center">
                <div class="grid grid-cols-1">
                    <img :src="logo" class="mx-auto" alt=""/>
                    <h1 class="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                    <p class="text-white/70 text-lg max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>

                <div class="grid grid-cols-1 mt-10">
                    <div class="text-center">
                        <span id="maintenance" class="timer text-white text-[56px] tracking-[1px]"></span>
                        <span class="block text-base font-semibold uppercase text-white">Minutes</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-6">
                    <div class="text-center">
                        <form class="relative mx-auto max-w-xl">
                            <input type="email" id="subemail" name="name" class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800" placeholder="Enter your email id.."/>
                            <button type="submit" class="h-12 px-6 tracking-wide items-center justify-center font-medium bg-violet-600 text-white rounded-full absolute top-[1px] end-[1px]">Subcribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <BackToHome/>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import feather from 'feather-icons'

    import bg from '@/assets/images/bg/2.jpg'
    import logo from '@/assets/images/logo-icon-64.png'


    let timer = ref(60 * 60) // 1 hour in seconds
    let minutes = ref('')
    let seconds = ref('')

    onMounted(() => {
        feather.replace()
        const display = document.querySelector('#maintenance')
        setInterval(() => {
            minutes.value = String(Math.floor(timer.value / 60)).padStart(2, '0')
            seconds.value = String(timer.value % 60).padStart(2, '0')
            display.textContent = `${minutes.value}:${seconds.value}`
            timer.value--
            if (timer.value < 0) {
                timer.value = 60 * 60
            }
        }, 1000)
    })

</script>
