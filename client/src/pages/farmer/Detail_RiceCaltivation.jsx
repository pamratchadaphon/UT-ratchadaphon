import Navbar from "../../components/farmer/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import Info_ricecrop from "../../components/farmer/Info_ricecrop";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Yield_rice from "../../components/farmer/Yield_rice";
import Stored_Rice from "../../components/farmer/Stored_Rice";
import { BiDetail } from "react-icons/bi";

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
    <div>
      <Navbar id={farmer_id} />
      <div className="mx-auto max-w-screen-xl p-4 space-y-4 flex flex-col">
        {/* <nav className="flex">
          <ol className="flex space-x-1 items-center">
            <li className="hover:text-green-700 hover:underline">
              <a href="/ricecrop/2">รอบการปลูก</a>
            </li>
            <li>
              <IoIosArrowForward />
            </li>
            <li className="text-green-700">รายงานแปลงนารอบการปลูกที่ {riceCaltivation_id}</li>
          </ol>
        </nav> */}
        <div className="text-center mb-4">
          <span className="text-xl border-b-2 border-green-600 pb-1">
            รายงานแปลงนา
          </span>
        </div>
        <div className="md:flex gap-10">
          <div className="w-1/3 flex flex-col bg-green-700 text-white rounded-2xl p-10 shadow">
            <div className="pb-10">
              <BiDetail />
            </div>
            <span className="pb-4">รายละเอียดรอบการปลูก</span>
            <span>ปี : </span>
            <span>วันที่ปลูก : </span>
            <span>วันที่เก็บเกี่ยว : </span>
            <span>พันธุ์ข้าว : </span>
            <span>พื้นที่ : </span>
            <span>สถานที่ :</span>
          </div>

          <div className="w-1/3 flex flex-col  bg-green-100 border border-green-300 text-green-800 rounded-2xl p-10 ">
            <div className="pb-10">a</div>
            <span className="pb-4">ผลผลิตจากการเก็บเกี่ยว</span>
            <span>น้ำหนักสุทธิของผลผลิต : กิโลกรัม</span>
            <span>ราคข้าวต่อกิโลกรัม : บาท</span>
            <span>รายได้จากการขายข้าว : บาท</span>
          </div>

          <div className="w-1/3 flex flex-col bg-green-700 text-white rounded-2xl p-10 shadow">
            <div className="pb-10">a</div>
            <span className="pb-4">ข้าวที่เก็บไว้</span>
            <span>ข้าวที่เก็บไว้บริโภค : กิโลกรัม</span>
            <span>ข้าวที่เก็บไว้ทำพันธุ์ : กิโลกรัม</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4 justify-between">
          <Info_ricecrop riceCaltivation={riceCaltivation} />
          <Yield_rice riceCaltivation={riceCaltivation} />
          <Stored_Rice riceCaltivation={riceCaltivation} />
        </div>
      </div>
    </div>
  );
};

export default Detail_RiceCaltivationjsx;
