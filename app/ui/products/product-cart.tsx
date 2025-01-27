'use client'

import Link from "next/link";
import { ProductCard } from "./product-card";
import useCartStore from "@/app/store/cartStore";
import clsx from "clsx";

export const ProductCart = () => {
    const { items } = useCartStore((state) => state)
    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const total = subtotal

    return (
        <>
            <div className="p-4">
                <div className="container">
                <Link href="/">
                    <h2 className={clsx(
                        "mt-4 hover:text-white font-bold py-2 px-4 rounded",
                        "hover:outline-none focus:shadow-outline text-blue-500 "
                    )}>Back to Products</h2>
                </Link>
                </div>
                <h2 className="text-2xl font-bold">Cart ({items.reduce((sum, i) => sum + i.quantity, 0)})
                </h2>
                {items.length > 0 ? items.map((item) => (
                    <ProductCard
                        key={item.id}
                        quantity={item.quantity}
                        id={item.id} name={item.name}
                        price={item.price}
                        image_url={item.image_url} />
                )) : (
                    <div className='py-5 px-2'>Cart is empty </div>
                )}
            </div><div className="flex justify-between font-semibold text-lg mt-4 p-4 border-t">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
            </div>
        </>
    );
}