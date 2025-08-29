// components/SearchFilter.jsx
import { useState } from "react";
import useFilterStore from "../stores/useFilterStore";

const CATEGORIES = [
  {
    value: "",
    label: "All Categories",
    image: "https://cdn-icons-png.flaticon.com/512/709/709496.png"
  },
  {
    value: "electronics",
    label: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
  },
  {
    value: "jewelery",
    label: "Jewelery",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
  },
  {
    value: "men's clothing",
    label: "Men's Clothing",
    image: "https://cdn-icons-png.flaticon.com/512/892/892458.png"
  },
  {
    value: "women's clothing",
    label: "Women's Clothing",
    image: "https://cdn-icons-png.flaticon.com/512/892/892462.png"
  }
];

const SearchFilter = () => {
  const { searchQuery, category, setSearchQuery, setCategory, clearFilters } =
    useFilterStore();
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory =
    CATEGORIES.find((c) => c.value === category) || CATEGORIES[0];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search Products
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type to search..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Category
          </label>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between border border-gray-300 rounded-md p-2 bg-white"
            >
              <div className="flex items-center gap-2">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.label}
                  className="h-6 w-6 object-contain"
                />
                <span>{selectedCategory.label}</span>
              </div>
              <span className="text-gray-500">▼</span>
            </button>

            {isOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {CATEGORIES.map((cat) => (
                  <li
                    key={cat.value}
                    onClick={() => {
                      setCategory(cat.value);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 ${
                      category === cat.value ? "bg-gray-200" : ""
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="h-6 w-6 object-contain"
                    />
                    <span>{cat.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="self-end">
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
