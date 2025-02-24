import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";

const Pagination = ({ data, setRecords, setFirstIndex, recodesPerPage}) => {

  const [page, setPage] = useState(1);
  const lastIndex = page * recodesPerPage;
  const firstIndex = lastIndex - recodesPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recodesPerPage);
  const [lastRow, setLastRow] = useState(0);

  useEffect(() => {
    setRecords(records);
    if (setFirstIndex) {
      setFirstIndex(firstIndex)
    }
  }, [lastRow, npage]);

  const nextPage = () => {
    page < npage ? setPage(page + 1) : null;
  };

  const prePage = () => {
    page > 1 ? setPage(page - 1) : null;
  };

  const changePage = (even) => {
    setPage(even.selected + 1);
  };

  useEffect(() => {
    if (records.length > 0) {
      setLastRow(firstIndex + records.length);
    }
  }, [firstIndex, records]);

  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 w-full"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        จำนวนแถวต่อหน้า{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {firstIndex + 1}-{lastRow}
        </span>{" "}
        จาก{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {data.length}
        </span>
      </span>
      <ReactPaginate
        breakLabel={
          <span className="w-5 h-5 hover:bg-green-100 rounded-lg flex justify-center items-center hover:text-green-700">
            ...
          </span>
        }
        nextLabel={
          page < npage ? (
            <span
              className=" flex justify-center items-center bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={nextPage}
            >
              <GrNext />
            </span>
          ) : null
        }
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={npage}
        previousLabel={
          firstIndex > 0 ? (
            <span
              className="flex justify-center items-center bg-gray-100 rounded-lg hover:bg-gray-200"
              onClick={prePage}
            >
              <GrPrevious />
            </span>
          ) : null
        }
        renderOnZeroPageCount={null}
        containerClassName="flex space-x-1 justify-center items-center"
        pageClassName="w-8 h-8 hover:bg-green-100 hover:text-green-700 rounded-lg flex items-center justify-center"
        activeClassName="bg-green-100 text-green-700"
      />
    </nav>
  );
};

Pagination.propTypes = {
  data: PropTypes.array,
  setRecords: PropTypes.func,
  setFirstIndex: PropTypes.func,
  recodesPerPage: PropTypes.number
};

export default Pagination;
