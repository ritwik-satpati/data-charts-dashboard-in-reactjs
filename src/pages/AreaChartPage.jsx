import { Suspense, lazy } from "react";
// Layout
import DashboardLayout from "../layout/DashboardLayout.jsx";
// Component
import Loading from "../components/Loading/Loading.jsx";
// Component - Lazy Loading
const AreaChart = lazy(() => import("../components/AreaChart/AreaChart.jsx"));

const AreaChartPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="space-y-4">
          <div className="w-full flex items-center justify-center rounded-sm border shadow-sm bg-gray-50 shadow-black">
            <Suspense
              fallback={
                <div className="w-hull h-full">
                  <Loading />
                </div>
              }
            >
              <AreaChart />
            </Suspense>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AreaChartPage;
