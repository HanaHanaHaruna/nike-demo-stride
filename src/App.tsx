import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'
import { SiteHeader } from './components/SiteHeader'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-surface-default">
      <SiteHeader />
      <Hero />
      <ProductGrid />
      <ThemeToggle />
    </div>
  )
}

export default App
