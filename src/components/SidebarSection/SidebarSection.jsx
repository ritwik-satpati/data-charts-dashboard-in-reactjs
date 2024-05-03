// Component
import SidebarSectionTitle from "../SidebarSectionTitle/SidebarSectionTitle.jsx";
import SidebarSectionItem from "../SidebarSectionItem/SidebarSectionItem.jsx";
// Icon
import { MdDashboard } from "react-icons/md";
import { BsFillClipboard2DataFill } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { FaChartSimple } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { FaChartLine } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { BiScatterChart } from "react-icons/bi";
import { AiOutlineRadarChart } from "react-icons/ai";
import { TbChartHistogram } from "react-icons/tb";

const SidebarSection = () => {
  return (
    <>
      <div className="w-full h-full p-3 space-y-5">
        <div id="dashboard-section" className="space-y-2">
          <SidebarSectionTitle
            titleId={"dashboard-section-title"}
            titleName={"Dashboard"}
            titleIcon={<MdDashboard />}
          />
          <SidebarSectionItem
            itemId={"dashboard_overview"}
            itemName={"Overview"}
            itemIcon={<BsFillClipboard2DataFill />}
            itemPath={"/dashboard/overview"}
          />
        </div>
        <div id="data-section" className="space-y-2">
          <SidebarSectionTitle
            titleId={"data-section-title"}
            titleName={"Data"}
            titleIcon={<AiFillDatabase />}
          />
          <SidebarSectionItem
            itemId={"data_user-data"}
            itemName={"User Data"}
            itemIcon={<BsFileEarmarkSpreadsheetFill />}
            itemPath={"/data/user-data"}
          />
          <SidebarSectionItem
            itemId={"data_admin-data"}
            itemName={"Admin Data"}
            itemIcon={<BsFileEarmarkSpreadsheetFill />}
            itemPath={"/data/admin-data"}
            isActive={false}
          />
        </div>
        <div id="chart-section" className="space-y-2">
          <SidebarSectionTitle
            titleId={"chart-section-title"}
            titleName={"Chart"}
            titleIcon={<FaChartSimple />}
          />
          <SidebarSectionItem
            itemId={"chart_vertical-bar-chart"}
            itemName={"Vertical Bar Chart"}
            itemIcon={<FaChartBar />}
            itemPath={"/chart/vertical-bar-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_stacked-bar-chart"}
            itemName={"Stacked Bar Chart"}
            itemIcon={<MdOutlineStackedBarChart />}
            itemPath={"/chart/stacked-bar-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_pie-chart"}
            itemName={"Pie Chart"}
            itemIcon={<FaChartPie />}
            itemPath={"/chart/pie-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_doughnut-chart"}
            itemName={"Doughnut Chart"}
            itemIcon={<BiSolidDoughnutChart />}
            itemPath={"/chart/doughnut-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_line-chart"}
            itemName={"Line Chart"}
            itemIcon={<FaChartLine />}
            itemPath={"/chart/line-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_area-chart"}
            itemName={"Area Chart"}
            itemIcon={<FaChartArea />}
            itemPath={"/chart/area-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_scatter-chart"}
            itemName={"Scatter Chart"}
            itemIcon={<BiScatterChart />}
            itemPath={"/chart/scatter-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_radar-chart"}
            itemName={"Radar Chart"}
            itemIcon={<AiOutlineRadarChart />}
            itemPath={"/chart/radar-chart"}
          />
          <SidebarSectionItem
            itemId={"chart_multitype-chart"}
            itemName={"Multitype Chart"}
            itemIcon={<TbChartHistogram />}
            itemPath={"/chart/multitype-chart"}
          />
        </div>
      </div>
    </>
  );
};

export default SidebarSection;
