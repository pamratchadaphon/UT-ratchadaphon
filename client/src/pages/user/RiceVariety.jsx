import { useParams } from "react-router-dom";
import Cards from "../../components/user/Cards";
import Navbar from "../../components/user/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/user/Pagination";

const RiceVariety = () => {
  const { user_id } = useParams();

  const [data, setData] = useState([]);

  const [type, setType] = useState("");
  const [photosensitivity, setPhotosensitivity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/riceVariety/");
      console.log(res.data);

      if (type !== "" && photosensitivity !== "") {
        setData(
          res.data.filter(
            (data) =>
              data.type === (type) &&
            data.photosensitivity === photosensitivity
          )
        );
      } else if (photosensitivity === "") {
        setData(
          res.data.filter(
            (data) =>
              data.type.includes(type) 
          )
        );
      } else {
        setData(
          res.data.filter(
            (data) =>
              data.type.includes(type) &&
              data.photosensitivity === photosensitivity
          )
        );
      }
    };
    fetchData();
  }, [type, photosensitivity]);

  const [records, setRecords] = useState([]);

  return (
    <div>
      <Navbar id={Number(user_id)} page={"riceVariety"} />
      <div className="mx-auto max-w-screen-xl h-screen">
        <motion.div
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{
            duration: "1",
          }}
        >
          <div className="flex items-center justify-center gap-4 mt-8 mb-8">
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
            duration: 1,
          }}
        >
          {/* <div className="px-4 pb-4 space-x-2 md:space-x-4">
            <select
              name="type"
              id="type"
              className="border border-gray-300 rounded-lg p-2 text-sm text-gray-500"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">ชนิด</option>
              <option value="ข้าวเจ้า">ข้าวเจ้า</option>
              <option value="ข้าวเหนียว">ข้าวเหนียว</option>
            </select>
            <select
              name="photosensitivity"
              id="photosensitivity"
              className="border border-gray-300 rounded-lg p-2 text-sm  text-gray-500"
              onChange={(e) => setPhotosensitivity(e.target.value)}
            >
              <option value="">ความไวแสง</option>
              <option value="ไวต่อช่วงแสง">ไวต่อช่วงแสง</option>
              <option value="ไม่ไวต่อช่วงแสง">ไม่ไวต่อช่วงแสง</option>
            </select>
          </div> */}
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
