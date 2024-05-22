import { FaEye } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";

const TableRicecrop = () => {
  return (
    <div className="">
      <div>
        <div className="hidden md:flex">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4 border">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  ลำดับที่
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  ปี
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  วันที่ปลูก
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  วันที่เก็บเกี่ยว
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  พันธุ์ข้าว
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  พื้นที่ (ไร่)
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  รายการย้อนหลัง
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  รายละเอียด
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  1
                </th>
                <td className="px-6 py-4 text-center">2024</td>
                <td className="px-6 py-4 text-center">01/01/2024</td>
                <td className="px-6 py-4 text-center">03/04/2024</td>
                <td className="px-6 py-4 text-center">กข65</td>
                <td className="px-6 py-4 text-center">21</td>
                <td className="px-6 py-4">
                  <a href="/history" className="flex justify-center items-center">
                    <div className="hover:bg-orange-400 rounded-md bg-orange-100 text-orange-500 hover:text-white w-16 h-8 flex justify-center items-center border border-orange-200">
                      <TbClipboardText className="w-6 h-6" />
                    </div>
                  </a>
                </td>
                <td className="px-6 py-4 ">
                  <a href="/detail" className="flex justify-center items-center">
                    <div className="hover:bg-sky-400 rounded-md bg-sky-100 text-sky-500 hover:text-white w-16 h-8 flex justify-center items-center border border-sky-200">
                      <FaEye className="w-6 h-6" />
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col gap-1">
            <span className="text-center">ปลูกรอบที่ 1</span>
            <div className="flex justify-between items-center text-sm">
              <span>ปี</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>วันที่ปลูก</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>วันที่เก็บเกี่ยว</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>พันธุ์ข้าว</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>พื้นที่ (ไร่)</span>
              <span>2024</span>
            </div>
            <div className="flex justify-center gap-4">
              <a href="/history" className="border border-orange-200 bg-orange-100 text-orange-600 rounded-full w-10 h-10 flex flex-col justify-center items-center">
                <div>
                  <TbClipboardText />
                </div>
              </a>
              <div className="border border-sky-200 bg-sky-100 text-sky-600 rounded-full w-10 h-10 flex flex-col justify-center items-center">
                <div>
                  <FaEye />
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
              100
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

export default TableRicecrop;
