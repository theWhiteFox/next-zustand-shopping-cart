import Link from "next/link";
// import NavLinks from "./nav-links";
import useCartStore from "../store/cartStore";

export default function Header() {
    const { items } = useCartStore((state) => state)

    return (
        <header>
            <nav className="flex items-center justify-between h-12 px-4 bg-gray-800 text-white">
                <Link href="/">
                    daa duty free
                </Link>
                <div>
                    <span className="cart-badge"> ({items.reduce((sum, i) => sum + i.quantity, 0)})</span>
                    <Link href="/cart">
                        Cart
                    </Link>
                </div>
            </nav>
        </header>
    );
}