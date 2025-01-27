'use client'

import useCartStore from '../store/cartStore';
import { Button } from '@/app/ui/button';
import Image from "next/image"
import Link from 'next/link';

export default function CartSideNav() {
  const { items, updateQuantity } = useCartStore((state) => state)
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal

  return (
    <div className="container mx-auto">
      <div className="mx-auto shadow-lg flex flex-col bg-gray-800 text-white overflow-scroll overflow-scroll">
        <div className="p-4">
          <Link href="/">
            <h1>Back to Products</h1>
          </Link>
          <h2 className="text-2xl font-bold">Cart ({items.reduce((sum, i) => sum + i.quantity, 0)}
            )
          </h2>
          {items.length > 0 ? items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={60}
                  height={40}
                  className="rounded-md"
                />
                <div className="ml-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-400">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  onClick={() => updateQuantity("decrement", item.id)}
                >
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  onClick={() => updateQuantity("increment", item.id)}
                >
                  +
                </Button>
              </div>
            </div>

          )) : (
            <div className='py-5 px-2'>Cart is empty </div>
          )}
        </div>
        <div className="flex justify-between font-semibold text-lg mt-4 p-4 border-t">
          <span>Total</span>
          <span>€{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
