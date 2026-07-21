export interface Product {
  id: string
  name: string
  category: string
  price: number
  /** Pre-markdown price; when set, the product renders in sale tone. */
  originalPrice?: number
  imageUrl: string
}

export const products: Product[] = [
  {
    id: 'stride-air-runner',
    name: 'Stride Air Runner Tank Top',
    category: "Men's Tops",
    price: 14300,
    originalPrice: 18000,
    imageUrl: '/images/products/air-runner-tank.png',
  },
  {
    id: 'stride-court-classic',
    name: 'Stride Court Classic',
    category: "Men's Tights",
    price: 11800,
    imageUrl: '/images/products/court-classic.png',
  },
  {
    id: 'stride-flex-trainer',
    name: 'Stride Flex Trainer',
    category: "Men's Training",
    price: 12900,
    imageUrl: '/images/products/flex-trainer.png',
  },
  {
    id: 'stride-urban-hi',
    name: 'Stride Urban Hi',
    category: "Men's Shorts",
    price: 15600,
    imageUrl: '/images/products/urban-hi.png',
  },
]
