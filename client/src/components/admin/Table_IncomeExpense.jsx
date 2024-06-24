import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoTrashOutline } from "react-icons/io5";
import Pagonation from "./Pagonation";
import EditIncome from "./EditIncome";
import EditExpense from "./EditExpense";

const Table_IncomeExpense = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/incomeExpense`);
        const data = res.data.filter(
          (data) => data.riceCaltivation_id !== null && data.farmer_id !== null
        );
        const search_email = data.filter((data) =>
          data.farmer.email.includes(search)
        );
        search_email.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        setData(search_email);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [search]);

  const [records, setRecords] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0)

  return (
    <div>
      <div className="hidden md:flex">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-4">
                ลำดับที่
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                วันที่
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                รายการ
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                ราคา (บาท)
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                อีเมลผู้ปลูก
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50"
                key={i}
              >
                <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {firstIndex + i + 1}
              </th>
                <th className="px-6 py-4 text-center font-normal">
                  {new Date(d.date).getDate()}/{new Date(d.date).getMonth() + 1}
                  /{new Date(d.date).getFullYear()}
                </th>
                <td className="px-6 py-4 text-center">{d.detail}</td>
                <td className="px-6 py-4 text-end">
                  {d.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center">{d.farmer.email}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center cursor-pointer">
                      <div className="hover:bg-sky-400 hover:text-white rounded-md bg-sky-100 text-sky-500  w-8 h-8 flex justify-center items-center border border-sky-200">
                        {d.type === "รายจ่าย" ? (
                          <EditExpense
                            income_expense_id={d.income_expense_id}
                            riceCaltivation_id={d.riceCaltivation_id}
                          />
                        ) : (
                          <EditIncome
                            income_expense_id={d.income_expense_id}
                            riceCaltivation_id={d.riceCaltivation_id}
                          />
                        )}
                      </div>
                    </div>
                    <button
                      className="flex justify-center items-center cursor-pointer"
                      //   onClick={() =>
                      //     handleDelete(d.detail, d.income_expense_id)
                      //   }
                    >
                      <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-8 h-8 flex justify-center items-center border border-red-300">
                        <IoTrashOutline className="w-6 h-6" />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {records.length === 0 ? (
              <tr>
                <td className="text-center py-4" colSpan="4">
                  ไม่พบข้อมูล
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <Pagonation data={data} setRecords={setRecords} setFirstIndex={setFirstIndex}/>
    </div>
  );
};

Table_IncomeExpense.propTypes = {
  search: PropTypes.string,
};

export default Table_IncomeExpense;
