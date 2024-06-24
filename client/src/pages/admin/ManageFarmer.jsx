import { useState } from "react";
import AddFarmer from "../../components/admin/AddFarmer";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import Search from "../../components/admin/Search";
import Table_Farmers from "../../components/admin/Table_Farmers";

const ManageFarmer = () => {
  const [search, setSearch] = useState("");

  const searchName = (string) => setSearch(string);

  return (
    <div className="mx-auto flex">
      <div className="hidden lg:block basis-1/6">
        <Sidebar page={"farmer"} />
      </div>
      <div className="w-full lg:basis-5/6">
        <Navbar />
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <AddFarmer />
            <div className="flex space-x-2">
              <Search
                search={search}
                searchName={searchName}
                text={"ค้นหาอีเมล"}
              />
            </div>
          </div>
          <Table_Farmers search={search} />
        </div>
      </div>
    </div>
  );
};

export default ManageFarmer;
