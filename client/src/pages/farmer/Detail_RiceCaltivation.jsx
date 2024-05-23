import All_IncomeExpense from "../../components/farmer/All_IncomeExpense";
import IncomeExpensePerMonth from "../../components/farmer/IncomeExpensePerMonth";
import Navbar from "../../components/farmer/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Info_ricecrop from "../../components/farmer/Info_ricecrop";

const Detail_RiceCaltivationjsx = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl p-4 space-y-4 flex flex-col">
        <nav className="flex">
          <ol className="flex space-x-1 items-center">
            <li className="hover:text-green-700 hover:underline">
              <a href="/ricecrop/2">รอบการปลูก</a>
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li className="text-green-700">รายละเอียด</li>
          </ol>
        </nav>
        <Info_ricecrop />
        <div className="flex flex-col md:flex-row gap-4">
          <All_IncomeExpense />
          <IncomeExpensePerMonth/>
        </div>
      </div>
    </div>
  );
};

export default Detail_RiceCaltivationjsx;
