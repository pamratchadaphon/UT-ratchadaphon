import { AiOutlineMenu } from "react-icons/ai";
import PropTypes from "prop-types";

const Navbar = ({
  setShowSideBar_Moble,
  setShowSideBar_Web,
  showSidebar_Web,
  showSidebar_Moble,
}) => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200 h-14 flex items-center">
      <div
        className="lg:hidden flex text-gray-500 border-2 justify-center p-2 ml-4 rounded-lg border-gray-300"
        onClick={() => setShowSideBar_Moble(!showSidebar_Moble)}
      >
        <button type="button">
          <AiOutlineMenu />
        </button>
      </div>
      <div
        className="hidden text-gray-500 border-2 lg:flex justify-center p-2 ml-4 rounded-lg border-gray-300"
        onClick={() => setShowSideBar_Web(!showSidebar_Web)}
      >
        <button type="button">
          <AiOutlineMenu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setShowSideBar_Moble: PropTypes.func,
  setShowSideBar_Web: PropTypes.func,
  showSidebar_Web: PropTypes.bool,
  showSidebar_Moble: PropTypes.bool
};

export default Navbar;
