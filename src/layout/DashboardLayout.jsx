import React from "react";
// Component
import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="h-16 bg-gray-800 text-white flex items-center justify-center">
          <Header />
        </div>
        <div className="flex flex-grow h-0 overflow-hidden">
          <div className="hidden lg:block overflow-y-auto min-w-[250px] border-r-2 bg-white">
            <Sidebar />
          </div>
          <div className="flex-grow flex flex-col justify-between overflow-y-auto bg-gray-100">
            <div className="space-y-4 p-4">
              {/* Main content */}
              {children}
            </div>
            {/* Footer */}
            <div className="min-h-16 mt-auto flex items-center justify-center bg-gray-50">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
