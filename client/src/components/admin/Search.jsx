import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";

const Search = ({ setSearch, text }) => {

  return (
    <div>
      <form className="flex items-center max-w-lg mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500">
            <IoSearch />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5"
            required
            placeholder={text}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-600 rounded-lg border hover:bg-blue-100 hover:text-blue-600 hover:duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          ค้นหา
        </button> */}
      </form>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  text: PropTypes.string,
};

export default Search;
