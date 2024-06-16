import Navbar from "../../components/farmer/Navbar";
import TableIncomeExpense from "../../components/farmer/TableIncomeExpense";
import { IoIosArrowForward } from "react-icons/io";
import BoxIncomeExpense from "../../components/farmer/BoxIncomeExpense";
import ModalAddExpense from "../../components/farmer/ModalAddExpense";
import { useEffect, useState } from "react";
import ModalAddIncome from "../../components/farmer/ModalAddIncome";
import { useParams } from "react-router-dom";
import axios from "axios";
// import Info_ricecrop from "../../components/farmer/Info_ricecrop";
import All_IncomeExpense from "../../components/farmer/All_IncomeExpense";
import IncomeExpensePerMonth from "../../components/farmer/IncomeExpensePerMonth";
// import Yield_rice from "../../components/farmer/Yield_rice";
import SelectMonth from "../../components/farmer/SelectMonth";
// import Chart from "../../components/farmer/chart";
// import Stored_Rice from "../../components/farmer/Stored_Rice";

const Income_Expense_History = () => {
  const { riceCaltivation_id, farmer_id } = useParams();
  const idRiceCaltivation = Number(riceCaltivation_id);
  const idFarmer = Number(farmer_id);

  const [showModalExpense, setShowModalExpense] = useState(false);
  const [showModalIncome, setShowModalIncome] = useState(false);

  const handleModalExpense = () => setShowModalExpense(!showModalExpense);
  const handleModalIncome = () => setShowModalIncome(!showModalIncome);

  const [incomeExpense, setIncomeExpense] = useState([]);
  const [riceCaltivation, setRiceCaltivation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/riceCaltivation/incomeExpense/${idRiceCaltivation}`
        );
        setIncomeExpense(res.data[0].incomeExpense);
        setRiceCaltivation(res.data[0]);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [idRiceCaltivation]);

  const expense = incomeExpense.filter((data) => data.type.includes("รายจ่าย"));
  const income = incomeExpense.filter((data) => data.type.includes("รายรับ"));

  const sumExpense = expense.reduce((total, data) => total + data.price, 0);
  const sumIncome = income.reduce((total, data) => total + data.price, 0);

  const [selectMonth, setSelectMonth] = useState("");

  const handleMonth = (month) => setSelectMonth(month);

  const [startMonth_IncomeExpense, setStartMonth_IncomeExpense] = useState(0);
  const [endMonth_IncomeExpense, setEndMonth_IncomeExpense] = useState(0);

  useEffect(() => {
    if (incomeExpense != "") {
      const month = (string) => {
        return new Date(string).getMonth() + 1;
      };
      setStartMonth_IncomeExpense(month(incomeExpense[0].date));
      setEndMonth_IncomeExpense(
        month(incomeExpense[incomeExpense.length - 1].date)
      );
    }
  }, [incomeExpense]);

  return (
    <div>
      <Navbar id={idFarmer} />
      <div className="mx-auto max-w-screen-xl p-4">
        {/* <div className="flex justify-between">
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
              <li className="text-green-700">
                รายงานค่าใช้จ่ายรอบการปลูกที่ {riceCaltivation_id}
              </li>
            </ol>
          </nav>
        </div> */}

        <BoxIncomeExpense sumExpense={sumExpense} sumIncome={sumIncome} />

        {/* <div className="flex flex-col md:flex-row gap-4 mt-4 justify-between">
          <Info_ricecrop riceCaltivation={riceCaltivation} />
          <Yield_rice riceCaltivation={riceCaltivation} />
          <Stored_Rice riceCaltivation={riceCaltivation}/>
        </div> */}
        <div className="flex flex-col md:flex-row gap-4 my-4">
          <IncomeExpensePerMonth
            incomeExpense={incomeExpense}
            startMonth_IncomeExpense={startMonth_IncomeExpense}
            endMonth_IncomeExpense={endMonth_IncomeExpense}
          />
          <All_IncomeExpense
            sumExpense={sumExpense}
            sumIncome={sumIncome}
            incomeExpense={incomeExpense}
          />
          {/* <Chart/> */}
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
                startMonth_IncomeExpense={startMonth_IncomeExpense}
                endMonth_IncomeExpense={endMonth_IncomeExpense}
              />
            </div>
          </div>
          <div>
            <TableIncomeExpense
              incomeExpense={incomeExpense}
              selectMonth={selectMonth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income_Expense_History;
