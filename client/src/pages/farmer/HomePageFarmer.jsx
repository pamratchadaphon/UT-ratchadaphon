import Navbar from "../../components/farmer/Navbar";
import NewsService from "../../components/farmer/NewsService";
import Content from "../../components/farmer/Content";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const HomePageFarmer = () => {
  const farmer_id = Number(useParams().farmer_id);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resFarmer = await axios.get(
          `http://localhost:8080/farmer/${farmer_id}`
        );
        setFname(resFarmer.data.fname);
        setLname(resFarmer.data.lname);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [farmer_id]);

  return (
    <div className="h-screen flex flex-col justify-between bg-gradient-to-r from-green-100 to-blue-100">
      <div>
        <Navbar id={farmer_id} page={"home"} />
        <motion.div
          initial={{ x: -100 , opacity: 0}}
          animate={{ x: 0 , opacity: 1}}
          transition={{ duration: 1}}
          className="flex items-center mx-auto max-w-screen-xl w-full px-4 gap-2 pt-10 text-xl md:text-2xl"
        >
          <div className=" text-gray-400">สวัสดี</div>
          <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-l to-emerald-500 from-green-600">
            {fname} {lname}
          </h1>
        </motion.div>
      </div>
      <Content />
      <NewsService />
    </div>
  );
};

export default HomePageFarmer;
