import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Component
import OverviewPage from "./pages/OverviewPage.jsx";
import UserDataPage from "./pages/UserDataPage.jsx";
import VerticalBarChartPage from "./pages/VerticalBarChartPage.jsx";
import StackedBarChartPage from "./pages/StackedBarChartPage.jsx";
import PieChartPage from "./pages/PieChartPage.jsx";
import DoughnutChartPage from "./pages/DoughnutChartPage.jsx";
import LineChartPage from "./pages/LineChartPage.jsx";
import AreaChartPage from "./pages/AreaChartPage.jsx";
import ComingSoonPage from "./pages/ComingSoonPage.jsx";
import PageNotFoundPage from "./pages/PageNotFoundPage.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/dashboard/overview" />}
          />

          <Route path="/dashboard/overview" element={<OverviewPage />} />

          <Route path="/data/user-data" element={<UserDataPage />} />

          <Route
            path="/chart/vertical-bar-chart"
            element={<VerticalBarChartPage />}
          />
          <Route
            path="/chart/stacked-bar-chart"
            element={<StackedBarChartPage />}
          />
          <Route path="/chart/pie-chart" element={<PieChartPage />} />
          <Route path="/chart/doughnut-chart" element={<DoughnutChartPage />} />
          <Route path="/chart/line-chart" element={<LineChartPage />} />
          <Route path="/chart/area-chart" element={<AreaChartPage />} />

          <Route path="/chart/scatter-chart" element={<ComingSoonPage />} />
          <Route path="/chart/radar-chart" element={<ComingSoonPage />} />
          <Route path="/chart/multitype-chart" element={<ComingSoonPage />} />

          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          // style: {
          //   borderRadius: '5px',
          //   background: "#333",
          //   color: "#fff",
          // },
          className: "font-Poppins bg-[#333] text-white rounded-sm",
        }}
      />
    </>
  );
}
