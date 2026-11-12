<template>
    <div>
        <Navbar :navlight="true"/>
        <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" :style="{backgroundImage:`url(${bg})`}">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Blogs & News</h3>
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
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6">
                    <div class="lg:col-span-8 md:order-1 order-2">
                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                            <div v-for="(item, index) in blogData" :key="index" class="group relative h-fit overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 transition-all duration-500">
                                <div class="relative overflow-hidden">
                                    <img :src="item.image" class="" alt="">
                                    <div class="absolute start-6 bottom-6">
                                        <span class="bg-violet-600 text-white text-[12px] px-2.5 py-1 rounded-md h-4">{{item.tag}}</span>
                                    </div>
                                </div>
                                <div class="relative p-6">
                                    <div class="">
                                        <div class="flex justify-between mb-4">
                                            <span class="text-slate-400 text-sm flex items-center"><i data-feather="calendar" class="size-4 me-1"></i> {{item.date}}</span>
                                            <span class="text-slate-400 text-sm flex items-center"><i data-feather="clock" class="size-4 me-1"></i> 5 Min</span>
                                        </div>
                                        <NuxtLink :to="`/blog-detail/${item.id}`" class="text-lg hover:text-violet-600 font-medium">{{item.title}}</NuxtLink>
                                        <div class="mt-3">
                                            <NuxtLink :to="`/blog-detail/${item.id}`" class="btn btn-link hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">Read More <i class="mdi mdi-arrow-right"></i></NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

                    <div class="lg:col-span-4 md:order-2 order-1">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1">
                    <div class="relative bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-lg shadow shadow-slate-200 dark:shadow-slate-800 overflow-hidden">
                        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                            <div class="md:text-start text-center z-1">
                                <h3 class="mb-2 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Subscribe to Newsletter!</h3>
                                <p class="text-slate-400 max-w-xl mx-auto">Subscribe to get latest updates and information.</p>
                            </div>
            
                            <div class="z-1">
                                <form class="relative mx-auto max-w-xl">
                                    <input type="email" id="subemail" name="name" class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800" placeholder="Enter your email id.."/>
                                    <button type="submit" class="h-12 px-6 tracking-wide items-center justify-center font-medium bg-violet-600 text-white rounded-full absolute top-[1px] end-[1px]">Subcribe Now</button>
                                </form>
                            </div>
                        </div>
            
                        <div class="absolute -top-5 -start-5">
                            <div class="iconoir-mail lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                        </div>
            
                        <div class="absolute -bottom-5 -end-5">
                            <div class="iconoir-edit-pencil lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>

        <ScrollToTop/>
        <Switcher/>
        
    </div>
</template>

<script setup>
    import { blogData } from '@/data/data';
    import bg from '@/assets/images/bg/3.jpg'
</script>
