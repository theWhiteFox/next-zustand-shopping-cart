'use client'

import Image from "next/image"
import clsx from 'clsx'
import { data } from "./lib/placeholder-data";
import {
 Product
} from '@/app/lib/definitions';
import Header from "@/app/ui/header";
import useCartStore from "./store/cartStore";

export default function Home({
  products = data.products
  }: {
  products?: Product[]
}) {
  const {items} = useCartStore((state) => state)
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold text-center my-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={product.image_url}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h2 className="text-xl font-bold mt-4">{product.name}</h2>
            <p className="text-gray-500">Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}
              className={clsx(
                "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                "focus:outline-none focus:shadow-outline"
              )}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
