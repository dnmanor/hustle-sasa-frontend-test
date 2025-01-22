import React from "react";

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
  "All",
  "0KES - 1500KES",
  "1500KES - 2000KES",
  "2000KES - 4000KES",
];

export const Filters = () => {
  return (
    <div className="p-4 w-80 bg-white space-y-6">
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
        <h3 className="text-lg font-bold mb-6">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label
              key={category.name}
              className="flex items-center space-x-2 text-sm"
            >
              <input
                type="checkbox"
                checked={category.selected || false}
                className="form-checkbox h-4 w-4 text-teal-500 border-gray-300 rounded"
              />
              <span>{category.name}</span>
              <span className="ml-auto text-gray-500">{category.count}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Pricing</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((price, index) => (
            <label key={price} className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="pricing"
                className="form-radio h-4 w-4 text-teal-500 border-gray-300"
                defaultChecked={index === 0}
              />
              <span>{price}</span>
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
            className="w-full accent-teal-500"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>500 KES</span>
            <span>1600 KES</span>
          </div>
        </div>
      </div>
    </div>
  );
};
