import Sidebar from "../../components/admin/Sidebar";
import BoxDashboard from "../../components/admin/BoxDashboard";
import Navbar from "../../components/admin/Navbar";
import { useState } from "react";
import SelectProvince from "../../components/admin/SelectProvince";

const Dashboard = () => {
  const [showSidebar_Moble, setShowSideBar_Moble] = useState(false);
  const [showSidebar_Web, setShowSideBar_Web] = useState(true);

  return (
    <div>
      {showSidebar_Web ? (
        <div className="mx-auto flex">
          {showSidebar_Moble ? (
            <div className="block lg:basis-1/6">
              <Sidebar
                page={"dashboard"}
                showSidebar_Moble={showSidebar_Moble}
                setShowSideBar_Moble={setShowSideBar_Moble}
              />
            </div>
          ) : (
            <div className="hidden lg:block basis-1/6">
              <Sidebar page={"dashboard"} />
            </div>
          )}
          <div className="w-full lg:basis-5/6">
            <Navbar
              setShowSideBar_Moble={setShowSideBar_Moble}
              setShowSideBar_Web={setShowSideBar_Web}
              showSidebar_Web={showSidebar_Web}
              showSidebar_Moble={showSidebar_Moble}
            />
            <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
              <BoxDashboard />
              <div className="flex gap-4">
                <div className="bg-gray-50 rounded-lg w-2/3 p-4 shadow">
                  รอบการปลูกย้อนหลัง 3 ปี
                  <div className="flex gap-2">
                    <select
                      name="type"
                      id="type"
                      className="border border-gray-300 rounded-lg p-2 text-sm bg-gray-50 text-gray-500"
                    >
                      <option value="">ปีที่ปลูก</option>
                    </select>
                    <SelectProvince />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg w-1/3 p-4 shadow">
                  พันธุ์ข้าวยอดนิยม 5 อันดับ
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {showSidebar_Moble ? (
            <div className="block lg:hidden">
              <Sidebar
                page={"dashboard"}
                showSidebar_Moble={showSidebar_Moble}
                setShowSideBar_Moble={setShowSideBar_Moble}
              />
            </div>
          ) : (
            <div className="hidden">
              <Sidebar page={"dashboard"} />
            </div>
          )}
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
