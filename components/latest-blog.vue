<template>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">                    
        <div v-for="(item, index) in blogData.slice(0,3)" :key="index" class="group relative h-fit overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 transition-all duration-500">
            <div class="relative overflow-hidden">
                <img :src="item.image" class="" alt=""/>
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

                    <NuxtLink :to="`blog-detail/${item.id}`" class="text-lg hover:text-violet-600 font-medium">{{item.title}}</NuxtLink>
                    
                    <div class="mt-3">
                        <NuxtLink :to="`blog-detail/${item.id}`" class="btn btn-link hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">Read More <i class="mdi mdi-arrow-right"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { blogData } from '@/data/data';
</script>