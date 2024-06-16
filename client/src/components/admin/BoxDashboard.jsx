import { IoMdPerson } from "react-icons/io";
import { FaSeedling } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";

const BoxDashboard = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
        <div className="flex rounded-lg bg-gray-50 shadow p-4 gap-4 w-full">
          <div className="p-5 border rounded-lg bg-sky-300 text-white">
            <IoMdPerson />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">ชาวนา</span>
            <span className="text-xl">100</span>
          </div>
        </div>
        <div className="flex rounded-lg bg-gray-50 shadow p-4 gap-4 w-full">
          <div className="p-5 rounded-lg bg-violet-300 text-white">
            <FaRegFileAlt />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">รอบการปลูก</span>
            <span className="text-xl">100</span>
          </div>
        </div>

        <div className="flex rounded-lg bg-gray-50 shadow p-4 gap-4 w-full">
          <div className="p-5 rounded-lg bg-orange-300 text-white">
            <FaSeedling />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">พันธุ์ข้าว</span>
            <span className="text-xl">100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDashboard;
