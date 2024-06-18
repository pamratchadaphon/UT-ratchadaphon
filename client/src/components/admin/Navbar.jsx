import { LuMenu } from "react-icons/lu";
import PropTypes from 'prop-types'

const Navbar = ({setShowSideBar}) => {
  return (
    <nav className="bg-white border-b border-gray-200 h-14 flex items-center">
      <div className="lg:hidden pl-2">
        <button type="button" onClick={() => setShowSideBar(true)}>
          <LuMenu />
        </button>
      </div>
      <div className="pl-2 text-white">
        <button type="button">
          <LuMenu/>
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setShowSideBar: PropTypes.func
}

export default Navbar;
