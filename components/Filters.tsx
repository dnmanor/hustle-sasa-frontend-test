import React from "react";
import {useFilter} from "../contexts/FilterContext";

const SEARCH_TAGS = ["Party", "March 14", "Day", "Kenya"];

const CATEGORIES = [
  {name: "Corporate / Business", count: 11},
  {name: "Comedy", count: 4},
  {name: "Charity", count: 2},
  {name: "Podcast", count: 15},
  {name: "Fitness / Dancing", count: 34},
  {name: "Concert", count: 3},
  {name: "Party", count: 7, selected: true},
  {name: "Wellness", count: 12},
  {name: "Theater / Play", count: "99+"},
  {name: "Pageant", count: 6},
];

const PRICE_RANGES = [
  {label: "All", min: 0, max: 4000},
  {label: "0KES - 1500KES", min: 0, max: 1500},
  {label: "1500KES - 2000KES", min: 1500, max: 2000},
  {label: "2000KES - 4000KES", min: 2000, max: 4000},
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
    setPriceRange({...priceRange, max: value});
    setSelectedPriceRangeIndex(-1);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 4000 });
    setSelectedPriceRangeIndex(0);
  };

  return (
    <div className="md:p-4 p-[10px] md:flex-shrink-0 w-full md:w-80 bg-white space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Search Tags</h3>
        <div className="flex flex-wrap gap-2">
          {SEARCH_TAGS.map((tag) => (
            <div
              key={tag}
              className="bg-[#46C75A] text-white text-sm px-4 py-1 rounded-full cursor-pointer text-center"
            >
              {tag} <span className="ml-2 text-white">×</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center space-x-2 text-sm capitalize cursor-pointer"
            >
              <div className="inline-flex items-center">
                <label className="flex items-center cursor-pointer relative">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-md border border-[#D1D3D4] checked:bg-[#5AC3B6] checked:border-[#5AC3B6]"
                    id="check"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>

              <span className="text-[#7E7E7E] font-medium">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Pricing</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
          {PRICE_RANGES.map((price, index) => (
            <label key={price.label} className="flex items-center space-x-2 text-sm">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center cursor-pointer"
                  htmlFor={`price-${index}`}
                >
                  <input
                    name="pricing"
                    type="radio"
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#D1D3D4] checked:border-[#5AC3B6] transition-all"
                    id={`price-${index}`}
                    checked={index === selectedPriceRangeIndex}
                    onChange={() => handlePriceRangeChange(index)}
                  />
                  <span className="absolute bg-[#5AC3B6] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                </label>
                <label
                  className="ml-2 text-[#7E7E7E] cursor-pointer text-sm"
                  htmlFor={`price-${index}`}
                >
                  {price.label}
                </label>
              </div>
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
            className="w-full accent-teal-500 bg-transparent"
          />
          <div className="flex justify-start items-center text-sm">
            <span className="text-[#7E7E7E]">Price:</span>
            <span className="ml-2">
              KES {priceRange.min} - KES {priceRange.max}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={handleClearFilters}
            className="w-full h-[56px] bg-[#5AC3B6] text-white font-medium py-2 rounded-xl hover:bg-[#5AC3B6]/80 transition"
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
};
