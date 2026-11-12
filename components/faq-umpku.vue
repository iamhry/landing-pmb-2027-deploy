<template>
  <div class="lg:col-span-6 md:col-span-7">
    <div class="relative">

      <!-- GAMBAR UTAMA -->
      <div class="relative md:shrink-0 lg:mx-0 mx-5">
        <img 
          class="object-cover md:w-96 w-80 md:h-[500px] h-72 rounded-lg shadow-md dark:shadow-gray-700"
          :src="about1" 
          alt=""
        />
      </div>

      <!-- GAMBAR KEDUA KANAN BAWAH -->
      <div class="absolute bottom-6 lg:end-6 end-3">
        <img 
          class="object-cover size-40 md:size-48 rounded-lg shadow-md dark:shadow-gray-700"
          :src="about2" 
          alt=""
        />
      </div>

    </div>

    <!-- POPUP VIDEO -->
    <div 
      class="fixed inset-0 z-[999] bg-black/50 flex justify-center items-center"
      :class="open ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-2xl px-4">
        <button 
          class="absolute right-0 -top-4 bg-slate-600 p-1 rounded"
          @click="toggle"
        >
          <i data-feather="x" class="text-slate-300"></i>
        </button>

        <div class="bg-white dark:bg-gray-700 rounded-lg shadow">
          <div class="p-0">
            <iframe 
              class="w-full h-[300px] md:h-[400px]"
              src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
    import { ref } from 'vue'

    import about1 from '@/assets/images/course/cs-1.png'
    import about2 from '@/assets/images/course/cs-3.jpg'
    import team1 from '@/assets/images/team/1.jpg'
    import team2 from '@/assets/images/team/2.jpg'
    import team3 from '@/assets/images/team/3.jpg'
    import team4 from '@/assets/images/team/4.jpg'
    import team5 from '@/assets/images/team/5.jpg'

    const teamImg = ref([team1,team2,team3,team4,team5])

    const open = ref(false)

    const toggle = () =>{
        open.value = !open.value
    }
</script>
