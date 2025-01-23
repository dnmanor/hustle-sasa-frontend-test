import {ReactNode} from "react";
import TopNavigation from "../components/TopNavigation";
import Hero from "../components/Hero";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
  return (
    <div>
      <TopNavigation />
      <Hero />

      <div className="flex p-20">{children}</div>
    </div>
  );
};

export default DashboardLayout;
