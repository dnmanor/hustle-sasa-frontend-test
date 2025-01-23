import React, { useState } from "react";
import NavigationLink, { NavigationItem } from "../components/NavigationLink";
import { Search } from "lucide-react";
import CountrySelector from "../components/CountrySelector";
import { CountryMenuOption } from "../data/countries";
import { UserRound, Star, ShoppingBag, Menu } from "lucide-react";
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

  const [openCountrySelector, setOpenCountrySelector] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="px-4 sm:px-6 py-4 md:py-0 md:h-[108px] flex items-center justify-between bg-white">
        <div className="flex items-center gap-2 flex-1">
          <a href="/" className="mr-6">
            <Image
              src="logo.svg"
              height={60}
              width={60}
              alt="logo"
              className="cursor-pointer w-12 h-12 md:w-[60px] md:h-[60px]"
            />
          </a>
          <div className="hidden lg:flex gap-4 flex-1">
            {NAV_LINKS.map((link) => (
              <NavigationLink key={link.name} link={link} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center border border-[#D1D3D4] p-2 rounded-lg gap-1">
            <Search size={16} color="#7E7E7E" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none border-none w-24 sm:w-auto"
            />
          </div>
          <div className="hidden sm:block">
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
          </div>

          <div className="hidden lg:flex items-center gap-4 text-[#7E7E7E]">
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

          <div className="hidden lg:block ml-4">
            <Button>For creators</Button>
          </div>

          <button
            className="lg:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-[#D1D3D4] p-2 rounded-lg gap-1">
              <Search size={16} color="#7E7E7E" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border-none flex-1"
              />
            </div>

            <div>
              <CountrySelector
                id="country-selector-mobile"
                open={openCountrySelector}
                onToggle={() => setOpenCountrySelector(!openCountrySelector)}
                onChange={() => console.log("toggles")}
                selectedValue={currentCountry as CountryMenuOption}
              />
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <NavigationLink key={link.name} link={link} />
              ))}
            </nav>

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

            <div>
              <Button>For creators</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavigation;
