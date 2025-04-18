'use client'

import { Product } from "@/app/lib/definitions"
import Image from 'next/image'
import { Button } from '@/app/ui/button'
import useCartStore from "@/app/store/cartStore"
import { RemoveProductButton } from "./remove-product-button"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"

interface ProductCardProps extends Product {
    quantity: number
}

export const ProductCard = ({ id, image_url, name, price, quantity }: ProductCardProps) => {
    const { updateQuantity } = useCartStore((state) => state)

    return (
        <div key={id} className="flex items-center justify-between py-2">
            <div className="flex items-center">
                <Image
                    src={image_url}
                    alt={name}
                    width={60}
                    height={40}
                    className="rounded-md"
                />
                <div className="ml-2 px-4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-400">Price: €{price}</p>
                </div>
            </div>
            <RemoveProductButton
                quantity={quantity}
                id={id}
                name={name}
                price={price}
                image_url={""}
            />
            <div className="flex items-center">
                <Button onClick={() => updateQuantity("decrement", id)}>
                    <MinusIcon className="w-4 h-4" />
                </Button>
                <span className="mx-2">{quantity}</span>
                <Button onClick={() => updateQuantity("increment", id)}>
                    <PlusIcon className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}