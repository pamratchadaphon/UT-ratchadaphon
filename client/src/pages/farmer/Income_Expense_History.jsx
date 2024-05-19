import Navbar from "../../components/farmer/Navbar";
import TableIncomeExpense from "../../components/farmer/TableIncomeExpense";

const Income_Expense_History = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex flex-wrap gap-4">
          <div className="border border-red-300 bg-red-100 p-4 flex md:flex-col rounded-lg w-full md:w-60 justify-between items-center md:items-start">
            <span className="text-xl font-semibold text-red-700">รายจ่าย</span>
            <span className="text-sm text-red-800">10,000 บาท</span>
          </div>
          <div className="border border-green-400 bg-green-100 p-4 flex md:flex-col rounded-lg w-full md:w-60 justify-between items-center md:items-start">
            <span className="text-xl font-semibold text-green-700">รายรับ</span>
            <span className="text-sm text-green-800">10,000 บาท</span>
          </div>
          <div className="border border-gray-300 bg-gray-100 p-4 flex md:flex-col rounded-lg w-full md:w-60 justify-between items-center md:items-start">
            <span className="text-xl font-semibold text-gray-700">คงเหลือ</span>
            <span className="text-sm text-gray-800">10,000 บาท</span>
          </div>
        </div>
        <div className="bg-white p-4 my-4 shadow rounded-lg">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <div>
                <button
                  type="button"
                  className="bg-red-600 px-4 py-2  text-white rounded-lg text-sm hover:bg-red-100 hover:text-red-700"
                >
                  บันทึกรายจ่าย
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-green-700 px-4 py-2  text-white rounded-lg text-sm hover:bg-green-100 hover:text-green-700"
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
