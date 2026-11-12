<template>
    <div>
        <Navbar />

        <section class="kickoff-hero" aria-labelledby="kickoff-title">
            <div class="container kickoff-grid">
                <p class="kickoff-eyebrow kickoff-rise">Kick Off PMB 2027/2028</p>
                <h1 id="kickoff-title" class="kickoff-title kickoff-rise">
                    <span>Inspirational Talk</span>
                    <span>Beyond the Degree</span>
                </h1>
                <p class="kickoff-tagline kickoff-rise">“Temukan Potensi, Ciptakan Masa Depan”</p>
                <p class="kickoff-desc kickoff-rise">
                    Awali perjalanan menuju masa depan bersama Universitas Muhammadiyah PKU Surakarta melalui kegiatan
                    Kick Off Penerimaan Mahasiswa Baru Tahun Akademik 2027/2028.
                </p>
                <dl class="kickoff-facts kickoff-rise">
                    <div>
                        <dt>Tanggal</dt>
                        <dd>Jumat, 13 November 2026</dd>
                    </div>
                    <div>
                        <dt>Waktu</dt>
                        <dd>08.00 WIB – selesai</dd>
                    </div>
                    <div>
                        <dt>Lokasi</dt>
                        <dd>Auditorium UMPKU</dd>
                    </div>
                </dl>
                <div class="kickoff-speakers kickoff-rise">
                    <p>
                        <span>Welcoming Speech</span>
                        Weni Hastuti, M.Kep., Ph.D.
                        <small>Rektor Universitas Muhammadiyah PKU Surakarta</small>
                    </p>
                    <p>
                        <span>Inspirational Speaker</span>
                        Sherly Annavita
                        <small>Motivator dan Millennial Influencer</small>
                    </p>
                </div>
                <div class="kickoff-actions kickoff-rise">
                    <a class="kickoff-btn kickoff-btn-primary" href="/landing_hero.webp" target="_blank" rel="noopener">
                        Lihat Detail Acara
                    </a>
                    <a class="kickoff-btn kickoff-btn-secondary" href="https://admisi.umpku.ac.id/site/landing" target="_blank" rel="noopener">
                        Daftar PMB 2027/2028
                    </a>
                </div>
                <figure class="kickoff-flyer kickoff-rise">
                    <img
                        src="/landing_hero.webp"
                        width="2048"
                        height="2560"
                        alt="Flyer Kick Off PMB UMPKU 2027/2028, Inspirational Talk Beyond the Degree, Jumat 13 November 2026 di Auditorium UMPKU"
                        fetchpriority="high"
                        decoding="async"
                    />
                </figure>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative lg:mt-18 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <span class="text-violet-600 font-semibold mb-3 uppercase">Informasi Pendaftaran</span>
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Mudah, Cepat,
                        dan Terjangkau untuk Semua</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Proses daftar di sini gampang banget. Tinggal cek
                        syaratnya, ikuti alurnya, dan kamu langsung bisa mulai kuliah.</p>
                </div>
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <FaqAbout />
                    <div class="lg:col-span-6 md:col-span-5">
                        <Syarat />
                    </div>
                </div>
            </div>

            <section class="pt-6">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class=" mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                        Mitra Kami
                    </h3>
                </div>
                <PartnerMitraIndex />

                <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div class="md:col-span-12 text-center">
                        <NuxtLink to="/mitra"
                            class="text-slate-400 hover:text-violet-600 duration-500 ease-in-out font-medium inline-flex items-center">
                            Lihat Mitra Lainnya
                            <i class="mdi mdi-arrow-right align-middle ml-2"></i>
                        </NuxtLink>
                    </div>
                </div>
            </section>
            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
                    <div class="relative">
                        <img :src="bea" class="rounded-lg shadow-lg" alt="Mahasiswi Beasiswa" />
                        <div
                            class="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-200 rounded-full mix-blend-multiply opacity-50 z-[-1]">
                        </div>
                        <div
                            class="absolute -top-10 -right-10 w-32 h-32 bg-violet-200 rounded-full mix-blend-multiply opacity-50 z-[-1]">
                        </div>
                    </div>

                    <div class="mt-8 md:mt-0">
                        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">Beasiswa</h2>
                        <p class="text-red-500 font-semibold text-lg mb-4">Wujudkan Mimpi Kuliah Tanpa Batasan Biaya</p>
                        <p class="text-slate-400 text-sm leading-relaxed">
                            Kami percaya setiap mahasiswa berhak mendapatkan pendidikan terbaik. Temukan beragam
                            <strong>program beasiswa</strong>  yang dirancang untuk mendukung calon mahasiswa berprestasi dan
                            berdedikasi, memastikan aspek finansial tidak lagi menjadi penghalang bagi masa depan Anda.
                        </p>
                        <div class="mt-6">
                            <NuxtLink to="/beasiswa"
                                class="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white hover:bg-violet-700 duration-500 ease-in-out">
                                Lihat Semua Peluang <i class="mdi mdi-arrow-right align-middle ms-1"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="container relative md:mt-24 mt-16">
                <AboutOne :title="true" />
            </div> -->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1  text-center">
                    <span class="text-violet-600 font-semibold mb-3 uppercase">Berita & Event PMB</span>
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Info PMB
                        Terbaru</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Jangan lewatkan berita, pengumuman, dan agenda penting
                        seputar Penerimaan Mahasiswa Baru (PMB). Temukan informasi terkini, tips pendaftaran, dan event
                        kampus untuk mempersiapkan langkah terbaikmu.</p>
                </div>

                <!-- <div class="grid grid-cols-1 relative mt-3">
                    <ClientOnly>
                        <CoursesSlider />
                    </ClientOnly>
                </div> -->

                <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div class="md:col-span-12 text-center">
                        <NuxtLink to="/" class="text-slate-400 hover:text-violet-600 duration-500 ease-in-out">Lihat
                            Berita Lainnya <i class="mdi mdi-arrow-right align-middle"></i></NuxtLink>
                    </div>
                </div>
            </div>

            <!-- <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <span class="text-violet-600 font-semibold mb-3 uppercase">Categories</span>
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore 1500+
                        Free Education Courses</h4>

                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our
                        online education platform pursue a new career.</p>
                </div>

                <Categories />
            </div> -->

        </section>
        <!-- <ClientOnly>
            <CtaOne />
        </ClientOnly> -->

        <section class="relative lg:pb-12 py-0">
            <!-- <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <span class="text-violet-600 font-semibold mb-3 uppercase">Teachers</span>
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert
                        Instructors</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our
                        online education platform pursue a new career.</p>
                </div>
                <ExpertTeam />
            </div> -->

            <div class="container relative lg:mt-0 mb-10 mt-5">
                <div class="grid grid-cols-1 pb-10 text-center">
                    <span class="text-violet-600 font-semibold mb-3 uppercase">Testimoni Alumni</span>
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Apa Kata
                        Mereka?</h3>
                    <!-- <p class="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our
                        online education platform pursue a new career.</p> -->
                </div>
                <ClientOnly>
                    <Alumni />
                </ClientOnly>
            </div>

        </section>

        <Footer />

        <Switcher />

        <ScrollToTop />
    </div>
</template>

<script setup>
import PartnerMitraIndex from '~/components/partner-mitra-index.vue'
import bea from '@/assets/images/team/t-6.webp'
import Syarat from '~/components/syarat.vue'
</script>

<style scoped>
.kickoff-hero {
    position: relative;
    overflow: hidden;
    background:
        radial-gradient(circle at 85% 20%, rgba(255, 101, 0, 0.16), transparent 32%),
        radial-gradient(circle at 8% 80%, rgba(232, 93, 4, 0.08), transparent 28%),
        #fff9f2;
    padding: 7.5rem 0 4.5rem;
    color: #171717;
}

.kickoff-hero::before,
.kickoff-hero::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
}

.kickoff-hero::before {
    width: 18rem;
    height: 18rem;
    top: -5rem;
    left: -6rem;
    border: 1px solid rgba(255, 101, 0, 0.28);
}

.kickoff-hero::after {
    width: 9rem;
    height: 9rem;
    right: 8%;
    bottom: 2rem;
    background: rgba(255, 101, 0, 0.08);
}

.kickoff-grid {
    position: relative;
    z-index: 1;
    display: grid;
    align-items: center;
    gap: 1rem 3rem;
    grid-template-areas:
        "eyebrow"
        "title"
        "tagline"
        "flyer"
        "desc"
        "facts"
        "speakers"
        "actions";
}

.kickoff-eyebrow { grid-area: eyebrow; }
.kickoff-title { grid-area: title; }
.kickoff-tagline { grid-area: tagline; }
.kickoff-desc { grid-area: desc; }
.kickoff-facts { grid-area: facts; }
.kickoff-speakers { grid-area: speakers; }
.kickoff-actions { grid-area: actions; }
.kickoff-flyer { grid-area: flyer; }

.kickoff-eyebrow {
    margin: 0;
    color: #e85d04;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.kickoff-title {
    margin: 0;
    color: #171717;
    font-size: clamp(2.375rem, 6vw, 5.5rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.05;
    text-transform: uppercase;
}

.kickoff-title span {
    display: block;
}

.kickoff-tagline {
    margin: 0.25rem 0 0;
    color: #171717;
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    font-weight: 600;
    line-height: 1.35;
}

.kickoff-desc {
    max-width: 38rem;
    margin: 0.25rem 0 0;
    color: #525252;
    font-size: clamp(1rem, 1.2vw, 1.125rem);
    line-height: 1.7;
}

.kickoff-facts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin: 0.5rem 0 0;
}

.kickoff-facts div {
    padding-top: 0.75rem;
    border-top: 2px solid #ff6500;
}

.kickoff-facts dt {
    color: #e85d04;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.kickoff-facts dd {
    margin: 0.2rem 0 0;
    color: #171717;
    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1.4;
}

.kickoff-speakers {
    display: grid;
    gap: 0.75rem;
}

.kickoff-speakers p {
    margin: 0;
    color: #171717;
    font-weight: 700;
    line-height: 1.35;
}

.kickoff-speakers span,
.kickoff-speakers small {
    display: block;
    color: #525252;
    font-weight: 500;
}

.kickoff-speakers span {
    margin-bottom: 0.15rem;
    color: #e85d04;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.kickoff-speakers small {
    margin-top: 0.15rem;
    font-size: 0.875rem;
}

.kickoff-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 0.25rem;
}

.kickoff-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
}

.kickoff-btn:hover {
    transform: translateY(-2px);
}

.kickoff-btn:focus-visible {
    outline: 3px solid #171717;
    outline-offset: 3px;
}

.kickoff-btn-primary {
    background: #ff6500;
    color: #fff;
    box-shadow: 0 8px 18px rgba(255, 101, 0, 0.25);
}

.kickoff-btn-primary:hover {
    background: #e85d04;
    box-shadow: 0 12px 22px rgba(232, 93, 4, 0.28);
}

.kickoff-btn-secondary {
    background: #fff;
    color: #171717;
    box-shadow: inset 0 0 0 1.5px #ff6500;
}

.kickoff-btn-secondary:hover {
    box-shadow: inset 0 0 0 1.5px #e85d04, 0 10px 18px rgba(23, 23, 23, 0.08);
}

.kickoff-flyer {
    position: relative;
    margin: 0.5rem 0 0;
}

.kickoff-flyer::before {
    content: "";
    position: absolute;
    z-index: 0;
    inset: 6% -6%;
    background: radial-gradient(circle, rgba(255, 101, 0, 0.28), transparent 68%);
    pointer-events: none;
}

.kickoff-flyer img {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 0 18px 40px rgba(23, 23, 23, 0.12);
    transition: box-shadow 300ms ease;
}

.kickoff-flyer:hover img {
    box-shadow: 0 24px 48px rgba(232, 93, 4, 0.22);
}

.kickoff-rise {
    animation: kickoff-rise 500ms ease both;
}

.kickoff-title { animation-delay: 60ms; }
.kickoff-tagline { animation-delay: 120ms; }
.kickoff-flyer { animation-delay: 160ms; }
.kickoff-actions { animation-delay: 220ms; }

@keyframes kickoff-rise {
    from {
        opacity: 0;
        transform: translateY(12px);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

@media (max-width: 767px) {
    .kickoff-hero {
        padding-top: 6.5rem;
    }

    .kickoff-facts {
        grid-template-columns: 1fr;
    }

    .kickoff-actions,
    .kickoff-btn {
        width: 100%;
    }
}

@media (min-width: 1024px) {
    .kickoff-grid {
        grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
        grid-template-areas:
            "eyebrow flyer"
            "title flyer"
            "tagline flyer"
            "desc flyer"
            "facts flyer"
            "speakers flyer"
            "actions flyer";
    }

    .kickoff-flyer {
        margin: 0;
    }

    .kickoff-flyer img {
        max-height: 44rem;
        margin-inline: auto;
    }
}

@media (prefers-reduced-motion: reduce) {
    .kickoff-rise,
    .kickoff-btn,
    .kickoff-flyer img {
        animation: none;
        transition: none;
    }
}
</style>

<style>
@media (min-width: 992px) {
    html.dark #topnav.nav-sticky {
        background-color: rgb(15 23 42 / 0.94) !important;
    }

    html.dark #topnav:not(.nav-sticky) .navigation-menu > li > a {
        color: #161c2d !important;
    }

    html.dark #topnav:not(.nav-sticky) .navigation-menu > li:hover > a,
    html.dark #topnav:not(.nav-sticky) .navigation-menu > li.active > a {
        color: #7c3aed !important;
    }

    html.dark #topnav:not(.nav-sticky) .navigation-menu .menu-arrow {
        border-color: #161c2d !important;
    }

    html.dark #topnav:not(.nav-sticky) .navigation-menu > li:hover > .menu-arrow,
    html.dark #topnav:not(.nav-sticky) .navigation-menu > li.active > .menu-arrow {
        border-color: #7c3aed !important;
    }

    html.dark #topnav:not(.nav-sticky) .logo img.dark\:hidden {
        display: inline-block !important;
    }

    html.dark #topnav:not(.nav-sticky) .logo img.dark\:inline-block {
        display: none !important;
    }
}
</style>
