import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { IoTrashOutline } from "react-icons/io5";
import Pagination from "./Pagination";
import EditIncome from "./EditIncome";
import EditExpense from "./EditExpense";
import Swal from "sweetalert2";

const Table_IncomeExpense = ({ searchEmail, searchRiceCaltivation, type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/incomeExpense`);
        const data = res.data.filter(
          (data) => data.riceCaltivation_id !== null && data.farmer_id !== null
        );
        const search_data = data.filter(
          (data) =>
            data.farmer.email === searchEmail &&
            data.riceCaltivation_id === Number(searchRiceCaltivation) &&
            data.type.includes(type)
        );
        search_data.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        setData(search_data);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [searchEmail, searchRiceCaltivation, type]);

  const [records, setRecords] = useState([]);

  const handleDelete = async (detail, id) => {
    try {
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
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  return (
    <div>
      <div className="hidden md:flex">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                อีเมลผู้ปลูก
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                รหัสรอบการปลูก
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
                <td className="px-4 py-2 text-center">{d.farmer.email}</td>
                <td className="px-4 py-2 text-center">
                  {d.riceCaltivation_id}
                </td>
                <th className="p-2 text-center font-normal">
                  {new Date(d.date).getDate()}/{new Date(d.date).getMonth() + 1}
                  /{new Date(d.date).getFullYear()}
                </th>
                <td className="px-4 py-2 text-center">{d.detail}</td>
                <td className="px-4 py-2 text-end">
                  {d.price.toLocaleString()}
                </td>

                <td className="px-4 py-2">
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
            {records.length === 0 ? (
              <tr>
                <td className="text-center py-4" colSpan="6">
                  ไม่พบข้อมูล
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <Pagination data={data} setRecords={setRecords} recodesPerPage={10} />
    </div>
  );
};

Table_IncomeExpense.propTypes = {
  searchEmail: PropTypes.string,
  searchRiceCaltivation: PropTypes.string,
  type: PropTypes.string,
};

export default Table_IncomeExpense;
