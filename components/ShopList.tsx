import React, { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import { useFilter } from "../contexts/FilterContext";
import { filterProducts, prepareAvailableCategories } from "../utils/helpers";
import Button from "./Button";
import { LoaderCircle } from "lucide-react";

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

const ITEMS_PER_PAGE = 12;

const ShopList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { selectedCategories, setCategories, priceRange } = useFilter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);

        const uniqueCategories = prepareAvailableCategories(data.products);
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setCategories]);

  const filteredProducts = filterProducts(
    products,
    selectedCategories,
    priceRange
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  if (loading){
    return(
      <div className="w-full flex items-center justify-center">
        <LoaderCircle className="animate-spin"/>
      </div>
    )
  }

  if (error){
    return(
      <div className="w-full flex items-center justify-center text-red-600">
        Error fetching products, please try again.
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="p-4 items-center justify-center flex flex-wrap gap-4 w-full">
        {paginatedProducts.map((product) => (
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

      {totalPages > 1 && (
        <div className="flex gap-2 items-center justify-center mt-8 mb-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors
                ${
                  pageNum === currentPage
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            )
          )}
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full"
            >
              »
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopList;
