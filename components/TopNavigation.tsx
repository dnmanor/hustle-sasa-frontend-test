import React, {useState} from "react";
import NavigationLink, {NavigationItem} from "../components/NavigationLink";
import {Search} from "lucide-react";
import CountrySelector from "../components/CountrySelector";
import {CountryMenuOption} from "../data/countries";
import {UserRound, Star, ShoppingBag} from "lucide-react";
import Button from "../components/Button";
import Image from "next/image";

const IconWrapper = ({
  children,
  messageCount,
}: {
  children: React.ReactNode;
  messageCount?: number;
}) => {
  return (
    <div className="flex items-center gap-2 relative">
      {children}
      {messageCount && (
        <div className="text-xs w-[18px] h-[18px] text-white bg-[#E53875] rounded-full flex items-center justify-center absolute top-[-5px] right-[-5px]">
          {messageCount}
        </div>
      )}
    </div>
  );
};

const NAV_LINKS: NavigationItem[] = [
  {name: "Corporate / business", url: "", nested: false},
  {name: "Comedy", url: "", nested: false},
  {name: "charity", url: "", nested: false},
  {name: "podcast", url: "", nested: false},
  {name: "fitness / dancing", url: "", nested: false},
  {name: "concert", url: "", nested: false},
  {name: "more", url: "", nested: true},
];

const TopNavigation = () => {
  const [currentCountry, setCurrentCountry] = useState({
    title: "Uganda",
    value: "UG",
  });

  const [openCountrySelector, setOpenCountrySelector] = useState(false);

  return (
    <div className="h-[108px] px-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <a href="/" className="mr-10">
          <Image src="logo.svg" height={60} width={60} alt="logo" className="cursor-pointer" />
        </a>
        <div className="flex gap-2">
          {NAV_LINKS.map((link) => (
            <NavigationLink link={link} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center border border-[#D1D3D4] p-2 rounded-lg">
          <Search size={16} color="#7E7E7E" />
          <input type="text" placeholder="Search..." className="outline-none border-none" />
        </div>
        <CountrySelector
          id={"country-selector"}
          open={openCountrySelector}
          onToggle={() => {
            setOpenCountrySelector(!openCountrySelector);
          }}
          onChange={() => {
            console.log("toggles");
          }}
          selectedValue={currentCountry as CountryMenuOption}
        />
        <div className="flex items-center gap-4 text-[#7E7E7E]">
          <IconWrapper>
            <UserRound />
          </IconWrapper>
          <IconWrapper messageCount={2}>
            <Star />
          </IconWrapper>
          <IconWrapper messageCount={3}>
            <ShoppingBag />
          </IconWrapper>
        </div>

        <div className="ml-4">
          <Button>For creators</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
