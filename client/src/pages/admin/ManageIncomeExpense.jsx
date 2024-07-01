import { useState } from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import Table_IncomeExpense from "../../components/admin/Table_IncomeExpense";
import Search from "../../components/admin/Search";
import AddIncome from "../../components/admin/AddIncome";
import AddExpense from "../../components/admin/AddExpense";
import SelectType from "../../components/admin/SelectType";
import ShowName from "../../components/admin/ShowName";

const ManageIncomeExpense = () => {
  const [search, setSearch] = useState("");
  const [riceCaltivation_id_search, setRiceCaltivation_id_Search] =
    useState("");

  const [showSidebar_Moble, setShowSideBar_Moble] = useState(false);
  const [showSidebar_Web, setShowSideBar_Web] = useState(true);

  const [type, setType] = useState("");

  return (
    <div>
      {showSidebar_Web ? (
        <div className="mx-auto flex">
          {showSidebar_Moble ? (
            <div className="block lg:basis-1/6">
              <Sidebar
                page={"incomeExpense"}
                showSidebar_Moble={showSidebar_Moble}
                setShowSideBar_Moble={setShowSideBar_Moble}
              />
            </div>
          ) : (
            <div className="hidden lg:block basis-1/6">
              <Sidebar page={"incomeExpense"} />
            </div>
          )}
          <div className="w-full lg:basis-5/6">
            <Navbar
              setShowSideBar_Moble={setShowSideBar_Moble}
              setShowSideBar_Web={setShowSideBar_Web}
              showSidebar_Web={showSidebar_Web}
              showSidebar_Moble={showSidebar_Moble}
            />

            <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4">
              <div className="flex gap-2 flex-wrap justify-between">
                <Search
                  search={search}
                  setSearch={setSearch}
                  setRiceCaltivation_id_Search={setRiceCaltivation_id_Search}
                  page={"incomeExpense"}
                  text={"ระบุชื่อชาวนา"}
                />
                <div className="flex space-x-2">
                  <AddIncome />
                  <AddExpense />
                </div>
              </div>
              {search === "" ? (
                <div>
                  <div className="flex items-center gap-2 pb-4">
                    {/* <h1>รายรับรายจ่ายทั้งหมด</h1> */}
                    <SelectType setType={setType} />
                  </div>
                  <Table_IncomeExpense
                    search={search}
                    riceCaltivation_id_search={riceCaltivation_id_search}
                    type={type}
                  />
                </div>
              ) : (
                <ShowName
                  search={search}
                  page={"incomeExpense"}
                  riceCaltivation_id_search={riceCaltivation_id_search}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {showSidebar_Moble ? (
            <div className="block lg:hidden">
              <Sidebar
                page={"incomeExpense"}
                showSidebar_Moble={showSidebar_Moble}
                setShowSideBar_Moble={setShowSideBar_Moble}
              />
            </div>
          ) : (
            <div className="hidden">
              <Sidebar page={"incomeExpense"} />
            </div>
          )}
          <div className="w-full lg:basis-6/6">
            <Navbar
              setShowSideBar_Moble={setShowSideBar_Moble}
              setShowSideBar_Web={setShowSideBar_Web}
              showSidebar_Web={showSidebar_Web}
              showSidebar_Moble={showSidebar_Moble}
            />
            <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4 basis-5/6">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Search
                    search={search}
                    setSearch={setSearch}
                    setRiceCaltivation_id_Search={setRiceCaltivation_id_Search}
                    page={"incomeExpense"}
                    text={"ระบุชื่อชาวนา"}
                  />
                </div>
                <div className="flex space-x-2">
                  <AddIncome />
                  <AddExpense />
                </div>
              </div>
              {search === "" ? (
                <div>
                  <div className="flex items-center gap-2 pb-4">
                    {/* <h1>รายรับรายจ่ายทั้งหมด</h1> */}
                    <SelectType setType={setType} />
                  </div>
                  <Table_IncomeExpense
                    search={search}
                    riceCaltivation_id_search={riceCaltivation_id_search}
                    type={type}
                  />
                </div>
              ) : (
                <ShowName
                  search={search}
                  page={"incomeExpense"}
                  riceCaltivation_id_search={riceCaltivation_id_search}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageIncomeExpense;
