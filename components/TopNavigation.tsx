import React, { useState } from "react";
import NavigationLink, { NavigationItem } from "../components/NavigationLink";
import { Search } from "lucide-react";
import CountrySelector from "../components/CountrySelector";
import { CountryMenuOption } from "../data/countries";
import { UserRound, Star, ShoppingBag } from "lucide-react";
import Button from "../components/Button";
import Image from "next/image";

const NAV_LINKS: NavigationItem[] = [
  { name: "Corporate / business", url: "", nested: false },
  { name: "Comedy", url: "", nested: false },
  { name: "charity", url: "", nested: false },
  { name: "podcast", url: "", nested: false },
  { name: "fitness / dancing", url: "", nested: false },
  { name: "concert", url: "", nested: false },
  { name: "more", url: "", nested: true },
];

const TopNavigation = () => {
  const [currentCountry, setCurrentCountry] = useState({
    title: "Uganda",
    value: "UG",
  });
  return (
    <div className="px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <a href="/">
          <Image
            src="logo.svg"
            height={60}
            width={60}
            alt="logo"
            className="cursor-pointer"
          />
        </a>
        <div className="flex gap-x-8">
          {NAV_LINKS.map((link) => (
            <NavigationLink link={link} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 border border-gray-100 p-2 rounded-md">
          <Search size={16} />
          <input type="text" placeholder="Search..." />
        </div>
        <CountrySelector
          id={"country-selector"}
          open={false}
          onToggle={() => {
            console.log("toggles");
          }}
          onChange={() => {
            console.log("toggles");
          }}
          selectedValue={currentCountry as CountryMenuOption}
        />
        <div className="flex items-center gap-2">
          <UserRound />
          <Star />
          <ShoppingBag />
        </div>
        <Button>For creators</Button>
      </div>
    </div>
  );
};

export default TopNavigation;
