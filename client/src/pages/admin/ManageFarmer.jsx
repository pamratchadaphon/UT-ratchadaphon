import { useState } from "react";
import AddFarmer from "../../components/admin/AddFarmer";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import Search from "../../components/admin/Search";
import Table_Farmers from "../../components/admin/Table_Farmers";

const ManageFarmer = () => {
  const [searchFname, setSearchFname] = useState("");
  // const [searchLname, setSearchLname] = useState("");

  const searchName = (string) => setSearchFname(string);

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
                search={searchFname}
                searchName={searchName}
                text={"ค้นหาชื่อ"}
              />
              <Search text={"ค้นหานามสกุล"} />
            </div>
          </div>
          <Table_Farmers search={searchFname} />
        </div>
      </div>
    </div>
  );
};

export default ManageFarmer;
