import React, { createContext, useContext, useState } from 'react';

type PriceRange = {
  min: number;
  max: number;
};

type FilterContextType = {
  selectedCategories: string[];
  categories: string[];
  priceRange: PriceRange;
  selectedPriceRangeIndex: number;
  setSelectedCategories: (categories: string[]) => void;
  setCategories: (categories: string[]) => void;
  setPriceRange: (range: PriceRange) => void;
  setSelectedPriceRangeIndex: (index: number) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 4000 });
  const [selectedPriceRangeIndex, setSelectedPriceRangeIndex] = useState(0);

  const value = {
    selectedCategories,
    categories,
    priceRange,
    selectedPriceRangeIndex,
    setSelectedCategories,
    setCategories,
    setPriceRange,
    setSelectedPriceRangeIndex,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
} 