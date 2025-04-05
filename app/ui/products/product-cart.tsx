'use client'

import { ProductCard } from "./product-card"
import useCartStore from "@/app/store/cartStore"
import clsx from "clsx"
import { Button } from "../button"
import { ArrowLeftIcon } from "@heroicons/react/16/solid"

export const ProductCart = () => {
    const { items } = useCartStore((state) => state)
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    const total = subtotal

    return (
        <>
            <div className="p-4">
                <Button
                    onClick={() => window.location.href = '/'}
                    className={clsx(
                        "w-32 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold hover:text-white rounded py-2 px-4",
                        "hover:outline-none focus:shadow-outline text-white-500"
                    )}
                >
                    <ArrowLeftIcon className="w-4 text-white-700" />
                    <span className="pl-1">Products</span>

                </Button>
                <h2 className="py-8 text-2xl font-bold">Cart ({items.reduce((sum, i) => sum + i.quantity, 0)})
                </h2>
                {items.length > 0 ? items.map((item) => (
                    <ProductCard
                        key={item.id}
                        quantity={item.quantity}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image_url={item.image_url} />
                )) : (
                    <div className='py-5 px-2'>Cart is empty </div>
                )}
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4 p-4 border-t">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
            </div>
        </>
    )
}