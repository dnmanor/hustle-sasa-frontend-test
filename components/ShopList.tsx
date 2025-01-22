import React, { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import { useFilter } from "../contexts/FilterContext";
import { prepareAvailableCategories } from "../utils/helpers";

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

const ShopList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { selectedCategories, setCategories } = useFilter();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);

      const uniqueCategories = prepareAvailableCategories(data.products);
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, [setCategories]);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category)
  );

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ShopItem
          key={product.id}
          title={product.title}
          price={product.price}
          createdAt={product.meta.createdAt}
          image={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ShopList;
