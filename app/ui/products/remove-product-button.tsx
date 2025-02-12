'use client'

import { Product } from "@/app/lib/definitions"
import useCartStore from "@/app/store/cartStore"
import { TrashIcon } from "@heroicons/react/16/solid"
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
                        "bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 rounded",
                        "focus:outline-none focus:shadow-outline"
                    )}
                >
                    <TrashIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};