<template>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-8">
        <div v-for="(item, index) in beasiswa" :key="index"
            class="p-8 bg-white dark:bg-slate-900 shadow-xl dark:shadow-gray-700 rounded-3xl transition duration-500 hover:scale-[1.03] border-t-4 border-violet-600/50">

            <div class="content text-center">

                <span class="text-gray-900 dark:text-gray-300 font-bold mb-1 block uppercase tracking-wider text-sm">{{
                    item.title }}</span>

                <h4 class="mb-4 text-4xl font-extrabold text-violet-600 ">
                    {{ item.subtitle }}
                </h4>
                <span class="text-gray-400 dark:text-gray-300 font-bold mb-1 block uppercase tracking-wider text-sm">{{
                    item.subheadtitle }}</span>
                <div class="h-px bg-gray-100 dark:bg-slate-800 mx-auto w-1/2 mb-4"></div>

                <div class="text-slate-600 dark:text-slate-400 mt-3 text-center leading-relaxed" v-html="item.desc"></div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { beasiswa } from '@/data/beasiswa';
</script>