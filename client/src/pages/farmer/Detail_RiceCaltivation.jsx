import Navbar from "../../components/farmer/Navbar";
import { IoIosArrowForward } from "react-icons/io";

const Detail_RiceCaltivationjsx = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl p-4">
        <nav className="flex mb-4">
          <ol className="flex space-x-1 items-center">
            <li className="hover:text-green-700 hover:underline">
              <a href="/ricecrop/2">รอบการปลูก</a>
            </li>
            <li>
              <IoIosArrowForward/>
            </li>
            <li className="text-green-700">
              รายละเอียด
            </li>
          </ol>
        </nav>
        <div>
       2
        </div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Detail_RiceCaltivationjsx;
