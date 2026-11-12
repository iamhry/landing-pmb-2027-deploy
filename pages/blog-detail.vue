<template>
    <div>
        <Navbar :navlight="true"/>

        <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" :style="{backgroundImage:`url(${bg})`}">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white mb-3">{{data && data.title ? data.title : 'The Future of Remote Work: Trending Now'}}</h3>
                    <ul class="list-none mt-6">
                        <li class="inline-block text-white/50 mx-5"> <span class="text-white block">Author :</span> <span class="block">Calvin Carlo</span></li>
                        <li class="inline-block text-white/50 mx-5"> <span class="text-white block">Date :</span> <span class="block">{{data && data.date ? data.date : '19th June 2025'}}</span></li>
                        <li class="inline-block text-white/50 mx-5"> <span class="text-white block">Time :</span> <span class="block">8 Min Read</span></li>
                    </ul>
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
                        <div class="relative overflow-hidden rounded-xl shadow dark:shadow-gray-800">

                            <img :src="data && data.image ? data.image : blog1" alt=""/>

                            <div class="p-6">
                                <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p class="text-slate-400 italic border-x-4 border-violet-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                <p class="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            </div>
                        </div>

                        <div class="p-6 rounded-md shadow dark:shadow-gray-800 mt-6">
                            <h5 class="text-lg font-semibold">Leave A Comment:</h5>

                            <form class="mt-6">
                                <div class="grid lg:grid-cols-12 lg:gap-6">
                                    <div class="lg:col-span-6 mb-5">
                                        <div class="text-start">
                                            <label for="name" class="font-semibold">Your Name:</label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                                <input name="name" id="name" type="text" class="w-full py-2 px-3 border border-slate-100 dark:border-slate-800 focus:border-violet-600/30 dark:focus:border-violet-600/30 bg-transparent focus:outline-none rounded-md h-10 ps-11" placeholder="Name :"/>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="lg:col-span-6 mb-5">
                                        <div class="text-start">
                                            <label for="email" class="font-semibold">Your Email:</label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
                                                <input name="email" id="email" type="email" class="w-full py-2 px-3 border border-slate-100 dark:border-slate-800 focus:border-violet-600/30 dark:focus:border-violet-600/30 bg-transparent focus:outline-none rounded-md h-10 ps-11" placeholder="Email :"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <div class="mb-5">
                                        <div class="text-start">
                                            <label for="comments" class="font-semibold">Your Comment:</label>
                                            <div class="form-icon relative mt-2">
                                                <i data-feather="message-circle" class="size-4 absolute top-3 start-4"></i>
                                                <textarea name="comments" id="comments" class="w-full py-2 px-3 border border-slate-100 dark:border-slate-800 focus:border-violet-600/30 dark:focus:border-violet-600/30 bg-transparent focus:outline-none rounded-md ps-11 h-28" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" class="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white w-full">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div class="lg:col-span-4 md:order-2 order-1">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Related Posts</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <LatestBlog/>
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
    import { useRoute } from 'vue-router'
    import blog1 from '@/assets/images/course/2.jpg'
    import bg from '@/assets/images/bg/3.jpg'
    import { blogData } from '@/data/data';

    const route = useRoute()

    const data = blogData.find((item)=>item.id === parseInt(route.params.id))
</script>