import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { useState } from "react";

const Search = ({ setSearch, text, setRiceCaltivation_id_Search, page }) => {
  const [searchName, setSearchName] = useState("");
  const [searchID, setSearch_ID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchName);
    if (setRiceCaltivation_id_Search) {
      setRiceCaltivation_id_Search(searchID)
    }
  };

  const clickClear = () => {
    setSearch('');
    if (setRiceCaltivation_id_Search) {
      setRiceCaltivation_id_Search('')
    }
  }

  return (
    <div>
      <form
        className="flex items-center max-w-xl mx-auto gap-2 flex-wrap sm:flex-nowrap"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500">
            <IoSearch />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5"
            required
            placeholder={text}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        {page === "incomeExpense" ? (
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500">
              <IoSearch />
            </div>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-10 p-2.5"
              required
              placeholder="ระบุรหัสรอบการปลูก"
              onChange={(e) => setSearch_ID(e.target.value)}
            />
          </div>
        ) : null}
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-600 rounded-lg border hover:bg-blue-100 hover:text-blue-600 hover:duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Search
        </button>
        <button
          type="reset"
          className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-gray-500 rounded-lg border hover:bg-gray-200 hover:text-gray-600 hover:duration-500 focus:ring-4 focus:outline-none focus:ring-gray-300"
          onClick={clickClear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearch: PropTypes.func,
  text: PropTypes.string,
  page: PropTypes.string,
  setRiceCaltivation_id_Search: PropTypes.func
};

export default Search;
