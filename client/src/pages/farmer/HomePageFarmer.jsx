import { FaDroplet } from "react-icons/fa6";
import { FaTemperatureLow } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaBahtSign } from "react-icons/fa6";

const HomePageFarmer = () => {
  return (
    <div className="mt-4 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
      <h1 className="mb-4 text-4xl font-extrabold text-green-800 tracking-tight leading-none  md:text-5xl lg:text-6xl">
        ปีที่ปลูก 2024
      </h1>
      <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
        พันธุ์ : กข65
      </p>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
        วันที่ปลูก : 01/01/2024
      </p>
      <div className="flex flex-col md:flex-row  gap-4 justify-center">
        <button className="bg-green-400 h-20 w-full md:w-2/4 rounded-lg  text-white">
          รายรับ
        </button>
        <button className="bg-red-400 h-20 rounded-lg text-white w-full md:w-2/4">
          รายจ่าย
        </button>
      </div>
      <a href="/ricecrop" className=" bg-yellow-400 text-yellow-900 p-2 mt-8 rounded-lg">
        ดูรายการย้อนหลัง
      </a>
      <div className="mt-10 ">
        <ul className="grid grid-cols-2 md:grid-cols-4 text-xs gap-4">
          <li className="border p-2 bg-white shadow flex flex-col items-center">
            <FaBahtSign/>
            <span>ราคาข้าวประจำวัน</span>
          </li>
          <li className="border p-2 bg-white shadow flex flex-col items-center">
            <FaDroplet />
            <span>สถานการณ์น้ำ</span>
          </li>
          <li className="border p-2 bg-white shadow flex flex-col items-center">
            <FaTemperatureLow/>
            <span>อากาศรายวัน</span>
          </li>
          <li className="border p-2 bg-white shadow flex flex-col items-center">
            <FaNewspaper/>
            <span>ข่าวราคาข้าว</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePageFarmer;
