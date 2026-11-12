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
                    <div class="text-slate-400 dark:text-gray-400"
                         v-html="parseDesc(item.desc)"></div> <!-- ⬅️ DIGANTI -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { faqData } from '@/data/data';

    const activeIndex = ref(1);
   // ===============================
// ⬇️ BAGIAN INI DITAMBAH / DIGANTI
// ===============================
const parseDesc = (text) => {
    const lines = text
        .trim()
        .split("<br>")
        .map(l => l.trim())
        .filter(l => l.length > 0)

    let html = ""
    let numbered = [] // untuk 1. 2. 3.
    let dashed = []   // untuk "-"

    const flushNumbered = () => {
        if (numbered.length > 0) {
            html += `<ol class="list-decimal ml-5 my-2">`
            html += numbered.map(item => `<li>${item}</li>`).join("")
            html += `</ol>`
            numbered = []
        }
    }

    const flushDashed = () => {
        if (dashed.length > 0) {
            html += `<ul class="list-disc ml-8 my-2">`
            html += dashed.map(item => `<li>${item}</li>`).join("")
            html += `</ul>`
            dashed = []
        }
    }

    lines.forEach(line => {

        // 🔹 Angka manual "1. ..."
        if (/^\d+\./.test(line)) {
            flushDashed()
            numbered.push(line.replace(/^\d+\.\s*/, "")) 
        }

        // 🔹 Bullet "-"
        else if (line.startsWith("-")) {
            flushNumbered()
            dashed.push(line.replace("-", "").trim())
        }

        // 🔹 Teks biasa
        else {
            flushNumbered()
            flushDashed()
            html += `<p class="mb-2">${line}</p>`
        }
    })

    // Flush terakhir
    flushNumbered()
    flushDashed()

    return html
}



// ===============================
</script>
