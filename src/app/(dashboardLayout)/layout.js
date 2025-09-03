import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-[90%] items-center bg-blue-100 mx-auto">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
