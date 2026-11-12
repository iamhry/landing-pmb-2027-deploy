<template>
    <div>
        <Tagline/>
        <Navbar :tagline="true"/>

        <section class="relative overflow-hidden md:py-44 py-36">
            <div class="container relative md:mt-16 mt-6">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div class="lg:col-span-7">
                        <h6 class="text-yellow-500 font-semibold mb-3 uppercase">100% Satisfaction Guarantee</h6>
                        <h1 class="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Learn Product Design <br> in <span class="bg-gradient-to-l from-fuchsia-500 to-violet-600 text-transparent bg-clip-text">16 weeks</span></h1>
                        <p class="text-slate-400 text-lg max-w-xl">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                        <div class="mt-6">
                            <NuxtLink :to="[]" class="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Explore Courses <i class="mdi mdi-arrow-right align-middle ms-1"></i></NuxtLink>
                            <NuxtLink :to="[]" @click="toggle" class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white ms-1 lightbox"><i data-feather="video" class="h-4 w-4"></i></NuxtLink><span class="font-medium text-slate-400 dark:text-white/80 ms-1 align-middle"> Watch Now</span>
                        </div>
                    </div>

                    <div class="lg:col-span-5">
                        <div class="grid grid-cols-2 gap-6">
                            <div class="relative md:shrink-0">
                                <img :src="image1" class="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-s-full" alt=""/>
                                <div class="overflow-hidden after:content-[''] after:absolute after:size-12 after:bg-fuchsia-500 after:top-0 after:-start-6 after:-z-1 after:rounded-full"></div>
                            </div>
                            
                            <div class="relative md:shrink-0">
                                <img :src="image2" class="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-full" alt=""/>
                                <div class="overflow-hidden after:content-[''] after:absolute after:size-24 after:bg-violet-600/40 after:-top-10 after:-end-0 after:-z-1 after:rounded-lg after:rotate-[36deg]"></div>
                            </div>
                            
                            <div class="relative md:shrink-0">
                                <img :src="image3" class="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-xl" alt=""/>
                                <div class="overflow-hidden after:content-[''] after:absolute after:size-40 after:bg-yellow-400 after:-bottom-10 after:-start-10 after:-z-1 after:rounded-full"></div>
                            </div>
                            
                            <div class="relative md:shrink-0">
                                <img :src="image4" class="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-e-full" alt=""/>
                                <div class="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-violet-600/60 after:bottom-10 after:-end-12 after:-z-1 after:rounded-md"></div>
                                <div class="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-fuchsia-500/60 after:-bottom-12 after:start-10 after:-z-1 after:rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative py-12 bg-violet-600">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                    <div class="lg:col-start-2 lg:col-span-10">
                        <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-center gap-6">
                            <div v-for="(item, index) in counterData" :key="index" class="counter-box text-center">
                                <ClientOnly>
                                    <h1 class="text-white lg:text-4xl text-3xl font-semibold mb-2"><CountUp class="counter-value inline-block" :end-val="item.value">0</CountUp>{{item.symbol}}</h1>
                                </ClientOnly>
                                <h5 class="counter-head text-white uppercase font-medium">{{item.title}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore Our Best Courses</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <ListCourse :grid="'grid lg:grid-cols-2 mt-6 gap-6'" :data="coursesData.slice(0,8)"/>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div class="md:col-span-12 text-center">
                        <NuxtLink to="/list" class="text-slate-400 hover:text-violet-600 duration-500 ease-in-out">See More Courses <i class="mdi mdi-arrow-right align-middle"></i></NuxtLink>
                    </div>
                </div>
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
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Instructors</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <ExpertTeam/>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blogs Or News</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <LatestBlog/>
            </div>
        </section>

        <Footer/>
        

        <ScrollToTop/>
        
        <Switcher/>
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
</template>


<script setup>
 import CountUp from 'vue-countup-v3'

import image1 from '@/assets/images/course/1.jpg'
import image2 from '@/assets/images/course/2.jpg'
import image3 from '@/assets/images/course/3.jpg'
import image4 from '@/assets/images/course/4.jpg'
import { counterData, coursesData } from '~/data/data'

const open = ref(false)

const toggle = () =>{
    open.value = !open.value
}

</script>
