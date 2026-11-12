<template>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div v-for="(item, index) in categories" :key="index" class="group flex items-center bg-white hover:bg-gradient-to-tr hover:to-violet-600 hover:from-fuchsia-600 dark:bg-slate-900 rounded-md shadow shadow-slate-200 dark:shadow-slate-800 duration-500 p-5">
            <div class="size-12 bg-violet-600/5 group-hover:bg-white/20 text-violet-600 group-hover:text-white rounded-md flex align-middle justify-center items-center shadow-sm">
                <i class="text-2xl" :class="item.icon"></i>
            </div>

            <div class="content ms-3">
                <NuxtLink :to="[]" class="title text-lg font-semibold group-hover:text-white">{{item.title}}</NuxtLink>
                <p class="text-slate-400 group-hover:text-white/50">10+ Courses</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { categories } from '@/data/data';
</script>
