import { useState } from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import Table_IncomeExpense from "../../components/admin/Table_IncomeExpense";
import Search from "../../components/admin/Search";
import AddIncome from "../../components/admin/AddIncome";
import AddExpense from "../../components/admin/AddExpense";
import SelectType from "../../components/admin/SelectType";
import Search_RiceCaltivation from "../../components/admin/Search_RiceCaltivation";

const ManageIncomeExpense = () => {
  const [searchEmail, setSearchEmail] = useState("");

  const [showSidebar_Moble, setShowSideBar_Moble] = useState(false);
  const [showSidebar_Web, setShowSideBar_Web] = useState(true);

  const [searchRiceCaltivation, setSearchRiceCaltivation] = useState("");

  const [type, setType] = useState('')

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
            <div className="flex p-4 gap-2 flex-wrap">
              <Search
                search={searchEmail}
                setSearch={setSearchEmail}
                text={"ผู้ปลูก"}
              />
              <Search_RiceCaltivation
                searchRiceCaltivation={searchRiceCaltivation}
                setSearchRiceCaltivation={setSearchRiceCaltivation}
              />
            </div>
            <div className="flex space-x-2 pl-4">
              <SelectType setType={setType}/>
              <AddIncome />
              <AddExpense />
            </div>
            <div className="bg-white m-4 rounded-lg shadow space-y-4 p-4">
              <Table_IncomeExpense
                searchEmail={searchEmail}
                searchRiceCaltivation={searchRiceCaltivation}
                type={type}
              />
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
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex space-x-2">
                  <Search
                    search={searchEmail}
                    setSearch={setSearchEmail}
                    text={"อีเมลผู้ปลูก"}
                  />
                  <Search
                    search={searchEmail}
                    setSearch={setSearchEmail}
                    text={"รอบการปลูก"}
                  />
                </div>
                <div className="flex space-x-2">
                  <AddIncome />
                  <AddExpense />
                </div>
              </div>
              <Table_IncomeExpense
                searchEmail={searchEmail}
                searchRiceCaltivation={searchRiceCaltivation}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageIncomeExpense;
