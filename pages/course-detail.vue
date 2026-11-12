<template>
    <div>
        <Navbar/>

        <section class="relative pt-32 md:pb-24 pb-16">
            <div class="container">
                <div class="md:flex justify-center">
                    <div class="lg:w-3/5">
                        <h3 class="text-3xl leading-normal font-medium">{{data && data.title ? data.title : 'Become a Professional Graphic Designer'}}</h3>
                        <div class="flex items-center mx-auto mt-3">
                            <img :src="data && data.user ? data.user : team2" class="size-8 rounded-full shadow-md dark:shadow-gray-800" alt=""/>
                            <NuxtLink :to="[]" class="font-semibold block ms-3">Calvin Carlo</NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="md:flex justify-center text-center">
                    <div class="lg:w-4/5">
                        <ul class="tracking-[0.5px] mb-0 inline-block mt-4">
                            <li class="inline-flex items-center mt-2 me-5">
                                <i class="iconoir-clock text-lg"></i>
                                <span class="text-slate-400 ms-2">10 Weeks</span>
                            </li>
        
                            <li class="inline-flex items-center mt-2 me-5">
                                <i class="iconoir-wifi text-lg"></i>
                                <span class="text-slate-400 ms-2">All Levels</span>
                            </li>
                            
                            <li class="inline-flex items-center mt-2 me-5">
                                <i class="iconoir-book text-lg"></i>
                                <span class="text-slate-400 ms-2">16 Lessons</span>
                            </li>
                            
                            <li class="inline-flex items-center mt-2 me-5">
                                <i class="iconoir-cube text-lg"></i>
                                <span class="text-slate-400 ms-2">0 Quiz</span>
                            </li>
                            
                            <li class="inline-flex items-center mt-2 me-5">
                                <i class="iconoir-open-book text-lg"></i>
                                <span class="text-slate-400 ms-2">5 Students</span>
                            </li>
                            
                            <li class="inline-flex items-center mt-2">
                                <i class="iconoir-cart text-lg"></i>
                                <a href="" target="_blank" class="text-violet-600 ms-2">Enroll Now</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="md:flex justify-center mt-6">
                    <div class="lg:w-full">
                        <div class="relative">
                            <img :src="data && data.image ? data.image : courses1" class="rounded-lg shadow-md dark:shadow-gray-800" alt=""/>
                            <VideoModal/>
                        </div>
                    </div>
                </div>

                <div class="md:flex justify-center mt-10">
                    <div class="lg:w-3/5">
                        <h5 class="text-2xl font-semibold mb-4">Overview</h5>

                        <p class="text-slate-400 mb-3">Ooh, name it after me! Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. Why would I want to know that? What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food.</p>
                        <p class="text-slate-400 mb-3">It's a T. It goes “tuh”. You seem malnourished. Are you suffering from intestinal parasites? I suppose I could part with 'one' and still be feared… And I'd do it again! And perhaps a third time! But that would be it.</p>
                        <p class="text-slate-400 mb-3">I'm just glad my fat, ugly mama isn't alive to see this day. I can explain. It's very valuable. I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him.</p>
                        <p class="text-slate-400 mb-3">Bender, we're trying our best. Kif might! You can crush me but you can't crush my spirit! Kif, I have mated with a woman. Inform the men. I'm Santa Claus!</p>
                        <p class="text-slate-400">What are you hacking off? Is it my torso?! 'It is!' My precious torso! You, a bobsleder!? That I'd like to see! And I'd do it again! And perhaps a third time! But that would be it. My fellow Earthicans, as I have explained in my book 'Earth in the Balance”, and the much more popular ”Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.</p>

                        <img :src="courses2" class="rounded-md shadow mt-4" alt="">

                        <div class="mt-6">
                            <h5 class="text-2xl font-semibold">Curriculum</h5>
                        </div>
        
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Introductions</h5>
    
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow shadow-slate-200 dark:shadow-slate-800 rounded-md">
                                <table class="w-full text-start">
                                    <thead>
                                        <tr>
                                            <th class="px-4 py-5 text-start">Lessons</th>
                                            <th class="px-4 py-5 text-end">Time</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 1</NuxtLink></td>
                                            <td class="p-4 text-end"><span class="bg-violet-600/10 text-violet-600 text-[12px] px-2.5 py-1 rounded-md h-4">Watch Free</span></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 2</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 3</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 4</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
    
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Mastery</h5>
                            
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow shadow-slate-200 dark:shadow-slate-800 rounded-md">
                                <table class="w-full text-start">
                                    <thead>
                                        <tr>
                                            <th class="px-4 py-5 text-start">Lessons</th>
                                            <th class="px-4 py-5 text-end">Time</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 5</NuxtLink></td>
                                            <td class="p-4 text-end"><span class="bg-violet-600/10 text-violet-600 text-[12px] px-2.5 py-1 rounded-md h-4">Watch Free</span></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 6</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 7</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 8</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
    
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Final Thoughts</h5>
                            
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow shadow-slate-200 dark:shadow-slate-800 rounded-md">
                                <table class="w-full text-start">
                                    <thead>
                                        <tr>
                                            <th class="px-4 py-5 text-start">Lessons</th>
                                            <th class="px-4 py-5 text-end">Time</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 9</NuxtLink></td>
                                            <td class="p-4 text-end"><span class="bg-violet-600/10 text-violet-600 text-[12px] px-2.5 py-1 rounded-md h-4">Watch Free</span></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 10</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 11</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 12</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
    
                        <div class="mt-6">
                            <h5 class="text-lg font-semibold mb-4">Bonus</h5>
                            
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow shadow-slate-200 dark:shadow-slate-800 rounded-md">
                                <table class="w-full text-start">
                                    <thead>
                                        <tr>
                                            <th class="px-4 py-5 text-start">Lessons</th>
                                            <th class="px-4 py-5 text-end">Time</th>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 13</NuxtLink></td>
                                            <td class="p-4 text-end"><span class="bg-violet-600/10 text-violet-600 text-[12px] px-2.5 py-1 rounded-md h-4">Watch Free</span></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 14</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 15</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
    
                                        <tr class="border-t border-slate-100 dark:border-slate-800">
                                            <td class="p-4"><NuxtLink :to="[]" class=""><i class="iconoir-clipboard-check text-lg align-middle me-1"></i> Lesson 16</NuxtLink></td>
                                            <td class="p-4 text-end"><i class="iconoir-lock text-lg"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Recent Courses</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <GridCourse :grid="'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6'" :data="coursesData.slice(0,3)"/>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <SubScribe/>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { coursesData } from '~/data/data';
import team2 from '@/assets/images/team/2.jpg'
import courses1 from '@/assets/images/course/1.jpg'
import courses2 from '@/assets/images/course/2.jpg'

const route = useRoute()

const data = coursesData.find((item)=>item.id === parseInt(route.params.id))

</script>
