import { Suspense, lazy } from "react";
// Layout
import DashboardLayout from "../layout/DashboardLayout.jsx";
// Component
import Loading from "../components/Loading/Loading.jsx";
// Component - Lazy Loading
const VerticalBarChart = lazy(() =>
  import("../components/VerticalBarChart/VerticalBarChart.jsx")
);

const VerticalBarChartPage = () => {
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
              <VerticalBarChart />
            </Suspense>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default VerticalBarChartPage;
