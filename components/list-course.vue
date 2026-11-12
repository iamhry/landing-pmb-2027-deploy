<template>
    <div :class="grid">
        <div v-for="(item, index) in data" :key="index" class="group bg-white dark:bg-slate-900 rounded-md shadow-md hover:shadow-lg shadow-slate-100 dark:shadow-slate-800 transition duration-500 w-full mx-auto">
            <div class="md:flex">
                <div class="p-3 md:pe-0 md:pb-3 pb-0 relative md:shrink-0">
                    <img :src="item.image" class="rounded-md size-full object-cover md:w-48" alt=""/>
                    <div class="absolute start-6 top-6">
                        <span class="bg-violet-600 text-white text-[12px] px-2.5 py-1 rounded-md h-4 mx-[2px]">{{item.tag1}}</span>
                        <span class="bg-violet-600 text-white text-[12px] px-2.5 py-1 rounded-md h-4 mx-[2px]">{{item.tag2}}</span>
                    </div>

                    <div class="absolute md:bottom-5 -bottom-5 md:-end-5 end-6">
                        <span class="bg-violet-600 text-white size-10 flex items-center justify-center rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 font-semibold">${{item.amount}}</span>
                    </div>
                </div>

                <div class="p-6 w-full">
                    <div class="flex mb-3">
                        <span class="text-slate-400 text-sm flex items-center"><i data-feather="book" class="text-slate-900 dark:text-white size-[14px] me-1"></i>{{item.lessons}} Lessons</span>
                        <span class="text-slate-400 text-sm flex items-center ms-3"><i data-feather="users" class="text-slate-900 dark:text-white size-[14px] me-1"></i>{{item.students}} Students</span>
                    </div>

                    <NuxtLink :to="`/course-detail-two/${item.id}`" class="text-lg hover:text-violet-600 font-medium">{{item.title}}</NuxtLink>

                    <p class="text-slate-400 mt-2">{{item.desc}}</p>

                    <div class="flex justify-between md:mt-12 mt-3">
                        <span class="flex items-center"><img :src="item.user" class="size-8 rounded-full shadow shadow-slate-100 dark:shadow-slate-800 me-2" alt=""> <a href="" class="hover:text-violet-600 font-medium"> {{item.name}}</a></span>
                        <NuxtLink :to="`/course-detail-two/${item.id}`" class="h-8 px-3 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white text-sm">Explore <i class="mdi mdi-arrow-right align-middle ms-1"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'

    defineProps({
        grid:String,
        data:[]
    })
</script>
