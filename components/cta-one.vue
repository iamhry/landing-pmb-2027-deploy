<template>
    <section class="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover" :style="{backgroundImage : `url(${bg})`}">
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="container relative">
            <div class="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div class="lg:col-start-2 lg:col-span-10">
                    <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-center gap-6">
                        <div v-for="(item, index) in counterData" :key="index" class="counter-box text-center">
                            <h1 class="text-white lg:text-5xl text-4xl font-semibold mb-2"><CountUp class="counter-value inline-block" :end-val="item.value">0</CountUp>{{item.symbol}}</h1>
                            <h5 class="counter-head text-white uppercase font-medium">{{item.title}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import CountUp from 'vue-countup-v3'
    import { counterData } from '@/data/data';
     import bg from '@/assets/images/team/img-4.jpg'
    // import bg from '@/assets/images/bg/2.jpg'
   
</script>
