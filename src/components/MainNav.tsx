import { CartIcon, SearchIcon } from './icons'

const centerLinks = ['メンズ', 'ウィメンズ', 'キッズ', 'メンバーシップ']

export function MainNav() {
  return (
    <nav className="MainNav flex h-[72px] items-center justify-between border-b border-border-default bg-surface-default px-8">
      <div className="MainNav-Brand flex h-full w-[120px] items-center">
        <img src="/images/nike-logo.svg" alt="Nike" className="h-auto w-[120px]" />
      </div>

      <div className="MainNav-Links flex items-center gap-8 whitespace-nowrap font-jp text-md leading-jp-body text-text-default">
        {centerLinks.map((label) => (
          <a key={label} href="#">
            {label}
          </a>
        ))}
      </div>

      <div className="MainNav-Actions flex items-center gap-4">
        <div className="MainNav-Search flex w-[180px] items-center gap-2 rounded-control bg-surface-product px-4 py-2">
          <SearchIcon className="h-6 w-6 shrink-0 text-icon-secondary" />
          <span className="font-jp text-md text-text-secondary">検索</span>
        </div>
        <button type="button" aria-label="Cart" className="MainNav-Cart flex items-center justify-center">
          <CartIcon className="h-6 w-6 text-icon-default" />
        </button>
      </div>
    </nav>
  )
}
