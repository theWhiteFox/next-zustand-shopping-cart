export type Product = {
  id: number
  name: string
  price: number
  image_url: string
  inStock?: boolean
  amount?: number
}

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  removeFromCart(id: number): void
  items: CartItem[]
  addToCart: (product: Product) => void
  remove: (product: Product) => void
  removeItemCart: (product: Product) => void
  updateQuantity: (type: "increment" | "decrement", id: number) => void
}