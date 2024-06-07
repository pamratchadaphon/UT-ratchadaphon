import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import axios from "axios";

const TableIncomeExpense = ({ data }) => {
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
        Swal.fire({
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
                        <div className="hover:bg-sky-400 rounded-md bg-sky-100 text-sky-500 hover:text-white w-8 h-8 flex justify-center items-center border border-sky-200">
                          <FaRegEdit className="w-6 h-6" />
                        </div>
                      </div>
                      <div
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() =>
                          handleDelete(d.detail, d.income_expense_id)
                        }
                      >
                        <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-8 h-8 flex justify-center items-center border border-red-300">
                          <IoTrashOutline className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col gap-1">
            {data.map((d, i) => (
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
                <div className="flex gap-1">
                  <span className="text-red-600 font-bold">- {d.price}</span>
                  <span>บาท</span>
                </div>
                <div className="flex gap-1">
                  <div className="flex justify-center items-center">
                    <FaRegEdit className="w-5 h-5 text-sky-400" />
                  </div>
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
        {/* <nav
          className="hidden md:flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            จำนวนแถวต่อหน้า
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
};

TableIncomeExpense.propTypes = {
  data: PropTypes.array,
};

export default TableIncomeExpense;
