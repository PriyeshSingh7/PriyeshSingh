import { useEffect, useRef, useState } from 'react'
import { navItems, site } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Icon } from './ui/Icon'

/** Stable across renders so the scroll-spy effect does not re-subscribe. */
const SECTION_IDS = navItems.map((item) => item.href.replace('#', ''))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape, and lock background scroll while it is open.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  // Never leave the panel open across a breakpoint change.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-line bg-base/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="shell flex h-[72px] items-center justify-between" aria-label="Primary">
          <a
            href="#top"
            className="group flex min-h-11 items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-lg border border-line-strong bg-surface-2 font-mono text-[13px] font-medium tracking-tight text-fg transition-colors duration-300 group-hover:border-accent/60 group-hover:text-accent"
            >
              {site.monogram}
            </span>
            <span className="text-[15px] font-bold tracking-[-0.02em] text-fg">
              {site.wordmark}
            </span>
            <span className="sr-only">{site.name} — home</span>
          </a>

          {/* Desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-md px-3 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                      isActive ? 'text-fg' : 'text-fg-muted hover:text-fg'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line-strong bg-surface-2 text-fg transition-colors duration-300 hover:border-accent/60 md:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </nav>
      </header>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-40 bg-base/95 backdrop-blur-xl md:hidden"
      >
        <div className="shell flex h-full flex-col pt-[72px]">
          <ul className="flex flex-col gap-1 py-8">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-5 text-2xl font-semibold tracking-tight text-fg transition-colors duration-300 hover:text-accent"
                >
                  <span className="label-mono">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="label-mono mt-auto pb-10 leading-relaxed">
            {site.role}
            <br />
            {site.location}
          </p>
        </div>
      </div>
    </>
  )
}
