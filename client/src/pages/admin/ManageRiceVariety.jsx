import { useState } from "react";
import AddRicevariety from "../../components/admin/AddRicevariety";
import Navbar from "../../components/admin/Navbar";
import Search_RiceVariety from "../../components/admin/Search_RiceVariety";
import Table_RiceVariety from "../../components/admin/Table_RiceVariety";
import Sidebar from "../../components/admin/Sidebar";

const ManageRiceVariety = () => {
  const [search, setSearch] = useState("");

  const searchName = (string) => setSearch(string);

  const [showSidebar, setShowSideBar] = useState(false);

  return (
    <div>
      <div className="mx-auto flex">
        <Sidebar page={'riceVariety'} showSidebar={showSidebar} setShowSideBar={setShowSideBar}/>
        <div className="w-full lg:basis-5/6">
          <div className="bg-white h-16 border-b">
            <Navbar setShowSideBar={setShowSideBar}/>
          </div>
          <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <AddRicevariety />
              <Search_RiceVariety search={search} searchName={searchName} />
            </div>
            <Table_RiceVariety search={search} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageRiceVariety;
