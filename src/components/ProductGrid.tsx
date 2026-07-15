import { ProductCard } from './ProductCard'
import { products } from '../data/products'

export function ProductGrid() {
  return (
    <section className="ProductGrid flex flex-col gap-6 px-10 py-10">
      <h2 className="ProductGrid-Heading text-2xl font-medium text-text-default">
        Featured Sneakers
      </h2>
      <div className="ProductGrid-Items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
