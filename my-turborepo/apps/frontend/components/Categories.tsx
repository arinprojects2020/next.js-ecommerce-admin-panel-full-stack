"use client";

import { CiShoppingBasket } from "react-icons/ci";
import { PiShirtFoldedFill } from "react-icons/pi";
import { LuFootprints } from "react-icons/lu";
import { GiSunglasses } from "react-icons/gi";
import { GoBriefcase } from "react-icons/go";
import { PiTShirtLight } from "react-icons/pi";
import { TbVenus } from "react-icons/tb";
import { FaRegHandPaper } from "react-icons/fa";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
const categories = [
  {
    name: "All",
    icon: <CiShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <PiTShirtLight className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <LuFootprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <GiSunglasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <GoBriefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <TbVenus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <PiShirtFoldedFill className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <FaRegHandPaper className="w-4 h-4" />,
    slug: "gloves",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  console.log("searchParam......", searchParams, selectedCategory);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
