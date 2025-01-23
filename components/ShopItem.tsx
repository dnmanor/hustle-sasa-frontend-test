import {Calendar, Star} from "lucide-react";
import React from "react";
import {formatDate} from "../utils/helpers";

import {Product} from "./ShopList";

type ShopItemProps = Pick<Product, "title" | "price" | "thumbnail"> & {
  createdAt: string;
  reviewCount: number;
};

const ShopItem: React.FC<ShopItemProps> = ({title, price, createdAt, thumbnail, reviewCount}) => {
  return (
    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] bg-white rounded-[15px] shadow-[0px_24px_80px_0px_#F5F5F5] hover:shadow-[0px_17px_30px_0px_#5AC3B675] transition-all duration-300 overflow-hidden p-4">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-[4/3] object-contain rounded-[10px]"
        />
        <button className="absolute top-2 right-2 p-2 hover:bg-gray-100/80 rounded-full transition-colors">
          <Star className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col space-y-3 mt-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2">{title}</h2>
        <p className="text-[#7E7E7E] text-sm">KSH {price.toFixed(2)}</p>
        <div className="flex items-center text-[#7E7E7E] text-sm gap-2">
          <Calendar className="w-4 h-4" />
          {formatDate(createdAt)}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="flex-1 h-12 bg-[#5AC3B6] text-white font-medium rounded-xl hover:bg-[#5AC3B6]/80 transition">
          Buy Now
        </button>
        <div className="flex-1 flex items-center justify-end text-[#7E7E7E] text-sm">
          <span>{reviewCount} Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
