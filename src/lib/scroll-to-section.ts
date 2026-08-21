export function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })

  if (window.history.replaceState) {
    window.history.replaceState(null, '', `#${id}`)
  } else {
    window.location.hash = id
  }
}
