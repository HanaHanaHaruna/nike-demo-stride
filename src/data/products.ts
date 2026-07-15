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
    name: 'Stride Air Runner',
    category: "Men's Running",
    price: 14300,
    originalPrice: 18000,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Air+Runner',
  },
  {
    id: 'stride-court-classic',
    name: 'Stride Court Classic',
    category: "Men's Tights",
    price: 11800,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Court+Classic',
  },
  {
    id: 'stride-flex-trainer',
    name: 'Stride Flex Trainer',
    category: "Men's Training",
    price: 12900,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Flex+Trainer',
  },
  {
    id: 'stride-urban-hi',
    name: 'Stride Urban Hi',
    category: "Men's Shorts",
    price: 15600,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Urban+Hi',
  },
]
