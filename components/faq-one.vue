<template>
    <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
        <div v-for="(item, index) in faqData" :key="index" class="relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4 first:mt-0">
            <h2 class="font-medium" id="accordion-collapse-heading-1">
                <button type="button" :class="activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-violet-600' : ''" class="flex justify-between items-center p-5 w-full font-medium text-start" @click="activeIndex = item.id">
                    <span>{{item.title}}</span>
                    <svg data-accordion-icon class="size-5 shrink-0" :class="activeIndex === item.id ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" :class="activeIndex === item.id ? '' : 'hidden'">
                <div class="p-5">
                    <p class="text-slate-400 dark:text-gray-400">{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { faqData } from '@/data/data';

    const activeIndex = ref(1);
</script>
