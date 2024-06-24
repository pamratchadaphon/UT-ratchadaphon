import { useState } from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import Table_IncomeExpense from "../../components/admin/Table_IncomeExpense";
import Search from "../../components/admin/Search";
import AddIncome from "../../components/admin/AddIncome";
import AddExpense from "../../components/admin/AddExpense";

const ManageIncomeExpense = () => {
  const [search, setSearch] = useState("");
  const searchName = (string) => setSearch(string);

  return (
    <div className="mx-auto flex">
      <div className="hidden lg:block basis-1/6">
        <Sidebar page={"incomeExpense"} />
      </div>
      <div className="w-full lg:basis-5/6">
        <Navbar />
        <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex space-x-2">
              <AddIncome />
              <AddExpense/>
            </div>
            <Search
              search={search}
              searchName={searchName}
              text={"ค้นหาอีเมล"}
            />
          </div>
          <Table_IncomeExpense search={search} />
        </div>
      </div>
    </div>
  );
};

export default ManageIncomeExpense;
