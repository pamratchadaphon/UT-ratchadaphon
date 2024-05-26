import Navbar from "../../components/farmer/Navbar";
import TableIncomeExpense from "../../components/farmer/TableIncomeExpense";
import { IoIosArrowForward } from "react-icons/io";
import BoxIncomeExpense from "../../components/farmer/BoxIncomeExpense"

const Income_Expense_History = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl p-4">
        <nav className="flex mb-4">
          <ol className="flex space-x-1 items-center">
            <li>
              <a href="/ricecrop/2" className="hover:underline hover:text-green-700">
                รอบการปลูก
              </a>
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li className="text-green-700">รายการย้อนหลัง</li>
          </ol>
        </nav>

        <BoxIncomeExpense/>

        <div className="bg-white shadow p-4 my-4 rounded-lg">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <div>
                <button
                  type="button"
                  className="bg-red-600 px-4 py-2  text-white rounded-lg text-sm hover:bg-red-100 hover:text-red-700 hover:duration-200"
                >
                  บันทึกรายจ่าย
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-green-600 px-4 py-2  text-white rounded-lg text-sm hover:bg-green-100 hover:text-green-700 hover:duration-200"
                >
                  บันทึกรายรับ
                </button>
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
            <TableIncomeExpense />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income_Expense_History;
