/**
 * Menu mobile: CSS di _topnav.scss membuka #navigation hanya jika punya kelas `open`,
 * sedangkan navbar.vue menulis `block` / `none`. Berkas komponen tidak bisa diubah
 * dari lingkungan ini (pemilik berkas bukan pengguna saat ini), jadi kontrak itu
 * dipenuhi di sini tanpa menambah dependency.
 */
export default defineNuxtPlugin(() => {
  const style = document.createElement('style')
  style.setAttribute('data-pmb-mobile-nav', '')
  style.textContent = `
    @media (max-width: 991px) {
      #navigation.block {
        display: block !important;
        overflow-y: auto !important;
        max-height: 400px;
      }
      #topnav #navigation .navigation-menu > li > .submenu.open.is-collapsed {
        display: none !important;
      }
    }
  `
  document.head.appendChild(style)

  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('#isToggle')
    if (toggle) {
      event.preventDefault()
    }

    if (window.innerWidth > 991) {
      return
    }

    const trigger = event.target.closest('#navigation .has-submenu > a, #navigation .menu-arrow')
    if (!trigger) {
      return
    }

    event.preventDefault()
    const item = trigger.closest('.has-submenu')
    const submenu = item?.querySelector(':scope > .submenu')
    if (!submenu) {
      return
    }

    const shouldCollapse = submenu.classList.contains('open') && !submenu.classList.contains('is-collapsed')

    setTimeout(() => {
      document.querySelectorAll('#navigation .submenu.is-collapsed').forEach((panel) => {
        panel.classList.remove('is-collapsed')
      })
      if (shouldCollapse) {
        submenu.classList.add('is-collapsed')
      }
    }, 0)
  }, true)
})
