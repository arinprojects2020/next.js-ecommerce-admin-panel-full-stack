"use client";
import useCartStore from "../store/cartStore";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();
  if (!hasHydrated) return null;
  return (
    <Link
      href="/cart"
      // onClick={handleAddToCart}
      className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"
    >
      <CiShoppingCart className="w-4 h-4" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
