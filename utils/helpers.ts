import { Product } from '../components/ShopList';

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const prepareAvailableCategories = (products: Product[]): string[] => {
  const categoriesSet = new Set(products.map(product => product.category));
  return Array.from(categoriesSet);
};

export const filterProducts = (
  products: Product[], 
  selectedCategories: string[], 
  priceRange: { min: number; max: number }
) => {
  return products.filter(
    (product) =>
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
  );
};