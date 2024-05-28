import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import axios from "axios";
import { FaEye } from "react-icons/fa";

const Table_RiceVariety = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/riceVariety/");
        setData(res.data);
      } catch (error) {
        console.log("Error" + error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="hidden lg:flex">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              ลำดับที่
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ชื่อพันธุ์
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              อายุเก็บเกี่ยว
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ผลผลิต
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ความสูงเฉลี่ย
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ความไวแสง
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr
              key={i}
              className="bg-white border-b hover:bg-gray-50 "
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {i + 1}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-normal  text-center"
              >
                {d.name}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-normal text-center"
              >
                {d.age} วัน
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-normal text-center"
              >
                ประมาณ {d.yield} กก./ไร่
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-normal text-center"
              >
                {d.height} ซม.
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-normal text-center"
              >
                {d.photosensitivity}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-normal text-center"
              >
                <div className="flex justify-center items-center gap-2">
                  <button className="flex justify-center items-center">
                    <div className="hover:bg-sky-400 rounded-md bg-sky-100 text-sky-500 hover:text-white w-10 h-7 flex justify-center items-center border border-sky-200">
                      <FaEye className="w-5 h-5" />
                    </div>
                  </button>
                  <button className="flex justify-center items-center">
                    <div className="hover:bg-orange-400 rounded-md bg-orange-100 text-orange-500 hover:text-white w-10 h-7 flex justify-center items-center border border-orange-200">
                      <FaRegEdit className="w-5 h-5" />
                    </div>
                  </button>
                  <button className="flex justify-center items-center">
                    <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-10 h-7 flex justify-center items-center border border-red-300">
                      <IoTrashOutline className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table_RiceVariety;
