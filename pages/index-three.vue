<template>
    <div>
        <Navbar :navlight="true"/>
        <section class="relative table w-full md:py-44 py-36 bg-no-repeat bg-center bg-cover" :style="{backgroundImage : `url(${bg})`}">
            <div class="absolute inset-0 bg-slate-950/90"></div>
            <div class="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-cover" :style="{backgroundImage : `url(${map})`}"></div>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-6">
                    <div class="lg:col-span-7 md:col-span-6">
                        <h1 class="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl text-white mb-5">Get Quality 
                            <vue-typewriter-effect class="font-bold text-yellow-400 typewrite" :strings="['Courses', 'Education']" />
                            <br> Through <span class="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-yellow-400/50 after:-z-1 z-1 relative">1-on-1</span> <br> Online Classes</h1>
                        <p class="text-white/50 text-lg max-w-xl">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                        
                        <div class="mt-6">
                            <form class="relative max-w-xl">
                                <input type="email" id="subemail" name="name" class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-white rounded-full bg-slate-900/70 border border-slate-800" placeholder="Enter your email id.."/>
                                <button type="submit" class="h-12 px-6 tracking-wide items-center justify-center font-medium bg-yellow-500 text-white rounded-full absolute top-[1px] end-[1px]">Subcribe Now</button>
                            </form>
                        </div>
                    </div>

                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-1 relative xl:ms-20">
                            <ClientOnly>
                                <CoursesSliderTwo/>
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Discover Powerful Features</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <AppFeature/>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore 1500+ Free Education Courses</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <Categories/>
            </div>
        </section>

        <ClientOnly>
            <CtaOne/>
        </ClientOnly>

        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Students Say ?</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <ClientOnly>
                    <ClientOne/>
                </ClientOnly>
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
    import VueTypewriterEffect from "vue-typewriter-effect";
    import bg from '@/assets/images/bg/4.jpg'
    import map from '@/assets/images/map.svg'
</script>
