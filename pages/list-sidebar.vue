<template>
    <div>
        <Navbar/>

        <section class="relative py-5 bg-slate-50 dark:bg-slate-800 mt-[74px]">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-2 items-center">
                    <div class="lg:col-span-5 md:col-span-4">
                        <h3 class="text-2xl md:leading-normal leading-normal font-semibold">Courses</h3>
                    </div>
                    <div class="lg:col-span-7 md:col-span-8 md:text-end">
                        <ul class="tracking-[0.5px] mb-0 inline-block">
                            <li class="inline-block text-slate-400 dark:text-white/60 duration-500 ease-in-out hover:text-violet-600 dark:hover:text-white"><NuxtLink to="/">Edupath</NuxtLink></li>
                            <li class="inline-block text-slate-500 dark:text-white/60 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="iconoir-nav-arrow-right align-middle"></i></li>
                            <li class="inline-block text-slate-400 dark:text-white/60 duration-500 ease-in-out hover:text-violet-600 dark:hover:text-white"><NuxtLink :to="[]">Courses</NuxtLink></li>
                            <li class="inline-block text-slate-500 dark:text-white/60 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="iconoir-nav-arrow-right align-middle"></i></li>
                            <li class="inline-block text-violet-600 dark:text-white" aria-current="page">List Courses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative py-12">
            <div class="container relative">
                <div class="grid md:grid-cols-12  grid-cols-1 gap-6">
                    <div class="lg:col-span-8 md:col-span-8 md:order-1 order-2">
                        <ListCourse :grid="'grid grid-cols-1 gap-6'" :data="coursesData"/>
                        <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
                            <div class="md:col-span-12 text-center">
                                <nav>
                                    <ul class="inline-flex items-center -space-x-px">
                                        <li>
                                            <NuxtLink :to="[]" class="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                                <i class="mdi mdi-chevron-left text-[20px]"></i>
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink :to="[]" class="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">1</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink :to="[]" class="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">2</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink :to="[]" aria-current="page" class="z-10 size-8 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm shadow-slate-100 dark:shadow-slate-800">3</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink :to="[]" class="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">4</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink :to="[]" class="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                                <i class="mdi mdi-chevron-right text-[20px]"></i>
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-4 md:col-span-4 md:order-2 order-1">
                        <CoursesSidebar/>
                    </div>
                </div>
            </div>
            <div class="container relative md:mt-24 mt-16">
                <NewsLetter/>
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