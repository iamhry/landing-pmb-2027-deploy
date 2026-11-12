<template>
    <div class="fixed bottom-3 end-3 z-10">
        <NuxtLink to="/" class="size-8 flex bg-violet-600 text-white justify-center items-center rounded-full back-button"><i data-feather="arrow-left" class="size-4"></i></NuxtLink>
    </div>
</template>

<script setup>
import feather from 'feather-icons'
    import { onMounted } from 'vue';

    onMounted(()=>{
        feather.replace()
    })
</script>
