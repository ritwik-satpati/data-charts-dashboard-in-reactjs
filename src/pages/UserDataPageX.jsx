import React, { useState, Suspense, lazy } from "react";
import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const UserData = lazy(() => import("../components/UserData/UserData.jsx"));

const UserDataPage = () => {
  const [isSidebarSmall, setIsSidebarSmall] = useState(false);
  const handleSidebarSize = () => {
    setIsSidebarSmall(!isSidebarSmall);
  };

  return (
    <div className="w-full h-full flex flex-col items-start divide-y-2 divide-black">
      <div className="w-full h-[50px]">
        <Header />
      </div>
      <div
        className="w-full flex justify-start"
        style={{ height: `calc(100vh - 50px)` }}
      >
        <div className={`${isSidebarSmall ? `w-[200px]` : `w-[250px]`} h-full`}>
          <Sidebar
            isSidebarSmall={isSidebarSmall}
            handleSidebarSize={handleSidebarSize}
          />
        </div>
        <div className="grow flex justify-start h-full scroll-y-auto">
          <div className="w-full">
            <Suspense fallback={<div>Loading...</div>}>
              <UserData />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDataPage;
