import React from "react";
// Component
import SidebarSectionTitle from "../SidebarSectionTitle/SidebarSectionTitle.jsx";
import SidebarSectionItem from "../SidebarSectionItem/SidebarSectionItem.jsx";
// Icon
import { AiFillDatabase } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";

const SidebarSection = () => {
  return (
    <>
      <div className="w-full h-full p-3 space-y-5">
        <div id="data-section" className="space-y-2">
          <SidebarSectionTitle
            titleId={"data-section-title"}
            titleName={"Data"}
            titleIcon={<AiFillDatabase />}
          />
          <SidebarSectionItem
            itemId={"data_user-data"}
            itemName={"User Data"}
            itemIcon={<FaHouseUser />}
            itemPath={"/data/user-data"}
          />
          <SidebarSectionItem
            itemId={"data_admin-data"}
            itemName={"Admin Data"}
            itemIcon={<FaHouseUser />}
            itemPath={"/data/admin-data"}
            isActive={false}
          />
        </div>
        <div id="chart-section" className="space-y-2">
          <SidebarSectionTitle
            titleId={"chart-section-title"}
            titleName={"Chart"}
            titleIcon={<FaChartArea />}
          />
          <SidebarSectionItem
            itemId={"chart_bar-chart"}
            itemName={"Bar Chart"}
            itemIcon={<FaChartBar />}
            itemPath={"/chart/bar-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_pie-chart"}
            itemName={"Pie Chart"}
            itemIcon={<FaChartPie />}
            itemPath={"/chart/pie-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_line-chart"}
            itemName={"Line Chart"}
            itemIcon={<FaChartLine />}
            itemPath={"/chart/line-chart"}
          />
        </div>
      </div>
    </>
  );
};

export default SidebarSection;
