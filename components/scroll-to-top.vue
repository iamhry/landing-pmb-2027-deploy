<template>
    <NuxtLink :to="[]" @click="topFunction" id="back-to-top" class="back-to-top fixed rounded-full z-10 bottom-5 end-5 size-8 text-center bg-violet-600 text-white flex justify-center items-center" :class="scroll ? '' : 'hidden'"><i data-feather="arrow-up" class="size-4"></i></NuxtLink>
</template>

<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import feather from 'feather-icons'

    const scroll = ref(false)

    onMounted(()=>{
        window.addEventListener('scroll', handleScroll);
        feather.replace()
    })

    onUnmounted(()=>{
        window.removeEventListener('scroll', handleScroll);
    })

    const handleScroll = () =>{
        if (
            document.body.scrollTop >= 400 ||
            document.documentElement.scrollTop >= 400
        ) {
            scroll.value = true
        } else {
            scroll.value = false
        }
    }

    const topFunction = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

</script>
