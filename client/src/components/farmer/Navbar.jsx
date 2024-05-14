import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaSeedling } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpenToggle(!isOpenToggle);
  };

  const iconToggle = () => {
    if (isOpenToggle === false) {
      return <AiOutlineMenu className="w-20 h-20" />;
    } else {
      return <IoMdClose className="w-20 h-20" />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("tokem");
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-white border-b dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <IoPerson className="text-green-800" />
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-green-800 pl-2">
              สมชาย ใจดี
            </span>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-200 hover:text-green-800 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-4 py-2 text-cente"
              onClick={handleLogout}
            >
              ออกจากระบบ
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {iconToggle()}
            </button>
          </div>
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="hidden md:flex md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0  md:dark:bg-gray-900">
              <li>
                <a
                  href="/farmer/index"
                  className=" md:hover:rounded-xl  md:hover:text-green-900 md:p-0 flex items-center"
                  aria-current="page"
                >
                  <div className="hover:bg-green-100 w-32 h-10 inline-flex items-center justify-center rounded-full">
                    <FaHome />
                    <span className="pl-2">หน้าแรก</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" md:hover:rounded-xl  md:hover:text-green-900 md:p-0 flex items-center"
                  aria-current="page"
                >
                  <div className="hover:bg-green-100 w-32 h-10 inline-flex items-center justify-center rounded-full">
                    <FaSeedling />
                    <span className="pl-2">รอบการปลูก</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" md:hover:rounded-xl  md:hover:text-green-900 md:p-0 flex items-center"
                  aria-current="page"
                >
                  <div className="hover:bg-green-100 w-32 h-10 inline-flex items-center justify-center rounded-full">
                    <RiPlantLine />
                    <span className="pl-2">พันธุ์ข้าว</span>
                  </div>
                </a>
              </li>
            </ul>
            {isOpenToggle ? (
              <ul className="md:hidden flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse  dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <a
                    href="/farmer/index"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500"
                    aria-current="page"
                  >
                    หน้าแรก
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500"
                    aria-current="page"
                  >
                    รอบการปลูก
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    พันธุ์ข้าว
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
