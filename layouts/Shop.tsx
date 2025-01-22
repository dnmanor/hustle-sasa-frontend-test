import React, { ReactNode } from "react";

type ShopLayoutProps = {
  children: ReactNode;
};

const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
  return <div className="p-20 flex">{children}</div>;
};

export default ShopLayout;
