import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { Product } from "../lib/definitions";
import toast from "react-hot-toast";

interface CartItem extends Product {
    quantity: number
}

interface cartState {
    removeFromCart(id: number): void;
    items: CartItem[]
    addToCart: (product: Product) => void
    updateQuantity: (type: "increment" | "decrement", id: number) => void;
}

const useCartStore = create<cartState>()(
    persist(
        (set, get) => ({
            persist: true,
            items: [],
            addToCart: (product) => {
                let existingItem: CartItem | undefined;
                set((state) => {
                    existingItem = state.items.find((item) => item.id === product.id);
                    return {
                        items: existingItem
                            ? get().items
                            : [
                                ...get().items,
                                {
                                    quantity: 1,
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image_url: product.image_url,
                                },
                            ],
                    };
                });

                if (existingItem) {
                    toast.error("Product Already exists");
                } else {
                    toast.success("Product Added successfully");
                }
            },
            removeFromCart: (id: number) => {
                set({
                    items: get().items.filter((item) => item.id !== id),
                });
                toast.success("Item removed");
            },
            updateQuantity: (type: string, id: number) => {
                const item = get().items.find((item) => item.id === id);
                if (!item) {
                    return;
                }
                if (item.quantity === 1 && type === "decrement") {
                    get().removeFromCart(id);
                } else {
                    item.quantity =
                        type === "decrement" ? item.quantity - 1 : item.quantity + 1;
                    set({
                        items: [...get().items],
                    });
                }
            },
        }),
        {
            name: 'cart-storage', // name of the item in the storage (must be unique)s
        }
    )
)

export default useCartStore
