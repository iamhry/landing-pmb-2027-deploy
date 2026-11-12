<template>
    <div>
        <Navbar/>

        <section class="relative overflow-hidden md:h-screen flex items-center py-36 bg-violet-600/5 dark:bg-violet-600/20 bg-center bg-no-repeat bg-cover" :style="{backgroundImage : `url(${bg})`}" id="home">
            <div class="container relative">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div>
                        <h1 class="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Best <span class="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-gradient-to-tl before:from-violet-600 before:to-fuchsia-600 relative inline-block"><span class="relative text-white font-bold">Online</span></span> Courses <br> From <span class="font-bold">Edupath</span></h1>
                        <p class="text-slate-400 text-lg max-w-xl">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                        
                        <div class="mt-6">
                            <NuxtLink :to="[]" class="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">View Courses <i class="mdi mdi-arrow-right align-middle ms-1"></i></NuxtLink>
                        </div>
                    </div>

                    <div class="lg:ms-8">
                        <div class="relative">
                            <img :src="hero" class="mx-auto" alt=""/>
    
                            <div class="overflow-hidden after:content-[''] after:absolute after:size-10 after:bg-violet-600/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                            <div class="absolute md:bottom-16 bottom-12 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 z-2 mover">
                                <h5 class="text-lg font-medium mb-3">Our Instrunctors</h5>
                                
                                <ul class="list-none relative">
                                    <li v-for="(item, index) in teamImg" :key="index" class="inline-block relative -ms-4 first:ms-0 mx-[2px]"><NuxtLink :to="[]"><img :src="item" class="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></NuxtLink></li>
                                    <li class="inline-block relative -ms-4"><NuxtLink to="" class="size-9 table-cell tracking-wide align-middle text-base text-center rounded-full bg-violet-600 text-white hover:z-1 hover:scale-105 transition-all duration-500"><i class="mdi mdi-plus"></i></NuxtLink></li>
                                </ul>
                            </div>

                            <div class="absolute md:top-36 top-28 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3 mover-2">
                                <div class="flex items-center">
                                    <div class="flex items-center justify-center h-14 min-w-14 bg-violet-600/5 text-violet-600 text-center rounded-full me-3">
                                        <i data-feather="monitor" class="h-6 w-6"></i>
                                    </div>
                                    <div class="flex-1">
                                        <span class="text-slate-400">Online Course</span>
                                        <ClientOnly>
                                            <p class="text-xl font-bold"><CountUp class="counter-value inline-block" :end-val="100">5</CountUp>+</p>
                                        </ClientOnly>
                                    </div>
                                </div>
                            </div>

                            <div class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl from-violet-600 to-fuchsia-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 md:translate-x-0 -translate-x-1/2 -z-1 shadow-md shadow-violet-600/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-6">
            <PartnerImg/>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <AboutOne/>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Discover Powerful Features</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <AppFeature/>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore Our Best Courses</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
            
                <GridCourse :grid="'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6'" :data="coursesData.slice(0,6)"/>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div class="md:col-span-12 text-center">
                        <NuxtLink to="/grid" class="text-slate-400 hover:text-violet-600 duration-500 ease-in-out">See More Courses <i class="mdi mdi-arrow-right align-middle"></i></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="container-fluid relative overflow-hidden md:mt-24 mt-16">
                <div class="bg-violet-600 md:pt-0 pt-16 bg-no-repeat bg-top bg-cover" :style="{backgroundImage : `url(${bg})`}">
                    <div class="container relative">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-6 items-center">
                            <div class="lg:col-span-8 md:col-span-7">
                                <div class="md:text-start text-center z-1">
                                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Subscribe to Newsletter!</h3>
                                    <p class="text-white/50 max-w-xl mt-1">Subscribe to get latest updates and information.</p>
                                </div>

                                <div class="mt-4">
                                    <form class="relative max-w-2xl">
                                        <input type="email" id="subscribe" name="email" class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-white rounded-full bg-violet-700 shadow shadow-slate-100/20 dark:shadow-slate-800/20" placeholder="Enter your email :"/>
                                        <button type="submit" class="h-12 px-6 tracking-wide items-center justify-center font-medium bg-yellow-500 text-white rounded-full absolute top-[1px] end-[1px]">Subscribe</button>
                                    </form>
                                </div>
                            </div>

                            <div class="lg:col-span-4 md:col-span-5">
                                <div class="relative">
                                    <img :src="hero2" class="mx-auto relative z-2" alt=""/>
                                    <div class="absolute overflow-hidden size-[350px] bg-gradient-to-tl from-violet-600/20 to-fuchsia-600 bottom-0 translate-x-1/2 start-1/2 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Instructors</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <ExpertTeam/>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blogs or News</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <LatestBlog/>
            </div>
        </section>
        <Footer/>
        <ScrollToTop/>
        <Switcher/>
    </div>
</template>

<script setup>
    import CountUp from 'vue-countup-v3'

    import bg from '@/assets/images/bg/bg.png'
    import hero from '@/assets/images/hero/1.png'
    import hero2 from '@/assets/images/hero/2.png'
    import team1 from '@/assets/images/team/1.jpg'
    import team2 from '@/assets/images/team/2.jpg'
    import team3 from '@/assets/images/team/3.jpg'
    import team4 from '@/assets/images/team/4.jpg'
    import team5 from '@/assets/images/team/5.jpg'

    import { coursesData } from '@/data/data';

    const teamImg = ref([team1, team2, team3, team4, team5])
    
</script>
