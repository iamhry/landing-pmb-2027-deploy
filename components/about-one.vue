<template>
    <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
        <div class="lg:col-span-6 md:col-span-7">
            <div class="relative">
                <div class="relative md:shrink-0 lg:me-0 me-10">
                    <img class="object-cover md:w-96 w-84 h-[500px] rounded-lg shadow-md dark:shadow-gyay-700" :src="about1" alt=""/>
                </div>

                <div class="absolute bottom-10 lg:end-6 end-0">
                    <div class="relative z-1 top-10 xl:text-start lg:text-end text-end">
                        <NuxtLink :to="[]" @click="toggle" class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-violet-600 text-white">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </NuxtLink>
                    </div>

                    <div class="relative md:shrink-0">
                        <img class="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" :src="about2" alt=""/>
                    </div>
                </div>
                <div class="fixed w-full h-[100vh] top-0 left-0 z-999" :class="open ? '' : 'hidden'" style="background-color: rgba(0, 0, 0, 0.5);">
                    <div class="w-full h-full flex justify-center items-center">
                        <div class="relative px-4 w-full max-w-2xl h-auto">
                            <button class="absolute right-0 -top-4 bg-slate-600 p-[2px] rounded z-[9999]" @click="toggle"><i data-feather="x" class="text-slate-300"></i></button>
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div class="flex justify-between items-start p-0">
                                    <iframe width="750" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:col-span-6 md:col-span-5">
            <span v-if="title" class="text-violet-600 font-semibold mb-3 uppercase">Our Story</span>
            <h4 class="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Access to Learning <br> Anytime & Anyware</h4>
            <p class="text-slate-400 max-w-xl mx-auto">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

            <div class="grid md:grid-cols-2 mt-4">
                <ul class="list-none">
                    <li class="mt-2 text-[16px]"><i class="mdi mdi-circle-medium"></i> <span class="text-slate-400">Flexible Timing</span></li>
                    <li class="mt-2 text-[16px]"><i class="mdi mdi-circle-medium"></i> <span class="text-slate-400">Easy Learning</span></li>
                </ul>

                <ul class="list-none">
                    <li class="mt-2 text-[16px]"><i class="mdi mdi-circle-medium"></i> <span class="text-slate-400">Affordable</span></li>
                    <li class="mt-2 text-[16px]"><i class="mdi mdi-circle-medium"></i> <span class="text-slate-400">World Class</span></li>
                </ul>
            </div>

            <div class="mt-6">
                <NuxtLink :to="[]" class="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white">Learn More <i class="mdi mdi-arrow-right align-middle ms-1"></i></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref,defineProps } from 'vue';
    import about1 from '@/assets/images/course/1.jpg'
    import about2 from '@/assets/images/course/4.jpg'

    defineProps({
        title:Boolean
    })

    const open = ref(false)

    const toggle = () =>{
        open.value = !open.value
    }
</script>
