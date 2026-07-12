import { Button } from './Button'
import type { Product } from '../data/products'

export interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="ProductCard flex flex-col bg-surface-default rounded-md overflow-hidden">
      <div className="ProductCard-Image flex bg-surface-subtle">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
      </div>
      <div className="ProductCard-Body flex flex-col gap-xs p-md">
        <span className="ProductCard-Category text-sm text-text-secondary">
          {product.category}
        </span>
        <span className="ProductCard-Name text-md font-medium text-text-primary">
          {product.name}
        </span>
        <span className="ProductCard-Price text-md text-text-primary">
          ¥{product.price.toLocaleString('ja-JP')}
        </span>
        <div className="ProductCard-Action flex pt-sm">
          <Button
            variant="primary"
            size="md"
            onClick={() => onAddToCart?.(product.id)}
          >
            カートに追加
          </Button>
        </div>
      </div>
    </div>
  )
}
