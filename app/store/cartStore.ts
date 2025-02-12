import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, CartState, Product } from '../lib/definitions'
import toast from 'react-hot-toast'

const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            persist: true,
            items: [],
            addToCart: (product) => {
                let existingProduct: CartItem | undefined
                set((state) => {
                    existingProduct = state.items.find((item) => item.id === product.id)
                    return {
                        items: existingProduct
                            ? get().items
                            : [
                                ...get().items,
                                {
                                    quantity: 1,
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image_url: product.image_url,
                                    inStock: product.inStock,
                                    amount: product.amount
                                },
                            ],
                    }
                })

                if (existingProduct) {
                    toast.error("Product Already exists")
                } else {
                    toast.success("Product Added successfully")
                }
            },
            remove: (product) => {
                const existingProduct = get().items.find((item) => item.id === product.id)
                if (existingProduct) {
                    set({
                        items: get().items.filter((item) => item.id !== product.id)
                    })
                    toast.success("Product removed successfully")
                } else {
                    toast.error("Product not found in cart")
                }
            },
            removeFromCart: (id: number) => {
                set({
                    items: get().items.filter((item) => item.id !== id),
                })
                toast.success("Item removed")
            },
            removeItemCart: (product: Product) => {
                set({
                    items: get().items.filter((item) => item.id !== product.id),
                })
                toast.success("Item removed")
            },
            updateQuantity: (type: string, id: number) => {
                const item = get().items.find((item) => item.id === id)
                if (!item) {
                    return
                }
                if (item.quantity === 1 && type === "decrement") {
                    get().removeFromCart(id)
                } 
                if (item.quantity >= item.amount! && type === "increment") {
                    toast.error("Item not in stock")
                }
                else {
                    item.quantity =
                        type === "decrement" ? item.quantity - 1 : item.quantity + 1
                    set({
                        items: [...get().items],
                    })
                }
            },
        }),
        {
            name: 'cart-storage', // Name of the item in storage (must be unique). 
            // Uses localStorage by default
        }
    )
)

export default useCartStore
