import { useEffect, useState } from "react";
import Navbar from "../../components/farmer/Navbar";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

const RiceVariety = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/riceVariety/");
      setData(res.data);
    };
    fetchData();
  });
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col gap-4 items-center">
        <div className="mt-4 text-2xl">พันธุ์ข้าว</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full p-4">
          {data.map((d, i) => (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              key={i}
            >
              <img
                className="rounded-t-lg w-full h-48"
                src={`http://localhost:8080/${d.image}`}
                alt=""
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white text-green-800">
                  name
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {d.yield_variety}
                </p>
                <div className="flex justify-end items-center">
                  <div className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-green-700 bg-green-100 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer hover:bg-green-700 hover:text-white">
                    <span>ดูข้อมูล</span>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiceVariety;
