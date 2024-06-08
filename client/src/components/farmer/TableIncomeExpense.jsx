import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import axios from "axios";
import Edit_Expense from "./Edit_Expense";
import Edit_Income from "./Edit_Income";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const TableIncomeExpense = ({ incomeExpense, selectMonth }) => {
  const [edit_Expense, setEdit_Expense] = useState(false);
  const [edit_Income, setEdit_Income] = useState(false);
  const handleModalExpense = () => setEdit_Expense(!edit_Expense);
  const handleModalIncome = () => setEdit_Income(!edit_Income);

  const handleDelete = (detail, id) => {
    Swal.fire({
      title: "ยืนยันการลบ?",
      text: `คุณต้องการลบรายการ ${detail}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8080/incomeExpense/${id}`);
        await Swal.fire({
          title: "ลบสำเร็จ",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };

  const formatDate = (string) => {
    const date = new Date(string);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };

  incomeExpense.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  const month = (date) => new Date(date).getMonth() + 1 + "";

  const data = incomeExpense.filter((data) =>
    month(data.date).includes(selectMonth)
  );

  return (
    <div className="">
      <div>
        <div className="hidden md:flex">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  วันที่
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  รายการ
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  ราคา (บาท)
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50"
                  key={i}
                >
                  <th className="px-6 py-4 text-center font-normal">
                    {formatDate(d.date)}
                  </th>
                  <td className="px-6 py-4 text-center">{d.detail}</td>
                  <td className="px-6 py-4 text-center">{d.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-2">
                      <div className="flex justify-center items-center cursor-pointer">
                        {d.type === "รายจ่าย" ? (
                          <div>
                            <button
                              className="hover:bg-sky-400 hover:text-white rounded-md bg-sky-100 text-sky-500  w-8 h-8 flex justify-center items-center border border-sky-200"
                              onClick={handleModalExpense}
                            >
                              <FaRegEdit className="w-5 h-5" />
                            </button>
                            <Edit_Expense
                              edit_Expense={edit_Expense}
                              handleModalExpense={handleModalExpense}
                              income_expense_id={d.income_expense_id}
                              riceCaltivation_id={d.riceCaltivation_id}
                            />
                          </div>
                        ) : (
                          <div>
                            <button
                              className="hover:bg-sky-400 hover:text-white rounded-md bg-sky-100 text-sky-500  w-8 h-8 flex justify-center items-center border border-sky-200"
                              onClick={handleModalIncome}
                            >
                              <FaRegEdit className="w-5 h-5" />
                            </button>
                            <Edit_Income
                              edit_Income={edit_Income}
                              handleModalIncome={handleModalIncome}
                              income_expense_id={d.income_expense_id}
                              riceCaltivation_id={d.riceCaltivation_id}
                            />
                          </div>
                        )}
                      </div>
                      <button
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() =>
                          handleDelete(d.detail, d.income_expense_id)
                        }
                      >
                        <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-8 h-8 flex justify-center items-center border border-red-300">
                          <IoTrashOutline className="w-6 h-6" />
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {data.length === 0 ? (
                <tr>
                  <td className="text-center py-4" colSpan="4">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col gap-1">
            {incomeExpense.map((d, i) => (
              <div
                className="flex justify-between items-center text- border p-2 bg-gray-50"
                key={i}
              >
                <div className="flex flex-col">
                  <span className="text-sm">{d.detail}</span>
                  <span className="text-xs text-gray-500">
                    {formatDate(d.date)}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  {d.type === "รายจ่าย" ? (
                    <span className="text-red-600 font-bold">{d.price}</span>
                  ) : (
                    <span className="text-green-600 font-bold">{d.price}</span>
                  )}
                  <span className="text-xs text-gray-800">บาท</span>
                </div>
                <div className="flex gap-1">
                  {d.type === "รายจ่าย" ? (
                    <div>
                      <button
                        className="flex justify-center items-center"
                        onClick={handleModalExpense}
                      >
                        <FaRegEdit className="w-5 h-5 text-sky-400" />
                      </button>
                      <Edit_Expense
                        edit_Expense={edit_Expense}
                        handleModalExpense={handleModalExpense}
                        income_expense_id={d.income_expense_id}
                        riceCaltivation_id={d.riceCaltivation_id}
                      />
                    </div>
                  ) : (
                    <div>
                      <button
                        className="flex justify-center items-center"
                        onClick={handleModalIncome}
                      >
                        <FaRegEdit className="w-5 h-5 text-sky-400" />
                      </button>
                      <Edit_Income
                        edit_Income={edit_Income}
                        handleModalIncome={handleModalIncome}
                        income_expense_id={d.income_expense_id}
                        riceCaltivation_id={d.riceCaltivation_id}
                      />
                    </div>
                  )}
                  <div
                    className="flex justify-center items-center cursor-pointer"
                    onClick={() => handleDelete(d.detail, d.income_expense_id)}
                  >
                    <IoTrashOutline className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

TableIncomeExpense.propTypes = {
  incomeExpense: PropTypes.array,
  selectMonth: PropTypes.string,
};

export default TableIncomeExpense;
