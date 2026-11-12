# PMB 2027/2028 — UI/UX Audit

**Proyek:** Landing Page Penerimaan Mahasiswa Baru, Universitas Muhammadiyah PKU Surakarta  
**Repositori:** `landing-pmb-2026` (package name: `edupath`)  
**Tanggal inspeksi:** 12 November 2026  
**Metode:** inspeksi source code  
**Status:** menunggu persetujuan. Belum ada implementasi.

**Keputusan terbuka:** brief memakai tahun akademik 2027/2028. Kode yang berjalan menulis **2026/2027** di `pages/index.vue` dan `pages/biaya-pendaftaran.vue`. Angka itu tidak diubah di audit ini dan tidak boleh diganti sebelum ada penetapan resmi.

## Keterbatasan bukti

Screenshot tidak dilampirkan. Saat audit, dev server tidak berjalan dan browser tidak dibuka. Semua temuan berasal dari source code. Menu mobile, kontras warna, dan kolase lima kolom adalah kesimpulan dari markup dan CSS, belum dikonfirmasi di perangkat.

---

## Executive Summary

Landing page sudah berjalan di atas Nuxt 3 dan Tailwind, dengan konten PMB yang ditimpa pada template kursus online Edupath. Integrasi yang harus dipertahankan adalah tautan ke `admission.umpku.ac.id`, WhatsApp admisi, Google Form evaluasi, file akreditasi di Google Drive, dan YouTube.

Pengunjung beranda saat ini melihat hero, syarat daftar, logo mitra, teaser beasiswa, judul berita yang kosong, testimoni, dan footer. Program studi, perbedaan jalur, dan biaya tidak ada di beranda. Nama program studi di `/program-studi` membuka halaman template kursus berbahasa Inggris. Menu ponsel tidak memakai kelas yang CSS-nya harapkan, sehingga panel navigasi berpeluang tetap tertutup.

Perbaikan yang aman adalah menyempurnakan komponen yang ada, membetulkan tautan mati, memisahkan data template dari data PMB, dan memperbaiki aksesibilitas serta SEO di `nuxt.config.ts`. Halaman template tidak dihapus sebelum disetujui. Sistem admisi, autentikasi, dan logika pendaftaran berada di luar repo ini dan tidak disentuh.

## Existing Project Architecture

| Lapisan | Kondisi aktual |
|---|---|
| Nuxt | 3.20.1 di lockfile, constraint `^3.14.1592` |
| Vue / Vue Router | 3.5.24 di lockfile; `package.json` memakai `"latest"` untuk keduanya |
| TypeScript | Hanya `tsconfig.json` bawaan Nuxt. Tidak ada `<script lang="ts">` |
| CSS | Tailwind CSS 3.4.15 dan SCSS di `assets/scss/`. Entri gaya: `assets/scss/tailwind.scss` |
| State | `ref` lokal. Tidak ada Pinia, `stores/`, atau `composables/` |
| Data | JavaScript statis di `data/`. Tidak ada `useFetch` atau `$fetch` |
| Layout | Tidak ada `layouts/`. Setiap halaman menyusun `Navbar`, `Footer`, `Switcher`, `ScrollToTop` sendiri |
| Plugin | Tidak ada direktori `plugins/` |
| Server | Hanya `server/tsconfig.json`. Tidak ada endpoint di repo ini |
| Middleware | `middleware/redirect-404.global.ts` mengarahkan rute tak dikenal ke `/404` |
| SEO | `@nuxtjs/sitemap` dan `@nuxtjs/robots`, hostname `https://pmb.umpku.ac.id` |
| Gambar | Import statis. Tidak ada `@nuxt/image` |
| Font | Inter dari Google Fonts. Poppins ada di `tailwind.config.js` tetapi tidak di-import. Heading memakai `font-body` |
| Ikon | Feather, Material Design Icons (CDN), Iconoir (CDN), SVG inline |
| Animasi | tiny-slider, Swiper (npm dan CDN), vue-countup-v3, vue-typewriter-effect |

Ada 43 file di `pages/`. Yang dipakai alur PMB:

- `/`
- `/program-studi`
- `/biaya-pendaftaran`
- `/biaya-studi`
- `/beasiswa`
- `/brosur`
- `/mitra`
- `/faq-umpku`
- `/kontak`
- `/tes-minat-bakat`

Sisanya adalah halaman template Edupath dan ikut terdaftar sebagai rute, termasuk di sitemap.

`data/data.js` mengimpor sembilan berkas `.mp4` (total sekitar 21 MB) di tingkat modul. Beranda mengimpor modul yang sama lewat `footer.vue`, `alumni.vue`, dan `syarat.vue`, sehingga video template masuk ke grafik dependensi halaman PMB.

## Existing Landing Page Structure

Urutan `pages/index.vue`:

1. `Navbar` dengan `navlight`.
2. Hero: tagline `#Kampus_Sehat_Mencerahkan`, judul PMB 2026/2027, satu paragraf, tombol ke `https://admission.umpku.ac.id/site/landing`, kolase tujuh foto.
3. Informasi pendaftaran: `FaqAbout` (dua gambar) dan `Syarat` (dua butir accordion).
4. Mitra: `PartnerMitraIndex` dan tautan ke `/mitra`.
5. Teaser beasiswa ke `/beasiswa`.
6. Berita dan event: judul saja. Slider dikomentari. Tautan “Lihat Berita Lainnya” mengarah ke `/`.
7. Testimoni: `Alumni`.
8. `Footer`, `Switcher`, `ScrollToTop`.

Halaman lain yang sudah berisi data PMB:

- `/program-studi` mengelompokkan tiga fakultas lewat `ListFik` dan `data/list-prodi.js`.
- `/biaya-pendaftaran` menampilkan dua jalur dari `data/biaya.js` (Reguler Rp100.000 dan Alih Jenjang/RPL Rp200.000), masing-masing dengan URL admisi.
- `/biaya-studi` punya tab Reguler dan RPL plus tabel UKT.
- `/beasiswa` memakai tujuh program di `data/beasiswa.js`.
- `/faq-umpku` memakai tiga butir di `data/syarat.js`, terpisah dari accordion beranda.
- `/kontak` memisahkan WhatsApp Reguler dan RPL.
- `/brosur`, `/mitra`, dan `/tes-minat-bakat` ada sebagai halaman.

## UI/UX Audit Findings

Skor heuristik dari inspeksi kode, skala 1–5:

| Heuristik | Skor | Bukti singkat |
|---|---|---|
| Visibility of system status | 2 | Tidak ada status gelombang. Accordion tanpa `aria-expanded`. Form footer tanpa respons |
| Match with the real world | 2 | “Home”, “Login”, “$11/Lesson”, dan “Calvin Carlo” masih ada. Deskripsi prodi tertukar. Satu testimoni menyebut Universitas Muhammadiyah Surakarta |
| User control and freedom | 3 | Logo kembali ke beranda. Banyak kontrol memakai `NuxtLink :to="[]"` |
| Consistency and standards | 2 | Empat set ikon. Halaman detail prodi masih produk template |
| Error prevention | 2 | `v-html` pada data. Zoom dinonaktifkan. Tautan footer tidak ke mana-mana |
| Recognition rather than recall | 2 | Prodi dan jalur tidak ada di beranda. Header punya Login, bukan Daftar |
| Flexibility and efficiency | 2 | Tidak ada saringan prodi. Pintasan “SMA” dan “RPL” tidak ada di beranda |
| Aesthetic and minimalist design | 2 | Blok berita kosong. `Switcher` LTR/RTL tetap tampil |
| Error recognition and recovery | 2 | `/404` ada. Halaman placeholder tidak menjelaskan dirinya |
| Help and documentation | 3 | FAQ, brosur, dan WhatsApp ada, tetapi tersebar dan sebagian tidak selaras |

Temuan konten yang perlu verifikasi resmi, bukan diganti dengan teks baru di audit ini:

- Deskripsi di `data/list-prodi.js` tertukar. S1 Informatika tertulis “tenaga farmasi”. Beberapa prodi kesehatan memakai kalimat “kesehatan masyarakat” yang sama.
- `data/syarat.js` menulis penerima RPL sebagai S1 Keperawatan Anestesiologi dan S1 Rekayasa Teknologi Elektromedis. `list-prodi.js` menulis keduanya sebagai D4.
- `counterData` (95%, 87%, 120+, 90%) tidak punya sumber di kode.
- `id` prodi diulang di tiap fakultas. Kartu menaut ke `/course-detail-two/${id}`.
- `pages/course-detail-two/[id].vue` masih berisi harga “$11/Lesson”, nama Calvin Carlo, dan teks placeholder.

## Visual Design Audit

Hasil ini berasal dari markup dan token, bukan dari pengukuran piksel.

- Palet dominan adalah violet, fuchsia, dan kuning dari template Edupath (`bg-violet-600`, gradient `to-violet-950 via-violet-700 from-fuchsia-600`). Tidak ada token warna institusi di `tailwind.config.js`. Mengganti warna tanpa pedoman merek resmi berada di luar wewenang audit ini.
- Tipografi efektif hanya Inter. Poppins didefinisikan sebagai `font-heading` tetapi tidak dimuat, dan heading di `assets/scss/custom/_general.scss` memakai `font-body`.
- Hierarki heading tidak stabil. Hero memakai `h1`. Seksi berikutnya sering memakai `h4` atau `h3` sebagai judul seksi. Beberapa halaman dalam memakai `h1` untuk angka counter.
- Nada bahasa bercampur: kalimat institusional di hero, emoji dan slang di `data/biaya.js` dan judul `/biaya-studi` (“Gak perlu mahal-mahal, kok!”).
- `Switcher` menaruh kontrol mode gelap dan LTR/RTL di tepi kanan setiap halaman PMB.
- Kolase hero memakai `grid-cols-5` tanpa varian mobile, dengan tujuh gambar masing-masing 136–276 KB.
- Teks `text-white/50` di atas gradient dan `text-slate-400` untuk paragraf berisiko gagal kontras untuk teks kecil. Ini hipotesis dari kelas Tailwind, belum diukur dengan color picker.

## Mobile Responsiveness Audit

Breakpoint khusus ada di `assets/scss/custom/structure/_topnav.scss`: 991px, 768px, dan 425px. Tailwind memakai `sm` 640, `md` 768, `lg` 1024. Navbar desktop baru terkunci di atas 991px, sedangkan banyak grid memakai `md:` atau `lg:`. Ada celah perilaku antara 768px dan 991px.

Temuan dari kode:

- Panel menu ponsel diharapkan tampil lewat `#navigation.open`. `components/navbar.vue` memberi kelas `open` ke tombol hamburger, lalu memberi panel kelas `block` atau `none`. Kelas `none` bukan utilitas Tailwind. Aturan `#navigation` di bawah 991px memakai `hidden` dengan spesifisitas ID. Panel berpeluang tetap tertutup.
- Hamburger adalah `NuxtLink :to="[]"`, bukan `button`.
- Hero tetap lima kolom di lebar apa pun (`grid-cols-5` di `pages/index.vue`). Di ponsel, tujuh foto menjadi sangat kecil.
- Kartu prodi `ListFik` menumpuk gambar dan teks di bawah `md`, dengan tombol hanya “File Akreditasi”.
- Tabel `/biaya-studi` memakai `overflow-x-auto` dan `whitespace-nowrap`. Tabel bisa digeser, tetapi tidak ada petunjuk bahwa ada kolom di luar layar.
- Tab Reguler/RPL di `/biaya-studi` adalah dua tombol `h-12 px-6` berdampingan. Di layar sempit keduanya berisiko terpotong.
- Halaman prodi memakai `md:py-44 py-36` sebelum daftar kartu, sehingga isi utama tertunda oleh hero yang tinggi.
- Viewport global: `maximum-scale=1, user-scalable=no`.

Belum diverifikasi di perangkat: urutan fokus, area sentuh 24px, dan apakah menu benar-benar gagal dibuka di browser.

## Conversion Analysis

Jalan yang sudah ada:

- Hero “Daftar Sekarang” menuju `https://admission.umpku.ac.id/site/landing`.
- Header “Login” menuju `https://admission.umpku.ac.id/`.
- Kartu biaya menuju URL jalur yang sudah di-encode di `data/biaya.js`. URL itu harus tetap utuh.
- `/kontak` membuka WhatsApp dengan teks berbeda untuk Reguler dan RPL.

Celah konversi:

- Header tidak menawarkan daftar. Pengunjung yang sudah melewati hero harus mencari tombol di bagian lain atau membuka menu Biaya.
- Beranda tidak membantu memilih jalur atau prodi sebelum keluar ke admisi.
- Nama prodi membuka halaman template, bukan langkah daftar.
- “Lihat Semua Prodi”, tautan footer “Tautan Penting” dan “Profil Kampus”, serta “Lihat Berita Lainnya” tidak bernavigasi (`:to="[]"` atau `to="/"`).
- Form “Email Anda / Daftar” di footer tidak punya action.
- Tidak ada gelombang, tanggal, atau status buka di UI. Keputusan “daftar sekarang atau nanti” tidak bisa diambil dari halaman.

## Performance Findings

| Temuan | Bukti |
|---|---|
| Video template sekitar 21 MB | `assets/images/course/video/*.mp4` diimpor di `data/data.js` |
| Foto tim sekitar 14 MB | `assets/images/team/*.{jpg,webp}`, termasuk duplikat jpg dan webp |
| Hero sekitar 1,3 MB gambar | Tujuh webp 136–276 KB, tanpa `width`/`height` atau `loading="lazy"` |
| CSS dan JS pihak ketiga | Swiper CSS dan JS dari jsDelivr, tiny-slider CSS, MDI, Iconoir, ditambah paket npm Swiper dan tiny-slider |
| Font menghambat render | `@import` Google Fonts di `assets/scss/custom/_fonts.scss` |
| CSS tidak terpakai | `assets/css/tailwind.css` (128 KB) dan `tailwind.min.css` (103 KB) tidak diimpor |
| Devtools | `devtools: { enabled: true }` di `nuxt.config.ts` |
| Halaman berlebih | 43 rute, sebagian besar template, tetap masuk build |
| Import tidak terpakai | `pages/program-studi.vue` mengimpor `coursesData`. `pages/biaya-pendaftaran.vue` dan `pages/beasiswa.vue` mengimpor `vue-typewriter-effect` tanpa memakainya di template |

Tidak ada pengukuran Lighthouse karena aplikasi tidak dijalankan.

## SEO dan Accessibility Findings

SEO:

- `lang="en"` pada situs berbahasa Indonesia.
- `title` dan `titleTemplate` sama: “PMB UMPKU Surakarta”. Tidak ada `useHead` atau `useSeoMeta` per halaman.
- Meta description kosong.
- Sitemap memuat `/course-detail/1–3` dan `/course-detail-two/1–3`.
- `robots` mengizinkan semua path.
- Tahun, nama prodi, dan biaya ada di HTML statis, jadi bisa diindeks. Halaman detail prodi yang terindeks saat ini adalah konten template.

Aksesibilitas:

- `user-scalable=no` bertentangan dengan WCAG 1.4.4 Resize Text.
- Alt gambar sebagian besar string kosong, termasuk logo dan foto hero.
- Iframe YouTube di `components/faq-about.vue` dan `pages/program-studi.vue` tidak punya `title`.
- Accordion di `components/syarat.vue` dan `components/syarat-faq.vue` memakai id `accordion-collapse-heading-1` yang sama untuk setiap item.
- Bintang testimoni hanya ikon, tanpa teks alternatif.
- Tautan email footer memakai `href="tel:+152534-468-854"` untuk `info@umpku.ac.id`. Telepon memakai `tel:+0271734955`.
- Kontras `text-white/50` dan `text-slate-400` belum diukur.

## Gap Analysis

| Kebutuhan pengunjung | Kondisi sekarang | Celah |
|---|---|---|
| Mengapa UMPKU | Tagline dan satu kalimat | Pembeda yang sudah ada (kesehatan, mitra, akreditasi) tidak di hero |
| Apa yang dipelajari | Halaman `/program-studi` | Tidak di beranda. Deskripsi dan halaman detail tidak bisa dipakai |
| Bagaimana mendaftar | Tombol ke admisi, dua kartu biaya, accordion syarat | Tidak ada langkah pilih jalur lalu pilih prodi di beranda |
| Jalur dan biaya | Data dua jalur sudah ada | Tidak di beranda. Gelombang dan jadwal tidak ada di data |
| Bantuan | FAQ, brosur, WA, kontak | Dataset FAQ beranda dan `/faq-umpku` berbeda |
| Identitas visual | Logo UMPKU terpasang | Kulit antarmuka masih Edupath, termasuk switcher RTL |
| Performa | Halaman bisa di-build | Modul data menarik video dan ikon CDN berlebih |
| Akses dan SEO | Sitemap dan robots ada | Bahasa, judul, deskripsi, zoom, dan alt belum beres |

## Prioritized Recommendations

Kompleksitas: **S** sekitar setengah hari, **M** sekitar satu hari, **L** lebih dari satu hari. Tidak ada dependency baru.

### C. Technical Improvements

#### C1. Perbaiki buka-tutup menu mobile

- **Tujuan:** panel navigasi terbuka dan tertutup di lebar ≤991px.
- **Komponen:** `components/navbar.vue`, kontrak kelas di `assets/scss/custom/structure/_topnav.scss`.
- **Alasan:** CSS menampilkan `#navigation.open`, sedangkan Vue menulis `block`/`none`.
- **Dampak yang diharapkan:** menu ponsel bisa dipakai.
- **Estimasi kompleksitas:** S.
- **Risiko regresi:** menu desktop di atas 991px, karena kelas `open` hanya relevan di media query mobile.
- **Kriteria keberhasilan:** tap hamburger menampilkan seluruh item, tap lagi menutup, submenu Biaya dan Informasi membuka satu panel.

#### C2. Ganti kontrol semu menjadi tautan atau tombol sungguhan

- **Tujuan:** setiap kontrol yang terlihat bisa diklik melakukan aksi yang benar.
- **Komponen:** `components/navbar.vue`, `components/footer.vue`, `pages/program-studi.vue`, `pages/index.vue`.
- **Alasan:** `NuxtLink :to="[]"` tidak bernavigasi. Hamburger dan judul dropdown lebih tepat sebagai `button`.
- **Dampak yang diharapkan:** footer, “Lihat Semua Prodi”, dan menu dropdown berfungsi.
- **Estimasi kompleksitas:** S.
- **Risiko regresi:** rendah, selama URL tujuan diambil dari rute yang sudah ada.
- **Kriteria keberhasilan:** tidak ada kontrol navigasi dengan `:to="[]"` di halaman PMB. “Lihat Berita Lainnya” tidak ditampilkan atau diarahkan ke halaman berita yang benar-benar ada. Jangan mengarahkannya ke `/`.

#### C3. Hentikan tautan prodi ke halaman template

- **Tujuan:** nama prodi tidak membuka “Calvin Carlo” dan “$11/Lesson”.
- **Komponen:** `components/list-fik.vue`, `data/list-prodi.js`. Halaman `course-detail-two` tetap ada sampai disetujui untuk disembunyikan.
- **Alasan:** `id` bentrok antar fakultas, dan target rute masih data `coursesData`.
- **Dampak yang diharapkan:** kartu prodi aman diklik.
- **Estimasi kompleksitas:** M.
- **Risiko regresi:** sedang jika URL lama sudah tersebar. Mitigasi: tautan baru di kartu, halaman lama dibiarkan tetapi dikeluarkan dari sitemap.
- **Kriteria keberhasilan:** klik nama prodi menampilkan nama, jenjang, akreditasi, dan tautan daftar jalur yang sudah ada. Tidak ada teks template.

#### C4. Pisahkan data PMB dari modul template

- **Tujuan:** beranda tidak menarik video 21 MB dan data kursus.
- **Komponen:** `data/data.js` dipotong menjadi modul yang sudah mulai ada (`list-prodi.js`, `biaya.js`, `beasiswa.js`) plus modul kecil untuk footer, testimoni, dan mitra.
- **Alasan:** impor apa pun dari `data.js` mengevaluasi impor `.mp4` di atas file.
- **Dampak yang diharapkan:** unduhan awal beranda turun drastis.
- **Estimasi kompleksitas:** M.
- **Risiko regresi:** sedang pada halaman template yang masih mengimpor `coursesData`. Halaman itu tidak diubah perilakunya.
- **Kriteria keberhasilan:** chunk beranda tidak memuat `assets/images/course/video`. Halaman template yang tersisa tetap bisa dibuka.

#### C5. SEO dasar tanpa mengubah hostname

- **Tujuan:** setiap halaman PMB punya judul, deskripsi, dan bahasa yang benar.
- **Komponen:** `nuxt.config.ts`, `useHead` di halaman PMB yang sudah ada.
- **Alasan:** `lang="en"`, description kosong, judul global identik, sitemap berisi rute template.
- **Dampak yang diharapkan:** cuplikan pencarian lebih relevan. Rute template tidak dipromosikan.
- **Estimasi kompleksitas:** S.
- **Risiko regresi:** rendah. Jangan mengubah `hostname` atau konfigurasi hosting.
- **Kriteria keberhasilan:** `lang="id"`. Judul unik untuk beranda, prodi, biaya, beasiswa, FAQ, dan kontak. Description terisi. Sitemap PMB tidak lagi memuat `/course-detail`.

#### C6. Aksesibilitas yang menghalangi penggunaan

- **Tujuan:** memenuhi zoom, nama kontrol, dan accordion yang bisa dipahami teknologi bantu.
- **Komponen:** viewport di `nuxt.config.ts`, `components/syarat.vue`, `components/syarat-faq.vue`, gambar di `pages/index.vue`, `components/navbar.vue`, `components/footer.vue`, iframe di `components/faq-about.vue`.
- **Alasan:** zoom dimatikan, alt kosong, id accordion duplikat, iframe tanpa judul.
- **Dampak yang diharapkan:** pengguna yang memperbesar teks dan pembaca layar bisa memakai halaman.
- **Estimasi kompleksitas:** M.
- **Risiko regresi:** rendah. Membolehkan zoom tidak mengubah layout desktop.
- **Kriteria keberhasilan:** viewport tanpa `user-scalable=no`. Logo punya alt. Item accordion punya id unik dan `aria-expanded`. Iframe punya `title`.

#### C7. Hero dan tabel tetap bisa dibaca di ponsel

- **Tujuan:** kolase dan tabel biaya tidak pecah di lebar sempit.
- **Komponen:** `pages/index.vue`, `pages/biaya-studi.vue`.
- **Alasan:** `grid-cols-5` berlaku di semua lebar. Tabel hanya bisa digeser horizontal.
- **Dampak yang diharapkan:** isi hero terlihat tanpa mencubit. Biaya bisa dibaca tanpa menebak ada kolom tersembunyi.
- **Estimasi kompleksitas:** M.
- **Risiko regresi:** komposisi desktop hero berubah jika grid tidak dibatasi `lg:grid-cols-5`.
- **Kriteria keberhasilan:** di bawah 768px kolase menjadi satu atau dua kolom. Tabel punya alternatif tumpukan atau petunjuk geser, dan tidak memotong tombol tab.

#### C8. Gambar hero punya ukuran dan prioritas unduh

- **Tujuan:** mengurangi layout shift dan unduhan yang tidak perlu.
- **Komponen:** gambar di `pages/index.vue`, `components/faq-about.vue`, `components/list-fik.vue`. Tetap tanpa `@nuxt/image` pada tahap ini.
- **Alasan:** tidak ada dimensi atau `loading`. Tujuh foto dimuat sekaligus.
- **Dampak yang diharapkan:** LCP lebih stabil. Gambar di bawah lipatan tidak bersaing dengan hero.
- **Estimasi kompleksitas:** S.
- **Risiko regresi:** rendah jika rasio aspek mengikuti berkas yang ada.
- **Kriteria keberhasilan:** gambar hero punya `width` dan `height`. Hanya gambar pertama yang prioritas. Sisanya `loading="lazy"`.

#### C9. Kurangi ikon yang dimuat empat kali

- **Tujuan:** satu keluarga ikon untuk halaman PMB.
- **Komponen:** `nuxt.config.ts` (tautan CDN) dan kelas ikon di komponen PMB.
- **Alasan:** MDI, Iconoir, dan Feather dimuat bersamaan, ditambah SVG.
- **Dampak yang diharapkan:** lebih sedikit permintaan yang menahan render.
- **Estimasi kompleksitas:** L.
- **Risiko regresi:** tinggi jika CDN dicabut sebelum kelas ikon diganti. Lakukan hanya setelah inventaris ikon halaman PMB.
- **Kriteria keberhasilan:** halaman PMB tetap menampilkan ikon yang sama secara visual dengan paling banyak satu stylesheet ikon.

#### C10. Perbaiki kontak di footer dan sembunyikan form tanpa tujuan

- **Tujuan:** email, telepon, dan media sosial mengarah ke saluran yang sudah ada.
- **Komponen:** `components/footer.vue`, `data/data.js` (`footerSocial` sudah benar).
- **Alasan:** email memakai `tel:` dan nomor telepon tidak valid sebagai URI. Form newsletter tidak terhubung ke layanan apa pun.
- **Dampak yang diharapkan:** tap di ponsel membuka aplikasi yang benar.
- **Estimasi kompleksitas:** S.
- **Risiko regresi:** rendah.
- **Kriteria keberhasilan:** email memakai `mailto:info@umpku.ac.id`. Telepon memakai nomor yang sama dengan yang sudah ditampilkan. Form tidak tampil sampai ada endpoint yang disetujui. Jangan membuat endpoint baru di tahap ini.

#### C11. Jangan render Switcher di halaman PMB

- **Tujuan:** menghilangkan kontrol demo LTR/RTL dan mode gelap dari alur calon mahasiswa.
- **Komponen:** pemanggilan `<Switcher />` di halaman PMB. Berkas `components/switcher.vue` tidak dihapus.
- **Alasan:** kontrol itu milik demo template dan mengubah `dir` serta kelas `dark` pada `<html>`.
- **Dampak yang diharapkan:** tepi layar bersih, arah teks tidak bisa tertukar.
- **Estimasi kompleksitas:** S.
- **Risiko regresi:** rendah.
- **Kriteria keberhasilan:** beranda, prodi, biaya, beasiswa, FAQ, dan kontak tidak menampilkan switcher. Berkas komponen tetap ada.

#### C12. Matikan Nuxt Devtools untuk build produksi

- **Tujuan:** alat debug tidak ikut build yang di-deploy.
- **Komponen:** `nuxt.config.ts` saja. Bukan konfigurasi server atau pipeline deploy.
- **Alasan:** `devtools.enabled` bernilai `true`.
- **Dampak yang diharapkan:** bundle produksi lebih bersih.
- **Estimasi kompleksitas:** S.
- **Risiko regresi:** rendah. Dev lokal tetap bisa menyalakan devtools lewat environment jika diperlukan.
- **Kriteria keberhasilan:** konfigurasi produksi tidak memaksa devtools aktif.

### Urutan prioritas

1. C1, C2, C3, karena menghalangi navigasi dan menampilkan konten palsu.
2. C4, C5, C6, C10, karena performa, indeks pencarian, dan kontak.
3. C7, C8, C11, C12.
4. C9 terakhir, karena risiko visualnya paling besar.

Perbaikan copy (deskripsi prodi, jenjang RPL, testimoni yang menyebut universitas lain, statistik `counterData`, tahun akademik) menunggu naskah resmi. Sampai naskah itu ada, statistik dan kutipan yang meragukan sebaiknya tidak ditonjolkan, bukan diganti dengan angka baru.

## Proposed Component Improvements

| Komponen | Perubahan yang diusulkan | Yang tidak dilakukan |
|---|---|---|
| `navbar.vue` | Kelas `open`, tombol sungguhan, tambah tautan Daftar ke dua URL yang sudah ada di `biaya.js` | Tidak dihapus, tidak diganti library menu |
| `footer.vue` | Tautan ke rute PMB yang ada, `mailto`/`tel`, form disembunyikan | Tidak menambah layanan newsletter |
| `list-fik.vue` | Tujuan tautan ke data prodi sendiri, plus tautan daftar yang sudah ada | Tidak menghapus kartu |
| `syarat.vue` | Id unik, `aria-expanded`, daftar dari data terstruktur agar `v-html` tidak diperlukan | Tidak mengubah isi syarat sebelum naskah resmi |
| `pendaftaran.vue` | Nada kalimat diselaraskan setelah copy resmi ada. URL `link` tetap | Tidak menambah jalur ketiga |
| `alumni.vue` | Teks alternatif pada foto dan bintang. Kutipan yang menyebut institusi lain ditahan sampai diverifikasi | Tidak mengarang testimoni |
| `faq-about.vue` | `alt` dan `title` iframe | Tidak menambah popup baru |
| `pages/index.vue` | Grid hero responsif, blok berita tidak menaut ke `/`, cuplikan prodi dan dua jalur memakai data yang sudah ada | Tidak membuat layout baru dari nol |
| `switcher.vue` | Tidak dipanggil di halaman PMB | Berkas tetap |
| Halaman `course-detail*` | Dikeluarkan dari sitemap | Tidak dihapus pada tahap ini |

## Five-Day Implementation Plan

Hari 1 audit kode pada dokumen ini sudah selesai. Sisa Hari 1 adalah audit visual yang belum bisa dilakukan saat inspeksi.

### Hari 1 — Audit dan konfirmasi visual

Buka `npm run dev`. Cek beranda, prodi, biaya, beasiswa, FAQ, dan kontak pada lebar 360, 768, dan 1280. Catat apakah menu mobile benar-benar gagal, ukur kontras `text-white/50` dan `text-slate-400`, dan ambil screenshot untuk dilampirkan ke dokumen ini. Kunci prioritas C1–C3 jika perilaku browser sesuai temuan kode. Jangan mulai mengubah komponen pada hari yang sama dengan konfirmasi visual jika screenshot belum dicatat.

### Hari 2 — Design refinement di dalam sistem yang ada

Tetapkan skala heading dengan Inter yang sudah dimuat. Tetapkan jarak seksi dari utilitas yang sudah dipakai (`py-16`, `md:py-24`). Susun peta perubahan `navbar`, hero, kartu prodi, dan dua kartu jalur tanpa palet warna baru. Jika institusi menyerahkan pedoman warna, baru petakan ke `tailwind.config.js`. Tanpa pedoman itu, violet yang ada dipertahankan.

### Hari 3 — UI pada komponen prioritas

Kerjakan C1, C2, C3, dan penempatan dua jalur plus daftar prodi di beranda memakai data yang sudah ada. Pertahankan URL admisi. Jangan mengubah halaman di `admission.umpku.ac.id`.

### Hari 4 — Responsif, performa, akses, SEO

Kerjakan C4 sampai C8, C10, C11, dan C12. C9 hanya jika inventaris ikon selesai dan masih ada waktu. Jika tidak, C9 pindah ke luar lima hari.

### Hari 5 — Pengujian dan review

Uji alur: buka menu, pilih prodi, buka biaya, tap Daftar dan Login, tap WhatsApp, tap telepon dan email. Ulangi pada 360, 768, dan 1280. Pastikan halaman template yang sengaja tidak dihapus masih bisa dibuka langsung lewat URL. Cek zoom 200%, nama tombol, dan alt. Bandingkan dengan kriteria penerimaan. Jangan menganggap selesai jika menu mobile atau halaman detail prodi masih gagal.

Rencana ini molor jika naskah resmi prodi, statistik, dan tahun akademik belum datang. Pekerjaan copy ditunda, bukan diisi sementara.

## Risks and Dependencies

| Risiko | Ketergantungan | Penanganan |
|---|---|---|
| Tahun 2026/2027 di kode berbeda dari brief 2027/2028 | Keputusan panitia PMB | Jangan diubah sampai tertulis resmi |
| Statistik dan sebagian testimoni belum bersumber | Humas atau akademik | Jangan dijadikan klaim baru. Tahan yang sudah terbukti keliru |
| Jenjang RPL tidak sama antar file | Kurikulum resmi | Selaraskan kedua file dengan satu daftar |
| URL jalur berisi id ter-encode | Sistem admisi | Salin persis dari `data/biaya.js` |
| Menghapus halaman template memutus tautan luar | Persetujuan pemilik situs | Keluarkan dari sitemap dulu. Hapus hanya setelah disetujui |
| C9 menghilangkan ikon | Inventaris kelas ikon | Dikerjakan terakhir |
| Memecah `data.js` merusak halaman template | Impor `coursesData` masih ada | Halaman template tetap mengimpor data lama |
| Tidak ada lingkungan browser pada audit ini | Dev server lokal | Sisa Hari 1 dipakai untuk konfirmasi visual |

### Di luar cakupan landing page

Dicatat terpisah dan tidak dikerjakan di repo ini:

- Alur akun, biodata, unggah berkas, pembayaran, dan status di `admission.umpku.ac.id`.
- Autentikasi, halaman admin, registrasi, dan dashboard calon mahasiswa.
- Konfigurasi deployment dan hostname.
- Endpoint baru untuk newsletter.
- Penggantian warna merek tanpa pedoman institusi.
- Penambahan dependency (`@nuxt/image`, Pinia, atau lainnya) pada tahap lima hari ini.

## Acceptance Criteria

- Menu mobile membuka dan menutup seluruh item, termasuk submenu Biaya dan Informasi.
- Tidak ada `NuxtLink :to="[]"` di halaman PMB.
- Klik program studi tidak menampilkan konten template Edupath.
- Dua URL jalur di `data/biaya.js` tidak berubah.
- Beranda menampilkan prodi dan kedua jalur dengan data yang sudah ada.
- Chunk beranda tidak memuat video di `assets/images/course/video`.
- `lang="id"`, judul unik, description terisi, sitemap tanpa `/course-detail`.
- Halaman bisa di-zoom. Logo punya alt. Accordion punya `aria-expanded`.
- Email footer memakai `mailto:`. Telepon memakai URI yang valid.
- `Switcher` tidak tampil di halaman PMB, dan berkasnya masih ada.
- Halaman template tidak dihapus.
- Tidak ada dependency baru dan tidak ada perubahan di sistem admisi.
- Tahun akademik, statistik, dan deskripsi prodi hanya berubah jika naskah resmi sudah dilampirkan.

## Aturan pengembangan yang mengikat implementasi berikutnya

- Jangan membuat ulang landing page dari awal.
- Jangan menghapus komponen yang ada tanpa persetujuan.
- Jangan mengganti framework.
- Jangan mengubah business logic pendaftaran, autentikasi, atau sistem admisi.
- Jangan mengubah konfigurasi deployment.
- Jangan menambahkan dependency tanpa alasan yang tertulis di dokumen ini.
- Jangan mengubah branding institusi tanpa pedoman resmi.
- Jangan memakai konten placeholder sebagai informasi resmi.
- Jangan mengimplementasikan rekomendasi sebelum audit ini disetujui.
