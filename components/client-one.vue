<template>
    <div class="flex justify-center relative mt-6">
        <div class="relative w-full">
            <div class="tiny-three-item">
                <div v-for="(item, index) in clientData" :key="index" class="tiny-slide">
                    <div class="mx-3">
                        <ul class="text-md font-medium text-amber-500 list-none mb-2">
                            <li v-for="(el, index) in item.rate" :key="index" class="inline"><i :class="el"></i></li>
                        </ul>

                        <p class="text-lg text-slate-400">{{item.desc}}</p>

                        <div class="flex items-center mt-3">
                            <img :src="item.image" class="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800" alt=""/>
                            <div class="ms-2">
                                <h6 class="font-semibold">{{item.name}}</h6>
                                <span class="text-slate-400 text-sm">{{item.position}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { tns } from 'tiny-slider';
        
    import { clientData } from '@/data/data';

    onMounted(()=>{
        tns({
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
    });
    })
</script>
