import React, {useEffect, useState} from "react";
import ShopItem from "./ShopItem";
import {useFilter} from "../contexts/FilterContext";
import {prepareAvailableCategories} from "../utils/helpers";

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
  const {selectedCategories, setCategories, priceRange} = useFilter();

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
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price >= priceRange.min &&
      product.price <= priceRange.max
  );

  return (
    <div className="p-4 items-center justify-center flex flex-wrap gap-4 w-full">
      {filteredProducts.map((product) => (
        <ShopItem
          key={product.id}
          title={product.title}
          price={product.price}
          createdAt={product.meta.createdAt}
          thumbnail={product.thumbnail}
          reviewCount={product.reviews.length ?? 0}
        />
      ))}
    </div>
  );
};

export default ShopList;
