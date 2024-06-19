import { useState } from "react";
import AddRicevariety from "../../components/admin/AddRicevariety";
import Navbar from "../../components/admin/Navbar";
import Table_RiceVariety from "../../components/admin/Table_RiceVariety";
import Sidebar from "../../components/admin/Sidebar";
import Search from "../../components/admin/Search";

const ManageRiceVariety = () => {
  const [search, setSearch] = useState("");

  const searchName = (string) => setSearch(string);

  const [showSidebar, setShowSideBar] = useState(false);

  return (
    <div>
      <div className="mx-auto flex w-full">
        <div className="hidden lg:block basis-1/6">
          <Sidebar
            page={"riceVariety"}
            showSidebar={showSidebar}
            setShowSideBar={setShowSideBar}
          />
        </div>
        <div className="w-full lg:basis-5/6">
          <Navbar setShowSideBar={setShowSideBar} />
          <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <AddRicevariety />
              <Search search={search} searchName={searchName} text={'ค้นหาชื่อพันธุ์ข้าว'}/>
            </div>
            <Table_RiceVariety search={search} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRiceVariety;
