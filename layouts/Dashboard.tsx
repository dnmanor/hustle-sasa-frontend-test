import { NavigationItem } from "../components/NavigationLink";
import { ReactNode, useState } from "react";
import TopNavigation from "../components/TopNavigation";
import Hero from "../components/Hero";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopNavigation />
      <Hero />
      {children}
    </div>
  );
};

export default DashboardLayout;
