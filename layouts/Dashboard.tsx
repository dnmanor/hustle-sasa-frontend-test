import { NavigationItem } from "../components/NavigationLink";
import { ReactNode, useState } from "react";
import TopNavigation from "../components/TopNavigation";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopNavigation />
      {children}
    </div>
  );
};

export default DashboardLayout;
