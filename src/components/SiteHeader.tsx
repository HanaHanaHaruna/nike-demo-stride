import { Header } from './Header'
import { MainNav } from './MainNav'
import { UtilityBar } from './UtilityBar'

export function SiteHeader() {
  return (
    <div className="SiteHeader flex flex-col">
      <UtilityBar />
      <MainNav />
      <Header />
    </div>
  )
}
