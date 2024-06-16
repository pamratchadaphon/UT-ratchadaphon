import { TbLogout2 } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { FaRegFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ page, showSidebar, setShowSideBar }) => {
  const navigator = useNavigate();

  const [dashboard, setDashboard] = useState(false);
  const [riceVariety, setRiceVariety] = useState(false);
  const [farmer, setFarmer] = useState(false);
  const [riceCaltivaion, setRiceCalrivation] = useState(false);

  useEffect(() => {
    page === "riceVariety" ? setRiceVariety(true) : null;
    page === "farmer" ? setFarmer(true) : null;
    page === "riceCaltivation" ? setRiceCalrivation(true) : null;
    page === "dashboard" ? setDashboard(true) : null;
  }, [page]);

  const Logout = () => {
    localStorage.removeItem("token");
    navigator("/");
  };

  return (
    <div>
      <div className="hidden lg:flex basis-1/6 border-r h-screen px-5 bg-white flex-col justify-between">
        <div>
          <div className="text-center py-7">
            <a href="/dashboard" className="text-green-700 font-bold text-2xl">
              RiceProsper
            </a>
          </div>
          <div className="flex flex-col">
            <nav>
              <ul className="space-y-4 text-sm">
                {dashboard ? (
                  <li className="text-gray-500 rounded-lg p-2 bg-gray-100">
                    <a
                      href="/admin/dashboard"
                      className="flex items-center gap-2 text-gray-500"
                    >
                      <RxDashboard />
                      <span> Dashboard </span>
                    </a>
                  </li>
                ) : (
                  <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                    <a
                      href="/admin/dashboard"
                      className="flex items-center gap-2 text-gray-500"
                    >
                      <RxDashboard />
                      <span> Dashboard </span>
                    </a>
                  </li>
                )}

                {farmer ? (
                  <li className="text-gray-500 rounded-lg p-2  bg-gray-100">
                    <a href="#" className="flex items-center gap-2">
                      <IoMdPerson />
                      จัดการข้อมูลชาวนา
                    </a>
                  </li>
                ) : (
                  <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                    <a href="/admin/farmer" className="flex items-center gap-2">
                      <IoMdPerson />
                      จัดการข้อมูลชาวนา
                    </a>
                  </li>
                )}

                {riceCaltivaion ? (
                  <li className="text-gray-500 rounded-lg p-2  bg-gray-100">
                    <a
                      href="/admin/riceCaltivaion"
                      className="flex items-center gap-2"
                    >
                      <FaRegFileAlt />
                      จัดการข้อมูลรอบการปลูก
                    </a>
                  </li>
                ) : (
                  <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                    <a
                      href="/admin/riceCaltivaion"
                      className="flex items-center gap-2"
                    >
                      <FaRegFileAlt />
                      จัดการข้อมูลรอบการปลูก
                    </a>
                  </li>
                )}

                {riceVariety ? (
                  <li className="text-gray-500 rounded-lg p-2  bg-gray-100">
                    <a
                      href="/admin/riceVariety"
                      className="flex items-center gap-2"
                    >
                      <FaSeedling />
                      จัดการข้อมูลพันธุ์ข้าว
                    </a>
                  </li>
                ) : (
                  <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                    <a
                      href="/admin/riceVariety"
                      className="flex items-center gap-2"
                    >
                      <FaSeedling />
                      จัดการข้อมูลพันธุ์ข้าว
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
        <button
          type="button"
          className="hover:bg-gray-100 mb-10 p-2 rounded-lg"
          onClick={Logout}
        >
          <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-800 justify-center">
            <TbLogout2 />
            <span className="text-sm">ออกจากระบบ</span>
          </div>
        </button>
      </div>

      {showSidebar ? (
        <div className="fixed flex basis-1/6 border-r h-screen px-5 bg-white flex-col justify-between">
          <div>
            <div className="text-end mt-4">
              <button
                type="button"
                onClick={() => setShowSideBar(!showSidebar)}
              >
                <IoMdClose/>
              </button>
            </div>
            <div className="text-center pb-7">
              <a
                href="/dashboard"
                className="text-green-700 font-bold text-2xl"
              >
                RiceProsper
              </a>
            </div>
            <div className="flex flex-col">
              <nav>
                <ul className="space-y-4 text-sm">
                  {dashboard ? (
                    <li className="text-gray-500 rounded-lg p-2 bg-gray-100">
                      <a
                        href="/admin/dashboard"
                        className="flex items-center gap-2 text-gray-500"
                      >
                        <RxDashboard />
                        <span> Dashboard </span>
                      </a>
                    </li>
                  ) : (
                    <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                      <a
                        href="/admin/dashboard"
                        className="flex items-center gap-2 text-gray-500"
                      >
                        <RxDashboard />
                        <span> Dashboard </span>
                      </a>
                    </li>
                  )}
                  {farmer ? (
                    <li className="text-gray-500 rounded-lg p-2  bg-gray-100">
                      <a href="#" className="flex items-center gap-2">
                        <IoMdPerson />
                        จัดการข้อมูลชาวนา
                      </a>
                    </li>
                  ) : (
                    <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                      <a
                        href="/admin/farmer"
                        className="flex items-center gap-2"
                      >
                        <IoMdPerson />
                        จัดการข้อมูลชาวนา
                      </a>
                    </li>
                  )}
                  {riceCaltivaion ? (
                    <li className="text-gray-500 rounded-lg p-2  bg-gray-100">
                      <a
                        href="/admin/riceCaltivaion"
                        className="flex items-center gap-2"
                      >
                        <FaRegFileAlt />
                        จัดการข้อมูลรอบการปลูก
                      </a>
                    </li>
                  ) : (
                    <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                      <a
                        href="/admin/riceCaltivaion"
                        className="flex items-center gap-2"
                      >
                        <FaRegFileAlt />
                        จัดการข้อมูลรอบการปลูก
                      </a>
                    </li>
                  )}
                  {riceVariety ? (
                    <li className="text-gray-500 rounded-lg p-2  bg-gray-100">
                      <a
                        href="/admin/riceVariety"
                        className="flex items-center gap-2"
                      >
                        <FaSeedling />
                        จัดการข้อมูลพันธุ์ข้าว
                      </a>
                    </li>
                  ) : (
                    <li className="text-gray-500 rounded-lg p-2 hover:bg-gray-100">
                      <a
                        href="/admin/riceVariety"
                        className="flex items-center gap-2"
                      >
                        <FaSeedling />
                        จัดการข้อมูลพันธุ์ข้าว
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <button
            type="button"
            className="hover:bg-gray-100 mb-10 p-2 rounded-lg"
            onClick={Logout}
          >
            <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-800 justify-center">
              <TbLogout2 />
              <span className="text-sm">ออกจากระบบ</span>
            </div>
          </button>
        </div>
      ) : null}
    </div>
  );
};

Sidebar.propTypes = {
  page: PropTypes.string,
  showSidebar: PropTypes.bool,
  setShowSideBar: PropTypes.func
};

export default Sidebar;
