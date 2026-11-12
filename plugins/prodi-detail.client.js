import { biayaPendaftaran } from '@/data/biaya'

const DETAIL_PATH = /^\/course-detail(?:-two)?\/\d+\/?$/

function jenjangFromTitle(title) {
  if (title.startsWith('Profesi')) return 'Profesi'
  const level = title.split(' - ')[0]?.trim()
  return level || ''
}

function cardFacts(link) {
  const card = link.closest('.group')
  if (!card) return null

  const title = link.textContent.replace(/\s+/g, ' ').trim()
  if (!title) return null

  const badge = [...card.querySelectorAll('span')]
    .map((node) => node.textContent.replace(/\s+/g, ' ').trim())
    .find((text) => text.startsWith('Akreditasi:'))
  const list = link.closest('.group')?.parentElement
  const faculty = list?.previousElementSibling?.querySelector('h4')?.textContent.replace(/\s+/g, ' ').trim() || ''
  const file = card.querySelector('a[href*="drive.google.com"]')

  return {
    title,
    jenjang: jenjangFromTitle(title),
    faculty,
    akreditasi: badge ? badge.replace(/^Akreditasi:\s*/, '') : '',
    fileHref: file?.href || '',
  }
}

function createDialog() {
  const root = document.createElement('div')
  root.id = 'prodi-detail'
  root.style.cssText = 'position:fixed;inset:0;z-index:1000;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.6);padding:16px;'
  root.setAttribute('role', 'dialog')
  root.setAttribute('aria-modal', 'true')
  root.setAttribute('aria-labelledby', 'prodi-detail-title')
  root.innerHTML = `
    <div style="position:relative;width:100%;max-width:32rem;max-height:90vh;overflow:auto;background:#fff;border-radius:16px;padding:24px;">
      <button type="button" data-close style="position:absolute;top:12px;right:12px;width:40px;height:40px;border:0;border-radius:999px;background:transparent;color:#64748b;font-size:24px;line-height:1;cursor:pointer;" aria-label="Tutup">
        <span aria-hidden="true">&times;</span>
      </button>
      <p data-jenjang class="text-sm font-semibold uppercase tracking-wide text-violet-600"></p>
      <h2 id="prodi-detail-title" class="mt-1 text-2xl font-bold text-slate-900"></h2>
      <p data-faculty class="mt-2 text-slate-600"></p>
      <p data-akreditasi class="mt-4 hidden rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700"></p>
      <a data-file class="mt-4 hidden text-sm font-medium text-violet-600" target="_blank" rel="noopener">File Akreditasi</a>
      <div data-daftar class="mt-6 grid gap-3"></div>
    </div>
  `

  const daftar = root.querySelector('[data-daftar]')
  biayaPendaftaran.forEach((item, index) => {
    const link = document.createElement('a')
    link.href = item.link
    link.target = '_blank'
    link.rel = 'noopener'
    link.className = index === 0
      ? 'inline-flex h-12 items-center justify-center rounded-md bg-violet-600 px-6 font-medium text-white'
      : 'inline-flex h-12 items-center justify-center rounded-md bg-violet-600/10 px-6 font-medium text-violet-600'
    link.textContent = `Daftar ${item.title} · ${item.biaya}`
    daftar.appendChild(link)
  })

  const close = () => {
    root.style.display = 'none'
    document.body.style.overflow = ''
    const returnTo = root.dataset.returnTo
    if (returnTo) {
      document.getElementById(returnTo)?.focus()
    }
  }

  root.addEventListener('click', (event) => {
    if (event.target === root || event.target.closest('[data-close]')) close()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && root.style.display !== 'none') close()
  })

  root.openWith = (facts, trigger) => {
    root.querySelector('[data-jenjang]').textContent = facts.jenjang ? `Jenjang ${facts.jenjang}` : ''
    root.querySelector('#prodi-detail-title').textContent = facts.title
    root.querySelector('[data-faculty]').textContent = facts.faculty

    const badge = root.querySelector('[data-akreditasi]')
    if (facts.akreditasi) {
      badge.textContent = `Akreditasi: ${facts.akreditasi}`
      badge.classList.remove('hidden')
      badge.classList.add('inline-block')
    } else {
      badge.textContent = ''
      badge.classList.remove('inline-block')
      badge.classList.add('hidden')
    }

    const file = root.querySelector('[data-file]')
    if (facts.fileHref) {
      file.href = facts.fileHref
      file.classList.remove('hidden')
      file.classList.add('inline-block')
    } else {
      file.removeAttribute('href')
      file.classList.remove('inline-block')
      file.classList.add('hidden')
    }

    if (trigger) {
      if (!trigger.id) trigger.id = `prodi-link-${Math.random().toString(36).slice(2, 8)}`
      root.dataset.returnTo = trigger.id
    }
    root.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    root.querySelector('[data-close]').focus()
  }

  document.body.appendChild(root)
  return root
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
  const dialog = createDialog()

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a')
    if (!link) return

    const label = link.textContent.replace(/\s+/g, ' ').trim()
    if (label.startsWith('Lihat Semua Prodi') && location.pathname === '/program-studi') {
      const target = document.querySelector('h4')
      if (!target) return
      event.preventDefault()
      event.stopImmediatePropagation()
      target.style.scrollMarginTop = '90px'
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const path = link.pathname || ''
    if (!DETAIL_PATH.test(path)) return

    const facts = cardFacts(link)
    if (!facts) return

    event.preventDefault()
    event.stopImmediatePropagation()
    dialog.openWith(facts, link)
  }, true)
  })
})
