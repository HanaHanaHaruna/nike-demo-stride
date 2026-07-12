import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-surface-default">
      <Header />
      <Hero />
      <ProductGrid />
    </div>
  )
}

export default App
