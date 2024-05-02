import React from "react";
// Layout
import DashboardLayout from "../layout/DashboardLayout.jsx";
// Component
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";

const ComingSoonPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="space-y-4">
          <div className="h-[500px] w-full flex items-center justify-center rounded-sm border shadow-sm shadow-black">
            <ComingSoon />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ComingSoonPage;
