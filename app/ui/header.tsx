'use client'

import Link from "next/link";
import useCartStore from "../store/cartStore";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import AcmeLogo from "./acme-logo";

export default function Header() {
    const { items } = useCartStore((state) => state)

    return (
        <header>
            <nav className="flex items-center justify-between px-8 py-6 bg-gray-800 text-white">
                <Link href="/">
                    <AcmeLogo />
                </Link>
                <div>
                    <span className="cart-badge">{items.reduce((sum, i) => sum + i.quantity, 0)}</span>
                    <Link href="/cart">
                        <ShoppingCartIcon className="peer-focus:text-gray-900" /> <small>cart</small>
                    </Link>
                </div>
            </nav>
        </header>
    );
}