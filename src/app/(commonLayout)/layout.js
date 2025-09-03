import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <div className="w-[100%]">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default CommonLayout;
