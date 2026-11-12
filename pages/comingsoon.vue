<template>
    <div>
        <section class="md:h-screen py-6 flex items-center justify-center relative bg-no-repeat bg-center bg-cover" :style="{backgroundImage : `url(${bg})`}">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
            <div class="container-fluid relative z-3">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <NuxtLink to="/"><img :src="logo" class="mx-auto" alt=""/></NuxtLink>
                        </div>
                        <div class="title-heading text-center my-auto">
                            <h1 class="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                            <p class="text-white/70 text-lg max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                        
                            <div id="countdown">
                                <ul class="count-down list-none inline-block text-white text-center mt-8 m-6">
                                    <li id="days" class="count-number inline-block m-2">{{ days }}<p class="count-head">Days</p></li>
                                    <li id="hours" class="count-number inline-block m-2">{{ hours }}<p class="count-head">Hours</p></li>
                                    <li id="mins" class="count-number inline-block m-2">{{ minutes }}<p class="count-head">minutes</p></li>
                                    <li id="secs" class="count-number inline-block m-2">{{ seconds }}<p class="count-head">seconds</p></li>
                                    <li id="end" class="h1"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-slate-400">© {{year}} Edupath. Design & Develop with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
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

    import logo from '@/assets/images/logo-icon-64.png'
    import bg from '@/assets/images/bg/2.jpg'


    const year = ref(new Date().getFullYear())

    const date = ref('');
    const now = ref('');
    const countDownToTime = ref(new Date("Sep 13, 2025 00:00:00").getTime())
    const difference = ref('')
    const days = ref('')
    const hours = ref('')
    const minutes = ref('')
    const seconds = ref('')

    onMounted(()=>{
        feather.replace()
            setInterval(() => {
            tickTock();
            difference.value = countDownToTime.value - now.value;
            difference.value = difference.value / (1000 * 60 * 60 * 24);
        }, 1000);
    })

    const tickTock = () => {
        date.value = new Date();
        now.value = date.value.getTime();
        days.value = Math.floor(difference.value);
        hours.value = 23 - date.value.getHours();
        minutes.value = 60 - date.value.getMinutes();
        seconds.value = 60 - date.value.getSeconds();
    }

</script>
