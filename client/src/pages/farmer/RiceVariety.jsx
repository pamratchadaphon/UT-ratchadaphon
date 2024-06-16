import { useParams } from "react-router-dom";
import Cards from "../../components/farmer/Cards";
import Navbar from "../../components/farmer/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { GrNext, GrPrevious } from "react-icons/gr";

const RiceVariety = () => {
  const { farmer_id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/riceVariety/");

      setData(res.data);
    };
    fetchData();
  });

  const [page, setPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = page * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const [lastRow, setLastRow] = useState(0);

  const nextPage = () => {
    page < nextPage ? setPage(page + 1) : null;
  };

  const prePage = () => {
    page > 1 ? setPage(page - 1) : null;
  };

  const changePage = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    if (records.length > 0) {
      setLastRow(firstIndex + records.length)
    }
  }, [firstIndex, records])
  return (
    <div>
      <Navbar id={Number(farmer_id)} page={"riceVariety"} />
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col items-center">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: "1",
          }}
        >
          <div className="flex items-center gap-4 m-8">
            <div className="flex flex-col gap-2 items-end">
              <hr className="w-10 border-2 rounded-full border-green-600" />
              <hr className="w-16 border-2 rounded-full border-green-600" />
            </div>
            <span className="text-xl text-green-700">พันธุ์ข้าว</span>
            <div className="flex flex-col gap-2 items-start">
              <hr className="w-10 border-2 rounded-full border-green-600" />
              <hr className="w-16 border-2 rounded-full border-green-600" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: "1",
          }}
        >
          <Cards data={records} />
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between mx-4 mb-10"
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
                <span className="w-8 h-8 hover:bg-green-100 rounded-lg flex justify-center items-center hover:text-green-700">
                  ...
                </span>
              }
              nextLabel={
                page < npage ? (
                  <span
                    className="p-2 flex justify-center items-center bg-gray-100 rounded-lg hover:bg-gray-200"
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
                    className="p-2 flex justify-center items-center bg-gray-100 rounded-lg hover:bg-gray-200"
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
        </motion.div>
      </div>
    </div>
  );
};

export default RiceVariety;
