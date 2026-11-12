<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div v-for="(item, index) in teamData.slice(0,4)" :key="index" class="group text-center">
            <div class="relative inline-block mx-auto rounded-full overflow-hidden">
                <img :src="item.image" class="" alt=""/>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                <ul class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <li v-for="(el, index) in item.social" :key="index" class="inline mx-[2px]"><a href="" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-violet-600 text-white rounded-full"><i :data-feather="el" class="size-4"></i></a></li>
                </ul>
            </div>

            <div class="content mt-3">
                <NuxtLink :to="[]" class="text-lg font-medium hover:text-violet-600 duration-500">{{item.name}}</NuxtLink>
                <p class="text-slate-400">{{item.position}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { teamData } from '@/data/data';
</script>
