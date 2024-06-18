import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { TbClipboardText } from "react-icons/tb";
import axios from "axios";
import PropTypes from "prop-types";
import Pagination from "../../components/farmer/Pagination";

const TableRicecrop = ({ farmer_id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/farmer/riceCaltivation_incomeExpense/${farmer_id}`
        );
        setData(res.data[0].riceCaltivation);
      } catch (error) {
        console.log("Error" + error);
      }
    };
    fetchData();
  }, [farmer_id]);

  const formatDate = (string) => {
    const date = new Date(string);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };

  const [records, setRecords] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);

  // records.sort((a, b) => {
  //   return b.riceCaltivation_id - a.riceCaltivation_id;
  // });
  return (
    <div>
      <div className="hidden md:flex">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                รายงานค่าใช้จ่าย
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                รายงานแปลงนา
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr className="bg-white border-b hover:bg-gray-50 " key={i}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                >
                  {firstIndex + i + 1}
                </th>
                <td className="px-6 py-4 text-center">{d.year}</td>
                <td className="px-6 py-4 text-center">
                  {formatDate(d.startDate)}
                </td>
                <td className="px-6 py-4 text-center">
                  {formatDate(d.endDate)}
                </td>
                <td className="px-6 py-4 text-center">{d.riceVariety}</td>
                <td className="px-6 py-4 text-center">{d.area}</td>
                <td className="px-6 py-4">
                  <a
                    href={`/ricecrop/history/${farmer_id}/${d.riceCaltivation_id}`}
                    className="flex justify-center items-center"
                  >
                    <div className="hover:bg-orange-400 rounded-md bg-orange-100 text-orange-500 hover:text-white w-8 h-8 flex justify-center items-center border border-orange-200">
                      <TbClipboardText className="w-6 h-6" />
                    </div>
                  </a>
                </td>
                <td className="px-6 py-4 ">
                  <a
                    href={`/ricecrop/detail/${farmer_id}/${d.riceCaltivation_id}`}
                    className="flex justify-center items-center"
                  >
                    <div className="hover:bg-sky-400 rounded-md bg-sky-100 text-sky-500 hover:text-white w-8 h-8 flex justify-center items-center border border-sky-200">
                      <FaEye className="w-6 h-6" />
                    </div>
                  </a>
                </td>
              </tr>
            ))}
            {data.length === 0 ? (
              <tr>
                <td className="text-center py-4" colSpan="8">
                  ไม่พบข้อมูล
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <div className="md:hidden flex flex-col">
        <span className="text-center font-semibold">รอบการปลูก</span>
        {records.map((d, i) => (
          <div className="flex flex-col gap-1" key={i}>
            <div className="flex items-center text-sm text-green-700 space-x-1">
              <span className="font-semibold">ปีที่ปลูก</span>
              <span>{d.year}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">วันที่ปลูก</span>
              <span>{formatDate(d.startDate)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">วันที่เก็บเกี่ยว</span>
              <span>{formatDate(d.endDate)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">พันธุ์ข้าว</span>
              <span>{d.riceVariety}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">พื้นที่ (ไร่)</span>
              <span>{d.area}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">รายการย้อนหลัง</span>
              <a
                href={`/ricecrop/history/${farmer_id}/${d.riceCaltivation_id}`}
                className="flex justify-center items-center text-blue-600 focus:underline"
              >
                ดูรายการย้อนหลัง
              </a>
            </div>
            <div className="flex justify-between items-center text-sm mb-4 border-b pb-4">
              <span className="text-gray-500">รายละเอียด</span>
              <a
                href={`/ricecrop/detail/${farmer_id}/${d.riceCaltivation_id}`}
                className="flex justify-center items-center  text-blue-600 focus:underline"
              >
                ดูรายละเอียด
              </a>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        data={data}
        recodesPerPage={10}
        setFirstIndex={setFirstIndex}
        setRecords={setRecords}
      />
    </div>
  );
};

TableRicecrop.propTypes = {
  farmer_id: PropTypes.number,
};

export default TableRicecrop;
