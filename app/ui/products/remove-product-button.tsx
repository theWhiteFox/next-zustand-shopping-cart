'use client'

import { Product } from "@/app/lib/definitions"
import useCartStore from "@/app/store/cartStore"
import clsx from "clsx"

interface RemoveProductButtonProps extends Product {
    quantity: number
}

export const RemoveProductButton = ({ id }: RemoveProductButtonProps) => {
    const { removeItemCart } = useCartStore((state) => state)

    return (
        <div key={id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
                <button onClick={() => removeItemCart({
                    id,
                    name: "",
                    price: 0,
                    image_url: ""
                })}
                    className={clsx(
                        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
                        "focus:outline-none focus:shadow-outline"
                    )}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};