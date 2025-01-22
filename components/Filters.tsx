import React from "react";
import { useFilter } from "../contexts/FilterContext";

const SEARCH_TAGS = ["Party", "March 14", "Day", "Kenya"];
const CATEGORIES = [
  { name: "Corporate / Business", count: 11 },
  { name: "Comedy", count: 4 },
  { name: "Charity", count: 2 },
  { name: "Podcast", count: 15 },
  { name: "Fitness / Dancing", count: 34 },
  { name: "Concert", count: 3 },
  { name: "Party", count: 7, selected: true },
  { name: "Wellness", count: 12 },
  { name: "Theater / Play", count: "99+" },
  { name: "Pageant", count: 6 },
];

const PRICE_RANGES = [
  { label: "All", min: 0, max: 4000 },
  { label: "0KES - 1500KES", min: 0, max: 1500 },
  { label: "1500KES - 2000KES", min: 1500, max: 2000 },
  { label: "2000KES - 4000KES", min: 2000, max: 4000 },
];

export const Filters = () => {
  const {
    categories,
    selectedCategories,
    setSelectedCategories,
    priceRange,
    setPriceRange,
    selectedPriceRangeIndex,
    setSelectedPriceRangeIndex,
  } = useFilter();

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRangeChange = (index: number) => {
    setSelectedPriceRangeIndex(index);
    setPriceRange({
      min: PRICE_RANGES[index].min,
      max: PRICE_RANGES[index].max,
    });
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange({ ...priceRange, max: value });
    setSelectedPriceRangeIndex(-1);
  };

  return (
    <div className="p-4 w-80 bg-white space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Search Tags</h3>
        <div className="flex flex-wrap gap-2">
          {SEARCH_TAGS.map((tag) => (
            <div
              key={tag}
              className="flex items-center bg-green-500 text-white text-sm px-3 py-1 rounded-full cursor-pointer"
            >
              {tag} <span className="ml-2 text-white">×</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center space-x-2 text-sm capitalize"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="form-checkbox h-4 w-4 text-teal-500 border-gray-300 rounded"
              />
              <span>{category}</span>
              {/* <span className="ml-auto text-gray-500">{category.count}</span> */}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Pricing</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((price, index) => (
            <label key={price.label} className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="pricing"
                className="form-radio h-4 w-4 text-teal-500 border-gray-300"
                checked={index === selectedPriceRangeIndex}
                onChange={() => handlePriceRangeChange(index)}
              />
              <span>{price.label}</span>
            </label>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-sm mb-2">Price Range</p>
          <input
            type="range"
            min="0"
            max="4000"
            step="50"
            value={priceRange.max}
            onChange={handleRangeChange}
            className="w-full accent-teal-500"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>{priceRange.min} KES</span>
            <span>{priceRange.max} KES</span>
          </div>
        </div>
      </div>
    </div>
  );
};
