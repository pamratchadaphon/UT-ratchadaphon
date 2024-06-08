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
import SelectMonth from "../../components/farmer/SelectMonth";

const Income_Expense_History = () => {
  const { riceCaltivation_id, farmer_id } = useParams();
  const idRiceCaltivation = Number(riceCaltivation_id);
  const idFarmer = Number(farmer_id);

  const [showModalExpense, setShowModalExpense] = useState(false);
  const [showModalIncome, setShowModalIncome] = useState(false);

  const handleModalExpense = () => setShowModalExpense(!showModalExpense);
  const handleModalIncome = () => setShowModalIncome(!showModalIncome);

  const [data, setData] = useState([]);
  const [riceCaltivation, setRiceCaltivation] = useState({});

  const expense = data.filter((data) => data.type.includes("รายจ่าย"));
  const income = data.filter((data) => data.type.includes("รายรับ"));

  const sumExpense = expense.reduce((total, data) => total + data.price, 0);
  const sumIncome = income.reduce((total, data) => total + data.price, 0);

  const [selectMonth, setSelectMonth] = useState("");

  const handleMonth = (month) => setSelectMonth(month);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/riceCaltivation/incomeExpense/${idRiceCaltivation}`
        );
        setData(res.data[0].incomeExpense);
        setRiceCaltivation(res.data[0]);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [idRiceCaltivation]);

  return (
    <div>
      <Navbar id={idFarmer} />
      <div className="mx-auto max-w-screen-xl p-4">
        <nav className="flex mb-4">
          <ol className="flex space-x-1 items-center">
            <li>
              <a
                href={`/ricecrop/${idFarmer}`}
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

        <BoxIncomeExpense sumExpense={sumExpense} sumIncome={sumIncome} />

        <div className="flex flex-col md:flex-row gap-4 mt-4 justify-between">
          <Info_ricecrop riceCaltivation={riceCaltivation} />
          <Yield_rice riceCaltivation={riceCaltivation} />
          <div className="w-full border-2 bg-white ">
            a
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 my-4">
          <IncomeExpensePerMonth
            incomeExpense={data}
            riceCaltivation={riceCaltivation}
          />
          <All_IncomeExpense sumExpense={sumExpense} sumIncome={sumIncome} />
        </div>

        <div className="bg-white shadow p-4 my-4 rounded-lg">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="flex gap-2">
              <div>
                <button
                  type="button"
                  className="bg-red-600 px-4 py-2 text-white rounded-lg text-sm hover:bg-red-100 hover:text-red-700 hover:duration-200"
                  onClick={handleModalExpense}
                >
                  บันทึกรายจ่าย
                </button>
                <ModalAddExpense
                  showModalExpense={showModalExpense}
                  handleModalExpense={handleModalExpense}
                  farmer_id={idFarmer}
                  riceCaltivation_id={idRiceCaltivation}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="bg-green-600 px-4 py-2 text-white rounded-lg text-sm hover:bg-green-100 hover:text-green-700 hover:duration-200"
                  onClick={handleModalIncome}
                >
                  บันทึกรายรับ
                </button>
                <ModalAddIncome
                  showModalIncome={showModalIncome}
                  handleModalIncome={handleModalIncome}
                  farmer_id={idFarmer}
                  riceCaltivation_id={idRiceCaltivation}
                />
              </div>
            </div>
            <div>
              <SelectMonth
                riceCaltivation={riceCaltivation}
                handleMonth={handleMonth}
              />
            </div>
          </div>
          <div>
            <TableIncomeExpense
              incomeExpense={data}
              selectMonth={selectMonth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income_Expense_History;
