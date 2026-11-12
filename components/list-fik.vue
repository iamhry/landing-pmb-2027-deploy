<template>
    <div :class="grid">
        <div v-for="(item, index) in data" :key="index" class="group bg-white dark:bg-slate-900 rounded-md shadow-md hover:shadow-lg 
             shadow-slate-100 dark:shadow-slate-800 transition duration-500 w-full mx-auto">
            <div class="md:flex">

                <!-- GAMBAR -->
                <div class="p-3 md:pe-0 md:pb-3 pb-0 relative md:shrink-0">
                    <img :src="item.image" class="rounded-md size-full object-cover md:w-48" alt="">
                </div>

                <!-- KONTEN -->
                <div class="p-6 w-full">

                    <!-- TITLE -->
                    <NuxtLink :to="`/course-detail-two/${item.id}`"
                        class="text-lg font-medium block hover:text-violet-600">
                        {{ item.title }}
                    </NuxtLink>

                    <!-- AKREDITASI -->
                    <span v-if="item.akreditasi" class="inline-block mt-2 px-3 py-1 text-xs font-semibold
                   bg-blue-100 text-blue-700 rounded-full">
                        Akreditasi: {{ item.akreditasi }}
                    </span>

                    <!-- BUTTON -->
                    <div class="flex justify-between md:mt-12 mt-3">
                        <a :href="item.fileAkreditasi" target="_blank" class="h-8 px-3 inline-flex items-center justify-center tracking-wide 
           text-sm font-medium rounded-md bg-violet-600/10 text-violet-600 
           hover:bg-violet-600 hover:text-white transition">
                            File Akreditasi
                            <i class="mdi mdi-arrow-right ms-1"></i>
                        </a>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    grid: String,
    data: Array
})
</script>
