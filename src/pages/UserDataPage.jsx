import { Suspense, lazy } from "react";
// Layout
import DashboardLayout from "../layout/DashboardLayout.jsx";
// Component
import Loading from "../components/Loading/Loading.jsx";
// Component - Lazy Loading
const UserData = lazy(() => import("../components/UserData/UserData.jsx"));

const UserDataPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="space-y-4">
          <div className="h-[500px] w-full flex items-center justify-center rounded-sm border shadow-sm shadow-black bg-gray-50 overflow-hidden">
            <Suspense
              fallback={
                <div className="w-hull h-full">
                  <Loading />
                </div>
              }
            >
              <UserData />
            </Suspense>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default UserDataPage;
