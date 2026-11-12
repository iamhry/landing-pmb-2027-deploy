<template>
    <footer class="relative bg-slate-900 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid grid-cols-1">
                <div class="relative py-16">
                    <div class="relative w-full">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-6">
                            <div class="lg:col-span-4 md:col-span-12">
                                <NuxtLink :to="[]" class="text-[22px] focus:outline-none">
                                    <img :src="logo" alt="" class="w-30 h-20" />
                                </NuxtLink>
                                <p class="mt-1 text-gray-300 font-weight-bold"> <strong> Penerimaan Mahasiswa
                                        Baru</strong></p>

                                <div class="flex mt-6">
                                    <i class="iconoir-map-pin align-middle text-2xl text-violet-600 me-2"></i>
                                    <div class="">
                                        <h6 class="text-gray-300">Jl. Tulang Bawang Sel. No.26, Kadipiro, Banjarsari,
                                            Kota Surakarta, Jawa Tengah 57136</h6>
                                    </div>
                                </div>
                                <div class="flex mt-4">
                                    <i class="iconoir-mail align-middle text-2xl text-violet-600 me-2"></i>
                                    <div class="">
                                        <a href="tel:+152534-468-854"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">info@umpku.ac.id</a>
                                    </div>
                                </div>
                                <div class="flex mt-4">
                                    <i class="iconoir-phone align-middle text-2xl text-violet-600 me-2"></i>
                                    <div class="">
                                        <a href="tel:+0271734955"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">0271
                                            734955</a>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:col-span-2 md:col-span-3">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold text-lg">Tautan Penting</h5>

                                <ul class="list-none footer-list mt-6">
                                    <li v-for="(item, index) in footerLink1" :key="index" class="mt-[10px] frist:mt-0">
                                        <i class="iconoir-nav-arrow-right text-gray-400 align-middle me-1"></i>
                                        <NuxtLink :to="[]"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{{ item }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <div class="lg:col-span-2 md:col-span-3">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold text-lg">Profil Kampus</h5>

                                <ul class="list-none footer-list mt-6">
                                    <li v-for="(item, index) in footerLink2" :key="index" class="mt-[10px] frist:mt-0">
                                        <i class="iconoir-nav-arrow-right text-gray-400 align-middle me-1"></i>
                                        <NuxtLink :to="[]"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{{ item }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <div class="lg:col-span-4 md:col-span-6">
                                <h5 class="tracking-[1px] text-gray-100 font-semibold text-lg">Ikuti Kami</h5>
                                

                                <ul class="list-none mt-4">
                                    <li v-for="(item, index) in footerSocial" :key="index" class="inline mx-[2px]"><a
                                            :href="item.link" target="_blank"
                                            class="size-7 inline-flex justify-center items-center text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                            <i   :class="item.icon"></i>
                                            </a>
                                        </li>
                                </ul>
                                <p class="mt-5 text-gray-400 text-sm mb-4">
                                    Terhubung dengan kami untuk update terbaru seputar pendaftaran dan kegiatan kampus.
                                </p>
                                <form class="flex">
    <input type="email" placeholder="Email Anda" class="rounded-l px-3 py-2 text-gray-900" />
    <button type="submit" class="bg-violet-600 text-white px-4 rounded-r">Daftar</button>
  </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
            <div class="container relative text-center">
                <div class="grid md:grid-cols-2 items-center gap-6">
                    <div class="md:text-start text-center">
                        
                        <p class="mb-0 text-gray-300">
                            <FooterCopyright />
                        </p>
                    </div>

                    <ul class="list-disc footer-list md:text-end text-center space-x-3">
                        <!-- <li class="inline-block"><i class="mdi mdi-circle-medium text-gray-400"></i>
                            <NuxtLink to="/terms" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                Terms</NuxtLink>
                        </li>
                        <li class="inline-block mt-[10px] md:mt-0"><i class="mdi mdi-circle-medium text-gray-400"></i>
                            <NuxtLink to="/privacy" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                Privacy</NuxtLink>
                        </li>
                        <li class="inline-block mt-[10px] md:mt-0"><i class="mdi mdi-circle-medium text-gray-400"></i>
                            <NuxtLink to="/login" class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                                Login</NuxtLink>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

import { ref } from 'vue';
import logo from '@/assets/images/logo/umpku_logo_2025.png'
import app from '@/assets/images/app.png'
import play from '@/assets/images/play.png'
import { footerLink1, footerLink2, footerSocial } from '@/data/data';

const year = ref(new Date().getFullYear());

</script>
