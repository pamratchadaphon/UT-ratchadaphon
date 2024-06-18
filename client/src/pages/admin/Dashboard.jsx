import Sidebar from "../../components/admin/Sidebar";
import BoxDashboard from "../../components/admin/BoxDashboard";
import Navbar from "../../components/admin/Navbar";
import { useState } from "react";

const Dashboard = () => {
  const [showSidebar, setShowSideBar] = useState(false);

  return (
    <div className="mx-auto flex">
      <div className="hidden lg:block basis-1/6">
        <Sidebar
          page={"dashboard"}
          showSidebar={showSidebar}
          setShowSideBar={setShowSideBar}
        />
      </div>
      <div className="w-full lg:basis-5/6">
        <Navbar setShowSideBar={setShowSideBar} />
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-8 basis-5/6">
          <BoxDashboard />
          <div className="bg-gray-100 rounded-lg w-2/3">
            ห
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
