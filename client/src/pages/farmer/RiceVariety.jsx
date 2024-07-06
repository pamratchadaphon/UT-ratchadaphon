import { useParams } from "react-router-dom";
import Cards from "../../components/farmer/Cards";
import Navbar from "../../components/farmer/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/farmer/Pagination";

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

  const [records, setRecords] = useState([]);

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
          <div className="px-4 pb-4">
            <Pagination
              data={data}
              setRecords={setRecords}
              recodesPerPage={12}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiceVariety;
