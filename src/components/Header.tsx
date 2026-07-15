const navLinks = ['Men', 'Women', 'New Arrivals']

export function Header() {
  return (
    <header className="Header flex items-center justify-between px-10 py-4 bg-surface-default">
      <div className="Header-Logo flex">
        <span className="font-display text-2xl font-bold tracking-wide text-text-default">
          STRIDE
        </span>
      </div>

      <nav className="Header-Nav flex items-center gap-6">
        {navLinks.map((label) => (
          <a
            key={label}
            href="#"
            className="Header-NavLink text-md text-text-default hover:text-text-accent"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="Header-Actions flex items-center">
        <button
          type="button"
          aria-label="Cart"
          className="Header-CartIcon flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="Header-CartGlyph w-6 h-6 text-icon-default"
          >
            <path
              d="M6 8h12l-1.2 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  )
}
