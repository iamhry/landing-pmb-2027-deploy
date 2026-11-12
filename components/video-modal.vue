<template>
    <div>
        <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
            <NuxtLink :to="[]" @click="toggle" class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-violet-600">
                <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
            </NuxtLink>
        </div>

        <div class="fixed w-full h-[100vh] top-0 left-0 z-999" :class="open ? '' : 'hidden'" style="background-color: rgba(0, 0, 0, 0.5);">
            <div class="w-full h-full flex justify-center items-center">
                <div class="relative px-4 w-full max-w-2xl h-auto">
                    <button class="absolute right-0 -top-4 bg-slate-600 p-[2px] rounded z-[9999]" @click="toggle"><i data-feather="x" class="text-slate-300"></i></button>
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-0">
                            <iframe width="750" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const open = ref(false)

    const toggle = () =>{
        open.value = !open.value
    }
</script>
