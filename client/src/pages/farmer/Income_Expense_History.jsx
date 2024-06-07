import Navbar from "../../components/farmer/Navbar";
import TableIncomeExpense from "../../components/farmer/TableIncomeExpense";
import { IoIosArrowForward } from "react-icons/io";
import BoxIncomeExpense from "../../components/farmer/BoxIncomeExpense";
import ModalAddExpense from "../../components/farmer/ModalAddExpense";
import { useEffect, useState } from "react";
import ModalAddIncome from "../../components/farmer/ModalAddIncome";
import { useParams } from "react-router-dom";
import axios from "axios";
import Info_ricecrop from "../../components/farmer/Info_ricecrop";
import All_IncomeExpense from "../../components/farmer/All_IncomeExpense";
import IncomeExpensePerMonth from "../../components/farmer/IncomeExpensePerMonth";
import Yield_rice from "../../components/farmer/Yield_rice";

const Income_Expense_History = () => {
  const idRiceCalrivition = Number(useParams().riceCaltivation_id);
  const idFarmer = Number(useParams().farmer_id);

  const [showModalExpense, setShowModalExpense] = useState(false);
  const [showModalIncome, setShowModalIncome] = useState(false);

  const handleModalExpense = () => setShowModalExpense(!showModalExpense);
  const handleModalIncome = () => setShowModalIncome(!showModalIncome);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/riceCaltivation/incomeExpense/${idRiceCalrivition}`
        );
        setData(res.data[0].incomeExpense);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [idRiceCalrivition]);
  return (
    <div>
      <Navbar id={idFarmer} />
      <div className="mx-auto max-w-screen-xl p-4">
        <nav className="flex mb-4">
          <ol className="flex space-x-1 items-center">
            <li>
              <a
                href="/ricecrop/2"
                className="hover:underline hover:text-green-700"
              >
                รอบการปลูก
              </a>
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li className="text-green-700">รายการย้อนหลัง</li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-4">
          <Info_ricecrop />
          <Yield_rice />
        </div>
        <div className="flex flex-col md:flex-row gap-4 my-4">
          <IncomeExpensePerMonth />
          <All_IncomeExpense />
        </div>

        <BoxIncomeExpense data={data} />

        <div className="bg-white shadow p-4 my-4 rounded-lg">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <div>
                <button
                  type="button"
                  className="bg-red-600 px-4 py-2  text-white rounded-lg text-sm hover:bg-red-100 hover:text-red-700 hover:duration-200"
                  onClick={handleModalExpense}
                >
                  บันทึกรายจ่าย
                </button>
                <ModalAddExpense
                  showModalExpense={showModalExpense}
                  handleModalExpense={handleModalExpense}
                  farmer_id={idFarmer}
                  riceCaltivation_id={idRiceCalrivition}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="bg-green-600 px-4 py-2  text-white rounded-lg text-sm hover:bg-green-100 hover:text-green-700 hover:duration-200"
                  onClick={handleModalIncome}
                >
                  บันทึกรายรับ
                </button>
                <ModalAddIncome
                  showModalIncome={showModalIncome}
                  handleModalIncome={handleModalIncome}
                  farmer_id={idFarmer}
                  riceCaltivation_id={idRiceCalrivition}
                />
              </div>
            </div>
            <div>
              <form className="max-w-sm mx-auto">
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>เดือน</option>
                  <option value="1">มกราคม</option>
                  <option value="2">กุมภาพันธุ์</option>
                  <option value="3">มีนาคม</option>
                  <option value="4">เมษายน</option>
                </select>
              </form>
            </div>
          </div>
          <div>
            <TableIncomeExpense data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income_Expense_History;
