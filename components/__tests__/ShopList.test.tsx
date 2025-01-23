import { Product } from "../ShopList";
import { filterProducts } from "../../utils/helpers";

describe("ShopList", () => {
  const MOCK_PRODUCTS = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      category: "beauty",
      price: 9.99,
      meta: { createdAt: "2024-05-23T08:56:21.618Z" },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      reviews: [
        {
          rating: 2,
          comment: "Very unhappy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "John Doe",
          reviewerEmail: "john.doe@x.dummyjson.com",
        },
        {
          rating: 2,
          comment: "Not as described!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nolan Gonzalez",
          reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Scarlett Wright",
          reviewerEmail: "scarlett.wright@x.dummyjson.com",
        },
      ],
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
      discountPercentage: 7.17,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      sku: "RCH45Q1A",
      weight: 2,
      dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
      warrantyInformation: "1 month warranty",
      shippingInformation: "Ships in 1 month",
      availabilityStatus: "Low Stock",
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 24,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      category: "beauty",
      price: 19.99,
      meta: { createdAt: "2024-05-23T08:56:21.618Z" },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
      ],
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks.",
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: { width: 12.42, height: 8.63, depth: 29.13 },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
    },
    {
      id: 3,
      title: "Powder Canister",
      category: "beauty",
      price: 14.99,
      meta: { createdAt: "2024-05-23T08:56:21.618Z" },
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
      reviews: [
        {
          rating: 5,
          comment: "Very happy with my purchase!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Ethan Thompson",
          reviewerEmail: "ethan.thompson@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Great value for money!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Levi Hicks",
          reviewerEmail: "levi.hicks@x.dummyjson.com",
        },
      ],
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine.",
      discountPercentage: 18.14,
      rating: 3.82,
      stock: 59,
      tags: ["beauty", "face powder"],
      brand: "Velvet Touch",
      sku: "9EN8WLT2",
      weight: 8,
      dimensions: { width: 24.16, height: 10.7, depth: 11.07 },
      warrantyInformation: "2 year warranty",
      shippingInformation: "Ships in 1-2 business days",
      availabilityStatus: "In Stock",
      returnPolicy: "60 days return policy",
      minimumOrderQuantity: 25,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ products: MOCK_PRODUCTS }),
      })
    ) as jest.Mock;
  });

  test("filters products by price range correctly", () => {
    const selectedCategories: string[] = [];
    const priceRange = { min: 15, max: 25 };
    const filteredProducts = filterProducts(
      MOCK_PRODUCTS as Product[],
      selectedCategories,
      priceRange
    );

    expect(filteredProducts.length).toBe(1);
    expect(filteredProducts[0].title).toBe("Eyeshadow Palette with Mirror");
    expect(filteredProducts[0].price).toBe(19.99);
  });

  test("filters products by category correctly", () => {
    const selectedCategories = ["beauty"];
    const priceRange = { min: 0, max: 1000 };
    const filteredProducts = filterProducts(
      MOCK_PRODUCTS as Product[],
      selectedCategories,
      priceRange
    );

    expect(filteredProducts.length).toBe(3);
    expect(
      filteredProducts.every((product) => product.category === "beauty")
    ).toBe(true);
  });

  test("paginates products correctly with ITEMS_PER_PAGE = 2", () => {
    const ITEMS_PER_PAGE = 2;
    const currentPage = 1;
    const filteredProducts = MOCK_PRODUCTS as Product[];

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = filteredProducts.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

    expect(paginatedProducts.length).toBe(2);
    expect(totalPages).toBe(2);
    expect(paginatedProducts[0].title).toBe("Essence Mascara Lash Princess");
    expect(paginatedProducts[1].title).toBe("Eyeshadow Palette with Mirror");
  });

  test("combines category and price range filters correctly", () => {
    const selectedCategories = ["beauty"];
    const priceRange = { min: 10, max: 15 };
    const filteredProducts = filterProducts(
      MOCK_PRODUCTS as Product[],
      selectedCategories,
      priceRange
    );

    expect(filteredProducts.length).toBe(1);
    expect(filteredProducts[0].title).toBe("Powder Canister");
    expect(filteredProducts[0].price).toBe(14.99);
  });
});
