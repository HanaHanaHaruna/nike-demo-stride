import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.dataset.theme
    if (attr === 'dark' || attr === 'light') return attr
  }
  return 'light'
}

/**
 * Minimal, unobtrusive demo control that flips <html data-theme> between
 * light/dark and persists to localStorage. Styled entirely with semantic
 * tokens so it themes along with everything else.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* localStorage unavailable — ignore */
    }
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="ThemeToggle fixed bottom-4 right-4 z-50 rounded-control border border-border-default bg-surface-default px-4 py-2 text-sm font-medium text-text-default transition-colors hover:bg-surface-product"
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
