import { Button } from './Button'
import type { Product } from '../data/products'

export interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const isSale = product.originalPrice != null
  return (
    <div className="ProductCard flex flex-col gap-2 w-full">
      <div className="ProductCard-Main flex flex-col gap-4 w-full">
        <div className="ProductCard-Image relative h-[340px] w-full overflow-hidden rounded-card bg-surface-product">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="ProductCard-Body flex flex-col gap-2 w-full">
          <span className="ProductCard-Name text-md text-text-default">
            {product.name}
          </span>
          <span className="ProductCard-Category text-md text-text-secondary">
            {product.category}
          </span>
          {isSale ? (
            <div className="ProductCard-Price flex items-center gap-2">
              <span className="ProductCard-SalePrice text-md text-text-sale">
                ¥{product.price.toLocaleString('ja-JP')}
              </span>
              <span className="ProductCard-OriginalPrice text-md text-text-secondary">
                ¥{product.originalPrice!.toLocaleString('ja-JP')}
              </span>
            </div>
          ) : (
            <span className="ProductCard-Price text-md text-text-default">
              ¥{product.price.toLocaleString('ja-JP')}
            </span>
          )}
        </div>
      </div>
      <div className="ProductCard-Action flex w-full">
        <Button
          variant="primary"
          tone={isSale ? 'sale' : 'default'}
          size="medium"
          className="font-jp w-full"
          onClick={() => onAddToCart?.(product.id)}
        >
          カートに追加
        </Button>
      </div>
    </div>
  )
}
