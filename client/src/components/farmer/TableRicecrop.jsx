import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import axios from "axios";

const TableRicecrop = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const recordsPerPage = 1;
  const lastIndex = page * recordsPerPage; 
  const firstIndex = lastIndex - recordsPerPage; 
  const records = data.slice(firstIndex, lastIndex) 
  const npage = Math.ceil(data.length / recordsPerPage)
  const pageNumber = [...Array(npage + 1).keys()].slice(1)
  
  // console.log(firstIndex);
  // console.log(lastIndex);
  // console.log(page);
  console.log(npage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/farmer/riceCaltivation_incomeExpense/2"
        );
        setData(res.data[0].riceCaltivation);
      } catch (error) {
        console.log("Error" + error);
      }
    };
    fetchData();
  },[]);

  const formatDate = (string) => {
    const date = new Date(string);
    const day = date.getDate()
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`
  } 

  const prePage = () => {
    if (firstIndex !== 0) {
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    if (lastIndex !== 0) {
      setPage(page + 1)
    }
  }

  const changePage = (id) => {
    setPage(id)
  } 
  
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
              {records.map((d, i) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "
                  key={i}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                  >
                    {i+1}
                  </th>
                  <td className="px-6 py-4 text-center">{d.year}</td>
                  <td className="px-6 py-4 text-center">{formatDate(d.startDate)}</td>
                  <td className="px-6 py-4 text-center">{formatDate(d.endDate)}</td>
                  <td className="px-6 py-4 text-center">{d.riceVariety}</td>
                  <td className="px-6 py-4 text-center">{d.area}</td>
                  <td className="px-6 py-4">
                    <a
                      href="/ricecrop/history"
                      className="flex justify-center items-center"
                    >
                      <div className="hover:bg-orange-400 rounded-md bg-orange-100 text-orange-500 hover:text-white w-16 h-8 flex justify-center items-center border border-orange-200">
                        <TbClipboardText className="w-6 h-6" />
                      </div>
                    </a>
                  </td>
                  <td className="px-6 py-4 ">
                    <a
                      href="/ricecrop/detail"
                      className="flex justify-center items-center"
                    >
                      <div className="hover:bg-sky-400 rounded-md bg-sky-100 text-sky-500 hover:text-white w-16 h-8 flex justify-center items-center border border-sky-200">
                        <FaEye className="w-6 h-6" />
                      </div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-sm">
              <span>ปี</span>
              <span>2024</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>วันที่ปลูก</span>
              <span>01/01/2024</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>วันที่เก็บเกี่ยว</span>
              <span>01/01/2024</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>พันธุ์ข้าว</span>
              <span>กข65</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>พื้นที่ (ไร่)</span>
              <span>21</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>รายการย้อนหลัง</span>
              <a
                href="/ricecrop/history"
                className="flex justify-center items-center"
              >
                <div className="hover:bg-orange-400 rounded-md bg-orange-100 text-orange-500 hover:text-white w-10 h-6 flex justify-center items-center border border-orange-200">
                  <TbClipboardText className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>รายละเอียด</span>
              <a
                href="/ricecrop/detail"
                className="flex justify-center items-center"
              >
                <div className="hover:bg-sky-400 rounded-md bg-sky-100 text-sky-500 hover:text-white w-10 h-6 flex justify-center items-center border border-sky-200">
                  <FaEye className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <nav
          className="hidden md:flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            จำนวนแถวต่อหน้า{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-{npage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {data.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                onClick={prePage}
              >
                Previous
              </a>
            </li>
            {pageNumber.map((n,i) => (
              <li key={i}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => changePage(n)}
              >
                {n}
              </a>
            </li>
            ))}
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={nextPage}
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
