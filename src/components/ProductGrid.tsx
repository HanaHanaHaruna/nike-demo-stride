import { ProductCard } from './ProductCard'
import { products } from '../data/products'

export function ProductGrid() {
  return (
    <section className="ProductGrid flex flex-col gap-lg px-xl py-xl">
      <h2 className="ProductGrid-Heading text-lg font-medium text-text-primary">
        Featured Sneakers
      </h2>
      <div className="ProductGrid-Items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
