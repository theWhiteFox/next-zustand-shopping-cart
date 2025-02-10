'use client'

import Image from "next/image"
import clsx from 'clsx'
import { data } from "@/app/lib/placeholder-data"
import useCartStore from "@/app/store/cartStore"


export default function ProductsTable() {
    const products = data.products;
    const addToCart = useCartStore((state) => state.addToCart)
    const remove = useCartStore((state) => state.remove)
    const { items } = useCartStore((state) => state)


    return (
        <>
            <div className="container grid grid-cols-1 md:grid-cols-5 gap-4 my-10">
                {products?.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-4 max-sm:mx-auto">
                        <Image
                            src={product.image_url}
                            alt={product.name}
                            width={300}
                            height={200}
                            className="rounded-md" />
                        <h2 className="text-xl font-bold mt-4 text-gray-500">{product.name}</h2>
                        <p className="text-gray-500">Price: €{product.price}</p>
                        <p className="text-gray-500">Items: {product.amount}</p>
                        <p className="text-gray-500">In stock: {product.inStock ? '✅' : '❌'}</p>

                        {items.some(item => item.id === product.id) ? (
                            <button
                                onClick={() => remove({
                                    ...product,
                                })}
                                className={clsx(
                                    "w-full mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                                    "focus:outline-none focus:shadow-outline"
                                )}
                            >
                                Remove from Cart
                            </button>
                        ) : (
                            <button
                                onClick={() => addToCart({
                                    ...product,
                                })}
                                className={clsx(
                                    "w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                    "focus:outline-none focus:shadow-outline"
                                )}
                            >
                                Add to Cart
                            </button>
                        )}

                    </div>
                ))}
            </div>
        </>
    )
}