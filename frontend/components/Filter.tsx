"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const router = useRouter();
  const pathname = usePathname();
  console.log("searchParams", searchParams);
  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    console.log("parammsss", params);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort By:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="desc">Price:Low to High</option>
        <option value="asec">Price:High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
