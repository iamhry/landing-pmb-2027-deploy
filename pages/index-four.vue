<template>
    <div>
        <Tagline/>
        <Navbar :tagline="true" :navlight="true"/>
        <HeroSlider/>

        <div class="container relative -mt-12 z-1">
            <div class="flex justify-center">
                <div class="lg:w-3/4 md:w-11/12 p-6 bg-white dark:bg-slate-900 rounded-xl shadow shadow-slate-100 dark:shadow-slate-800">
                    <form class="relative mx-auto">
                        <input type="text" id="searchCourse" name="name" class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800" placeholder="Search..."/>
                        <button type="submit" class="h-12 px-6 tracking-wide items-center justify-center font-medium bg-violet-600 text-white rounded-full absolute top-[1px] end-[1px]">Search Now</button>
                    </form>
                </div>
            </div>
        </div>

        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <AboutOne/>
            </div>

            <div class="container relative lg:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Discover Powerful Features</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <AppFeature/>
            </div>

            <div class="container relative lg:mt-24 mt-16">
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
        </section>

        <ClientOnly>
            <CtaOne/>
        </ClientOnly>

        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Instructors</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <ExpertTeam/>
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
    import { coursesData } from '@/data/data';
</script>
