const navLinks = ['Men', 'Women', 'New Arrivals']

export function Header() {
  return (
    <header className="Header flex items-center justify-between px-xl py-md bg-surface-default">
      <div className="Header-Logo flex">
        <span className="text-lg font-bold tracking-wide text-text-primary">
          STRIDE
        </span>
      </div>

      <nav className="Header-Nav flex items-center gap-lg">
        {navLinks.map((label) => (
          <a
            key={label}
            href="#"
            className="Header-NavLink text-md text-text-primary hover:text-brand-accent"
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-text-primary"
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
