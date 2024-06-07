import { IoSearch } from "react-icons/io5";
import PropTypes from 'prop-types'

const Search_RiceVariety = ({search, searchName}) => {
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
          placeholder="ค้นหาพันธุ์ข้าว"
          className="h-full rounded-r-lg p-2 text-sm bg-gray-50"
        />
      </div>
    </div>
  )
}

Search_RiceVariety.propTypes = {
  search: PropTypes.string,
  searchName: PropTypes.func
}

export default Search_RiceVariety
