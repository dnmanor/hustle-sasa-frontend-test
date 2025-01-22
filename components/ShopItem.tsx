import { Calendar, Star } from "lucide-react";
import React from "react";
import { formatDate } from "../utils/helpers";

type ShopItemProps = {
  title: string;
  price: number;
  image: string;
  createdAt: string;
};

const ShopItem: React.FC<ShopItemProps> = ({ title, price, createdAt, image }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <div className="absolute top-2 right-2 cursor-pointer">
          <Star />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm mt-2">KSH {price.toFixed(2)}</p>
        <div className="flex items-center text-gray-400 text-sm mt-2">
          <Calendar />
          {formatDate(createdAt)}
        </div>
        <button className="mt-4 w-full bg-teal-500 text-white font-medium py-2 rounded-md hover:bg-teal-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
