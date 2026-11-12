<template>
    <div>
        <Navbar :navlight="true"/>

        <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" :style="{backgroundImage:`url(${bg})`}">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Pricing Plans</h3>
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

        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <div class="lg:flex justify-center">
                    <div class="lg:w-4/5">
                        <div class="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-md shadow-slate-100 dark:shadow-slate-800 transition-all duration-500">
                            <div class="md:w-36">
                                <h3 class="text-xl text-violet-600 font-semibold">Weekly</h3>
                        
                                <div class="flex mt-3">
                                    <span class="text-lg">$</span>
                                    <span class="text-2xl font-semibold">9</span>
                                    <span class="text-lg self-end">/ Week</span>
                                </div>
                            </div>

                            <ul class="list-none">
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Full Access</li>
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Source Files</li>
                            </ul>

                            <ul class="list-none">
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Free Appointments</li>
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Enhanced Security</li>
                            </ul>

                            <div class="md:w-36 md:text-end">
                                <NuxtLink :to="[]" class="h-8 px-3 tracking-wide inline-flex items-center justify-center font-medium rounded-md border border-violet-600/20 hover:bg-violet-600 text-violet-600 hover:text-white text-sm md:mt-0 mt-4">Login Now</NuxtLink>
                            </div>
                        </div>

                        <div class="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-md shadow-slate-100 dark:shadow-slate-800 transition-all duration-500 mt-6">
                            <div class="md:w-36">
                                <h3 class="text-xl text-violet-600 font-semibold">Monthly</h3>
                        
                                <div class="flex mt-3">
                                    <span class="text-lg">$</span>
                                    <span class="text-2xl font-semibold">29</span>
                                    <span class="text-lg self-end">/ Month</span>
                                </div>
                            </div>

                            <ul class="list-none">
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Full Access</li>
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Source Files</li>
                            </ul>

                            <ul class="list-none">
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Free Appointments</li>
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Enhanced Security</li>
                            </ul>

                            <div class="md:w-36 md:text-end">
                                <NuxtLink :to="[]" class="h-8 px-3 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white text-sm md:mt-0 mt-4">Join Now</NuxtLink>
                            </div>
                        </div>

                        <div class="group md:flex items-center justify-between p-6 rounded-lg shadow hover:shadow-md shadow-slate-100 dark:shadow-slate-800 transition-all duration-500 mt-6">
                            <div class="md:w-36">
                                <h3 class="text-xl text-violet-600 font-semibold">Yearly</h3>
                        
                                <div class="flex mt-3">
                                    <span class="text-lg">$</span>
                                    <span class="text-2xl font-semibold">299</span>
                                    <span class="text-lg self-end">/ Year</span>
                                </div>
                            </div>

                            <ul class="list-none">
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Full Access</li>
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Source Files</li>
                            </ul>

                            <ul class="list-none">
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Free Appointments</li>
                                <li class="text-slate-400 mt-2"><span class="text-violet-600 text-lg me-2"><i class="iconoir-check-circle align-middle"></i></span>Enhanced Security</li>
                            </ul>

                            <div class="md:w-36 md:text-end">
                                <NuxtLink :to="[]" class="h-8 px-3 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white text-sm md:mt-0 mt-4">Subscribe Now</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
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
                <GetInTouch/>
            </div>
        </section>

        <Footer/>

        <ScrollToTop/>

        <Switcher/>

    </div>
</template>

<script setup>
    import bg from '@/assets/images/bg/3.jpg';
</script>