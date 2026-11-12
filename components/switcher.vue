<template>
    <div>
        <div class="fixed top-1/4 -right-2 z-3">
            <span class="relative inline-block rotate-90">
                <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" @change="changeMode($event)"/>
                <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-[60px] h-8" for="chk">
                    <i class="iconoir-half-moon text-yellow-500 align-middle ps-1 text-[16px] relative z-1"></i>
                    <i class="iconoir-sun-light text-yellow-500 align-middle pe-1 text-[16px] relative z-1"></i>
                    <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>

        <div class="fixed top-[40%] -right-3 z-50">
            <NuxtLink :to="[]" id="switchRtl">
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" @click="changeThem($event)">LTR</span>
                <span class="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden" @click="changeThem($event)">RTL</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

    const htmlTag = ref()

    onMounted(()=>{
        htmlTag.value = document.getElementsByTagName("html")[0]
    })

    const changeThem = (e) => {
        e.preventDefault();
        
        if (event.target.innerText === "LTR") {
        htmlTag.value.dir = "ltr"
        }
        else {
        htmlTag.value.dir = "rtl"
        } 
    }

    const changeMode = (e) => {
        e.preventDefault();
        if (htmlTag.value.className.includes("dark")) {
            htmlTag.value.className = 'light'
        } else {
            htmlTag.value.className = 'dark'
        }
    }
</script>
