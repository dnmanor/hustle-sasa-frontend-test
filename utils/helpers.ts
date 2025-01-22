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
