import Sidebar from "../../components/admin/Sidebar";
import BoxDashboard from "../../components/admin/BoxDashboard";
import Navbar from "../../components/admin/Navbar";
import { useState } from "react";

const Dashboard = () => {
  const [showSidebar_Moble, setShowSideBar_Moble] = useState(false);
  const [showSidebar_Web, setShowSideBar_Web] = useState(false);

  return (
    <div>
      {showSidebar_Web === false ? (
      <div className="mx-auto flex">
        {showSidebar_Moble ? (
          <div className="block">
            <Sidebar
              page={"dashboard"}
              showSidebar_Moble={showSidebar_Moble}
              setShowSideBar_Moble={setShowSideBar_Moble}
            />
          </div>
        ) : (
          <div className="hidden lg:block">
            <Sidebar
              page={"dashboard"}
              showSidebar_Moble={showSidebar_Moble}
              setShowSideBar_Moble={setShowSideBar_Moble}
            />
          </div>
        )}
        <div className="w-full lg:basis-5/6">
          <Navbar
            setShowSideBar_Moble={setShowSideBar_Moble}
            setShowSideBar_Web={setShowSideBar_Web}
            showSidebar_Web={showSidebar_Web}
            showSidebar_Moble={showSidebar_Moble}
          />
          <div className="bg-white m-4 rounded-lg shadow space-y-4 p-8 basis-5/6">
            <BoxDashboard />
            <div className="bg-gray-100 rounded-lg w-2/3"></div>
          </div>
        </div>
      </div>
 ) : (
      <div>
          <div className="hidden">
            <Sidebar
              page={"dashboard"}
              showSidebar_Moble={showSidebar_Moble}
              setShowSideBar_Moble={setShowSideBar_Moble}
            />
          </div>
          <div className="w-full lg:basis-6/6">
            <Navbar
              setShowSideBar_Moble={setShowSideBar_Moble}
              setShowSideBar_Web={setShowSideBar_Web}
              showSidebar_Web={showSidebar_Web}
              showSidebar_Moble={showSidebar_Moble}
            />
            <div className="bg-white m-4 rounded-lg shadow space-y-4 p-8 basis-5/6">
              <BoxDashboard />
              <div className="bg-gray-100 rounded-lg w-2/3"></div>
            </div>
          </div>
        </div> 
     )} 
    </div>
  );
};

export default Dashboard;
