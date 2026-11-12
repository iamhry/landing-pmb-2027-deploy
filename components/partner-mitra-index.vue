<template>
    <div class="container relative">
        <div class="grid md:grid-cols-6 grid-cols-2 items-start gap-6">
            <div 
                v-for="(item, index) in partnerMitra" 
                :key="index" 
                class="mx-auto py-4 h-16 flex items-start justify-center"
            >
                <img :src="item" class="h-12" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { partnerMitra } from '@/data/data';
</script>
