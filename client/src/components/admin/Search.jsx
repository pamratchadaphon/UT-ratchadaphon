import { IoSearch } from "react-icons/io5";
import PropTypes from 'prop-types'

const Search= ({search, searchName, text}) => {
  return (
    <div>
      <div className="border rounded-lg flex items-center">
        <div className="w-full p-3 bg-gray-100 rounded-l-lg text-gray-500 border-r">
          <IoSearch />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => searchName(e.target.value)}
          placeholder={`${text}`}
          className="h-full rounded-r-lg p-2 text-sm bg-gray-50"
        />
      </div>
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string,
  searchName: PropTypes.func,
  text: PropTypes.string
}

export default Search
