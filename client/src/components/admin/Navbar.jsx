import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <a href="#">
          <span className="text-green-800 font-semibold text-xl md:text-2xl whitespace-nowrap">
            RiceProsper
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-green-800 bg-green-200 hover:bg-green-600 hover:text-white rounded-full focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-4 py-2 text-cente hover:duration-500"
            onClick={handleLogout}
          >
            ออกจากระบบ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
