import { IoSearch } from "react-icons/io5";

const Search_RiceVariety = () => {
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
          placeholder="ค้นหาพันธุ์ข้าว"
          className="h-full rounded-r-lg p-2 text-sm bg-gray-50"
        />
      </div>
    </div>
  )
}

export default Search_RiceVariety
