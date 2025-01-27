import Link from "next/link";
import useCartStore from "../store/cartStore";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const { items } = useCartStore((state) => state)

    return (
        <header>
            <nav className="flex items-center justify-between h-12 px-4 bg-gray-800 text-white">
                <Link href="/">
                    daa duty free
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