import React from "react";
// Component
import SidebarSection from "../SidebarSection/SidebarSection.jsx";
// Icon
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Sidebar = ({ isSidebarSmall, handleSidebarSize }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between space-y-5">
        <SidebarSection />
        {/* <div className="w-full flex items-center justify-end space-x-2 font-Poppins text-start overflow-hidden py-2">
          <div
            className="aspect-square bg-blue-100 hover:bg-blue-300 rounded-md p-2 cursor-pointer"
            onClick={handleSidebarSize}
          >
            {isSidebarSmall ? (
              <FaAngleRight className="text-xl" />
            ) : (
              <FaAngleLeft className="text-xl" />
            )}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
