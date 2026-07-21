const utilityLinks = ['お問い合わせ', 'ヘルプ', '店舗検索']

export function UtilityBar() {
  return (
    <div className="UtilityBar flex h-8 items-center justify-end gap-6 bg-surface-product px-16 text-xs font-medium uppercase tracking-wide text-text-default">
      {utilityLinks.map((label) => (
        <a key={label} href="#" className="UtilityBar-Link whitespace-nowrap">
          {label}
        </a>
      ))}
    </div>
  )
}
