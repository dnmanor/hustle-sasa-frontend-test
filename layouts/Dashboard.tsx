import {ReactNode} from "react";
import TopNavigation from "../components/TopNavigation";
import Hero from "../components/Hero";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
  return (
    <div className="w-full h-full">
      <TopNavigation />
      <Hero />

      <div className="flex flex-col lg:flex-row gap-4 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 w-full max-w-[2000px] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
