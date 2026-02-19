import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-5">
      <div className="flex gap-5 h-[calc(100vh-2rem)]">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div
          className={`
            flex-1 flex flex-col gap-5 overflow-hidden
            transition-all duration-300
          `}
        >
          <Topbar setSidebarOpen={setSidebarOpen} />

          <div className="flex-1 bg-[#f3f3f3] rounded-2xl overflow-auto no-scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};


export default MainLayout;
