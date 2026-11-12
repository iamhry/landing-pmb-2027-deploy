<template>
    <div>

        <Navbar :navlight="true"/>

        <section class="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" :style="{backgroundImage:`url(${bg})`}">
            <div class="absolute inset-0 bg-black opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Frequently Asked Questions</h3>
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
                <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div class="lg:col-span-4 md:col-span-5">
                        <div class="rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                            <ul class="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li class="navbar-item p-0" :class="activeSection === 'tech' ? 'active' : ''"><a href="#tech" class="text-base font-medium navbar-link">Buying Questions</a></li>
                                <li class="navbar-item mt-3 p-0" :class="activeSection === 'general' ? 'active' : ''"><a href="#general" class="text-base font-medium navbar-link">General Questions</a></li>
                                <li class="navbar-item mt-3 p-0" :class="activeSection === 'payment' ? 'active' : ''"><a href="#payment" class="text-base font-medium navbar-link">Payments Questions</a></li>
                                <li class="navbar-item mt-3 p-0" :class="activeSection === 'support' ? 'active' : ''"><a href="#support" class="text-base font-medium navbar-link">Support Questions</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="lg:col-span-8 md:col-span-7">
                        <div id="tech">
                            <h5 class="text-xl font-semibold">Buying Product</h5>
                            <FaqOne/>
                        </div>

                        <div id="general" class="mt-6">
                            <h5 class="text-xl font-semibold">General Questions</h5>
                            <FaqOne/>
                        </div>

                        <div id="payment" class="mt-6">
                            <h5 class="text-xl font-semibold">Payments Questions</h5>
                            <FaqOne/>
                        </div>

                        <div id="support" class="mt-6">
                            <h5 class="text-xl font-semibold">Support Questions</h5>
                            <FaqOne/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative lg:mt-24 mt-16">
                <GetInTouch/>
            </div>
        </section>

        <Footer/>

        <Switcher/>

        <ScrollToTop/>
    </div>
</template>

<script setup>

    import bg from '@/assets/images/bg/3.jpg'

    const sections = ref([
        { id: "tech", name: "Buying Questions" },
        { id: "general", name: "General Questions" },
        { id: "payment", name: "Payments Questions" },
        { id: "support", name: "Support Questions" },
    ])

    const activeSection = ref(null)

    onMounted(() => {
        const options = {
            root: null, 
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
            });
        }, options);

        sections.value.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });
    });

</script>
