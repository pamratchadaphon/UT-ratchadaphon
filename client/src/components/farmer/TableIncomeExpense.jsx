import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const TableIncomeExpense = () => {
  const handleDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณต้องการลบรายการ ซื้อปุ๋ยเคมี",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "ลบสำเร็จ",
          icon: "success",
        });
      }
    })
  };
  return (
    <div className="">
      <div>
        <div className="hidden md:flex">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  ลำดับที่
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                >
                  1
                </th>
                <td className="px-6 py-4 text-center">ซื้อปุ๋ยเคมี</td>
                <td className="px-6 py-4 text-center">300</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center cursor-pointer">
                      <div className="hover:bg-sky-400 rounded-md bg-sky-100 text-sky-500 hover:text-white w-16 h-8 flex justify-center items-center border border-sky-200">
                        <FaRegEdit className="w-6 h-6" />
                      </div>
                    </div>
                    <div
                      className="flex justify-center items-center cursor-pointer"
                      onClick={handleDelete}
                    >
                      <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-16 h-8 flex justify-center items-center border border-red-300">
                        <IoTrashOutline className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text- border p-2 bg-gray-50">
              <div className="flex flex-col">
                <span className="text-sm">ซื้อปุ๋ยเคมี</span>
                <span className="text-xs text-gray-500">01/01/2024</span>
              </div>
              <div className="flex gap-1">
                <span className="text-red-600 font-bold">- 300</span>
                <span>บาท</span>
              </div>
              <div className="flex gap-1">
                <div className="flex justify-center items-center">
                  <FaRegEdit className="w-5 h-5 text-sky-400" />
                </div>
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={handleDelete}
                >
                  <IoTrashOutline className="w-5 h-5 text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
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
        </nav>
      </div>
    </div>
  );
};

export default TableIncomeExpense;
