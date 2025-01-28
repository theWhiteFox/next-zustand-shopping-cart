'use client'

import { Product } from "@/app/lib/definitions"
import Image from 'next/image';
import { Button } from '@/app/ui/button';
import useCartStore from "@/app/store/cartStore";

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
            <div className="flex items-center">
                <Button onClick={() => updateQuantity("decrement", id)}>
                    -
                </Button>
                <span className="mx-2">{quantity}</span>
                <Button onClick={() => updateQuantity("increment", id)}>
                    +
                </Button>
            </div>
        </div>
    );
};