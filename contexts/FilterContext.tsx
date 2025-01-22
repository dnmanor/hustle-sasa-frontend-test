import React, { createContext, useContext, useState, useEffect } from 'react';

type FilterContextType = {
  selectedCategories: string[];
  categories: string[];
  setSelectedCategories: (categories: string[]) => void;
  setCategories: (categories: string[]) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const value = {
    selectedCategories,
    categories,
    setSelectedCategories,
    setCategories,
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