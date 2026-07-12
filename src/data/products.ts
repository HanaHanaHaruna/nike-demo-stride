export interface Product {
  id: string
  name: string
  category: string
  price: number
  imageUrl: string
}

export const products: Product[] = [
  {
    id: 'stride-air-runner',
    name: 'Stride Air Runner',
    category: "Men's Running",
    price: 14300,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Air+Runner',
  },
  {
    id: 'stride-court-classic',
    name: 'Stride Court Classic',
    category: "Men's Lifestyle",
    price: 11800,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Court+Classic',
  },
  {
    id: 'stride-flex-trainer',
    name: 'Stride Flex Trainer',
    category: "Women's Training",
    price: 12900,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Flex+Trainer',
  },
  {
    id: 'stride-urban-hi',
    name: 'Stride Urban Hi',
    category: "Women's Lifestyle",
    price: 15600,
    imageUrl: 'https://placehold.co/400x400/F5F5F5/111111?text=Urban+Hi',
  },
]
