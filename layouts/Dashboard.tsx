import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode; 
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default DashboardLayout;
