import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Component
import OverviewPage from "./pages/OverviewPage.jsx";
import UserDataPage from "./pages/UserDataPage.jsx";
import BarChartPage from "./pages/BarChartPage.jsx";
import PieChartPage from "./pages/PieChartPage.jsx";
import DoughnutChartPage from "./pages/DoughnutChartPage.jsx";
import ComingSoonPage from "./pages/ComingSoonPage.jsx";
import PageNotFoundPage from "./pages/PageNotFoundPage.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/data/user-data" />} />

          <Route path="/dashboard/overview" element={<OverviewPage />} />

          <Route path="/data/user-data" element={<UserDataPage />} />

          <Route path="/chart/bar-chart" element={<BarChartPage />} />
          <Route path="/chart/pie-chart" element={<PieChartPage />} />
          <Route path="/chart/doughnut-chart" element={<DoughnutChartPage />} />

          <Route path="/chart/line-chart" element={<ComingSoonPage />} />

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
