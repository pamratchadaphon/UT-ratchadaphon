import Navbar from "../../components/farmer/Navbar";
// import { IoIosArrowForward } from "react-icons/io";
import Info_ricecrop from "../../components/farmer/Info_ricecrop";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Yield_rice from "../../components/farmer/Yield_rice";
import Stored_Rice from "../../components/farmer/Stored_Rice";
import { motion } from "framer-motion";
import Bg_header from "../../components/farmer/Bg_header";

const Detail_RiceCaltivationjsx = () => {
  const farmer_id = Number(useParams().farmer_id);
  const riceCaltivation_id = Number(useParams().riceCaltivation_id);

  const [riceCaltivation, setRiceCaltivation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/riceCaltivation/${riceCaltivation_id}`
        );
        setRiceCaltivation(res.data);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [riceCaltivation_id]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar id={farmer_id} />
      <Bg_header text={'รายงานแปลงนา'}/>
      <div className="mx-auto max-w-screen-xl px-4  pb-4 space-y-4 flex flex-col mt-4 md:mt-8">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: "1",
          }}
          className="flex flex-col lg:flex-row gap-4 md:gap-10 justify-between"
        >
          <Info_ricecrop
            riceCaltivation={riceCaltivation}
          />
          <Yield_rice riceCaltivation={riceCaltivation} />
          <Stored_Rice riceCaltivation={riceCaltivation} />
        </motion.div>
      </div>
    </div>
  );
};

export default Detail_RiceCaltivationjsx;
