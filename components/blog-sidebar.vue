<template>
    <div class="sticky top-20 p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
        <form>
            <div>
                <label for="searchname" class="font-semibold">Search Blog</label>
                <div class="relative mt-2">
                    <i data-feather="search" class="absolute top-[10px] start-3 size-5"></i>
                    <input name="search" id="searchname" type="text" class="w-full py-2 px-3 border border-slate-100 dark:border-slate-800 focus:border-violet-600/30 dark:focus:border-violet-600/30 bg-transparent focus:outline-none rounded-md h-10 ps-10" placeholder="Search">
                </div>
            </div>
        </form>

        <div class="mt-6">
            <h5 class="font-semibold">Recent Post</h5>
            <div v-for="(item, index) in blogRecentPost" :key="index" class="flex items-center mt-4">
                <img :src="item.image" class="h-16 rounded-md shadow dark:shadow-gray-800" alt=""/>

                <div class="ms-3">
                    <NuxtLink :to="[]" class="font-medium hover:text-violet-600">{{item.title}}</NuxtLink>
                    <p class="text-sm text-slate-400">{{item.date}}</p>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <h5 class="font-semibold">Social</h5>
            <ul class="list-none mt-4">
                <li v-for="(item, index) in socialData" :key="index" class="inline mx-[2px]"><NuxtLink :to="[]" class="size-7 inline-flex justify-center items-center text-slate-400 hover:text-white border border-slate-100 dark:border-slate-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><i :data-feather="item" class="size-4"></i></NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import feather from 'feather-icons'
    import { onMounted } from 'vue';
    import { blogRecentPost, socialData } from '@/data/data';

    onMounted(()=>{
        feather.replace()
    })
</script>
