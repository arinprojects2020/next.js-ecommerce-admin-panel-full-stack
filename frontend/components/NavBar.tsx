import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FiShoppingCart } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { CiHome } from "react-icons/ci";
import ShoppingCartIcon from "./ShoppingCartIcon";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="E-COM" width={36} height={36} />
        <p className="hidden md:block text-md font-medium tracking-wider">
          E-COM
        </p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <CiHome className="w-4 h-4 text-gray-600" />
        </Link>
        <FiBell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default NavBar;
