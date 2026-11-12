<template>
     <section class="swiper mySwiper swiper-slider-hero relative block h-screen" id="home">
            <swiper class="swiper-wrapper" :slides-per-view="1" :modules="[Autoplay]" :autoplay="true" :speed="3000">
                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" :style="{backgroundImage : `url(${bg1})`}">
                        <div class="absolute inset-0 bg-black/70"></div>
                        <div class="container relative md:mt-16">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Unlock Your Potential <br> with Online Learning</h1>
                                    <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                                    <div class="mt-6">
                                        <NuxtLink :to="[]" class="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Contact Us <i class="mdi mdi-arrow-right align-middle ms-1"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </swiper-slide> 

                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" :style="{backgroundImage : `url(${bg2})`}">
                        <div class="absolute inset-0 bg-black/70"></div>
                        <div class="container relative md:mt-16">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Find the Perfect Course <br> for Your Carrier Goals</h1>
                                    <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                                    <div class="mt-6">
                                        <NuxtLink :to="[]" class="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Get Started <i class="mdi mdi-arrow-right align-middle ms-1"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide> 

                <swiper-slide class="swiper-slide flex items-center overflow-hidden">
                    <div class="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" :style="{backgroundImage : `url(${bg3})`}">
                        <div class="absolute inset-0 bg-black/70"></div>
                        <div class="container relative md:mt-16">
                            <div class="grid grid-cols-1">
                                <div class="text-center">
                                    <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Welcome to Your Online <br> Learning Journey</h1>
                                    <p class="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                                    
                                    <div class="mt-6">
                                        <NuxtLink :to="[]" class="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Get Started <i class="mdi mdi-arrow-right align-middle ms-1"></i></NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </swiper-slide> 
            </swiper>       
        </section>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Autoplay } from 'swiper/modules';
    import bg1 from '@/assets/images/bg/2.jpg'
    import bg2 from '@/assets/images/bg/3.jpg'
    import bg3 from '@/assets/images/bg/4.jpg'
</script>