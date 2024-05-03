import { Suspense, lazy } from "react";
// Layout
import DashboardLayout from "../layout/DashboardLayout.jsx";
// Component
import Loading from "../components/Loading/Loading.jsx";
// Component - Lazy Loading
const Overview = lazy(() => import("../components/Overview/Overview.jsx"));

const OverviewPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="space-y-4">
          <div className="h-full w-full flex items-center justify-center">
            <Suspense
              fallback={
                <div className="w-hull h-full">
                  <Loading />
                </div>
              }
            >
              <Overview />
            </Suspense>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default OverviewPage;
