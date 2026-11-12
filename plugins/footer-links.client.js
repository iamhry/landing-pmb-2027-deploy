const destinations = {
  'Program Studi': '/program-studi',
  'Pendaftaran': 'https://admisi.umpku.ac.id/site/landing',
  'Info Beasiswa': '/beasiswa',
  'Biaya Kuliah': '/biaya-studi',
  'Fakultas & Jurusan': '/program-studi',
}

const unavailable = new Set([
  'Visi & Misi',
  'Tentang Kami',
  'Dosen & Staff',
  'Fasilitas Kampus',
  'Berita & Event',
])

function labelOf(link) {
  return link.textContent.replace(/\s+/g, ' ').trim()
}

function applyFooter() {
  document.querySelectorAll('footer a').forEach((link) => {
    const label = labelOf(link)
    if (label === 'info@umpku.ac.id') {
      link.href = 'mailto:info@umpku.ac.id'
    }
    if (label === '0271 734955') {
      link.href = 'tel:+62271734955'
    }
    if (unavailable.has(label)) {
      const item = link.closest('li')
      if (item) item.style.setProperty('display', 'none', 'important')
    }
  })

  const form = document.querySelector('footer form')
  if (form) form.style.setProperty('display', 'none', 'important')

  const news = [...document.querySelectorAll('h4')].find((heading) => heading.textContent.includes('Info PMB Terbaru'))
  const newsBlock = news?.closest('.container')
  if (newsBlock) newsBlock.style.setProperty('display', 'none', 'important')
}

function openDestination(href) {
  if (href.startsWith('http')) {
    window.open(href, '_blank', 'noopener')
    return
  }
  navigateTo(href)
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    applyFooter()

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a')
      if (!link || !link.closest('footer')) return

      if (link.querySelector('img')) {
        event.preventDefault()
        event.stopImmediatePropagation()
        navigateTo('/')
        return
      }

      const label = labelOf(link)
      if (destinations[label]) {
        event.preventDefault()
        event.stopImmediatePropagation()
        openDestination(destinations[label])
        return
      }

      if (unavailable.has(label)) {
        event.preventDefault()
        event.stopImmediatePropagation()
      }
    }, true)
  })

  nuxtApp.hook('page:finish', applyFooter)
})
