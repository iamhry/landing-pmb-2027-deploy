<template>
    <div>
        <section class="md:h-screen py-36 flex items-center relative bg-no-repeat bg-center bg-cover" :style="{backgroundImage:`url(${bg})`}">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
            <div class="container relative z-3">
                <div class="flex">
                    <div class="max-w-[400px] w-full p-6 bg-white dark:bg-slate-900 shadow-md shadow-slate-100 dark:shadow-slate-800 rounded-md">
                        <NuxtLink to="/"><img :src="logo" alt=""/></NuxtLink>
                        <h5 class="my-6 text-xl font-semibold">Reset Your Password</h5>
                        <div class="grid grid-cols-1">
                            <p class="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                            <form class="text-start">
                                <div class="grid grid-cols-1">
                                    <div class="mb-4">
                                        <label class="font-medium" for="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email" class="w-full py-2 px-3 border border-slate-100 dark:border-slate-800 focus:border-violet-600/30 dark:focus:border-violet-600/30 bg-transparent focus:outline-none rounded-md h-10 mt-3" placeholder="name@example.com">
                                    </div>

                                    <div class="mb-4">
                                        <NuxtLink :to="[]" class="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white w-full">Send</NuxtLink>
                                    </div>

                                    <div class="text-center">
                                        <span class="text-slate-400 me-2">Remember your password ? </span><NuxtLink to="/login" class="text-black dark:text-white font-bold">Sign in</NuxtLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <BackToHome/>
    </div>
</template>

<script setup>
    import bg from '@/assets/images/bg/2.jpg'
    import logo from '@/assets/images/logo-icon-64.png'
</script>
