import { FaDroplet } from "react-icons/fa6";
import { FaTemperatureLow } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaBahtSign } from "react-icons/fa6";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import Navbar from "../../components/farmer/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ModalAddIncome from "../../components/farmer/ModalAddIncome";
import ModalAddExpense from "../../components/farmer/ModalAddExpense";

const HomePageFarmer = () => {
  const id = useParams();
  const idAsInt = Number(id.farmer_id);
  const [data, setData] = useState({});
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastName] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8080/farmer/riceCaltivation_incomeExpense/${idAsInt}`
      );
      const resRiceCaltivation = res.data[0].riceCaltivation;
      setFirstname(res.data[0].fname)
      setLastName(res.data[0].lname)
      setData(resRiceCaltivation[resRiceCaltivation.length - 1]);
    };
    fetchData();
  }, [idAsInt]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };
  return (
    <div className="mx-auto max-w-screen-xl h-screen flex flex-col justify-between">
      <Navbar fname={firstName} lname={lastName}/>
      <div className="px-4 py-16 border bg-gradient-to-r from-green-100 to-blue-100 h-screen flex flex-col justify-center items-center">
        <h1 className="mb-4 text-4xl font-extrabold text-green-700 tracking-tight leading-none  md:text-5xl lg:text-6xl">
          พันธุ์ {data.riceVariety}
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          วันที่ปลูก : {formatDate(data.startDate)}
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          วันที่เก็บเกี่ยว : {formatDate(data.endDate)}
        </p>
        <div className="flex gap-4 md:gap-6 justify-center">
          <ModalAddIncome />
          <ModalAddExpense/>
        </div>

        <div className="mt-8">
          <a
            href={`/history`}
            className="text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-700 py-2 px-4 rounded-full shadow-md"
          >
            ดูรายการย้อนหลัง
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:flex-row gap-6 p-4 bg-white">
        <a
          href="http://www.thairicemillers.org/index.php?lay=show&ac=article&Ntype=19"
          target="_blank"
          className="flex flex-col md:flex-row items-center py-2 px-4 bg-gray-50 shadow hover:bg-yellow-600 hover:text-white rounded-md w-full"
        >
          <div className="rounded-full p-4 text-yellow-700 bg-yellow-100 animate-bounce">
            <FaBahtSign />
          </div>
          <span className="text-sm">ราคาข้าวประจำวัน</span>
        </a>

        <a
          href="https://www.thaiwater.net/water?fbclid=IwZXh0bgNhZW0CMTAAAR2vcw1NPqBxPGisIz5Kz28ZBRcPotsMCN-NYooMXT108SE-LLArn2cJ23I_aem_AYItxE46NK2G23TQMGUrpCJPkQU4z0rT02g1QwM1fs5pjgfTlC4QAfGWM2U4F28uYnWNKHX6obFQhGbwhbKGTJI7"
          target="_blank"
          className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow hover:bg-sky-700 hover:text-white rounded-md w-full"
        >
          <div className="rounded-full p-4 text-sky-700 bg-sky-100 animate-bounce">
            <FaDroplet />
          </div>
          <span className="text-sm">สถานการณ์น้ำ</span>
        </a>

        <a
          href="https://www.tmd.go.th/forecast/dailyweatheragro?fbclid=IwZXh0bgNhZW0CMTAAAR0rI4QCR_saN9XFfT-sbBau2bhouVGvvqRklyZgp3BjsqdNUUDTnZQWd00_aem_AYKWQ607PUCOXsqouNWUv9KSfuKfJbWGxhgH5Dqet_IjmGemTn-RJdAuTUXLOjlg-rVNjB9_yX58LJlGEzzM_uvy"
          target="_blank"
          className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow hover:bg-gray-700 hover:text-white rounded-md w-full"
        >
          <div className="rounded-full p-4 text-gray-700 bg-gray-100 animate-bounce">
            <FaTemperatureLow />
          </div>
          <span className="text-sm">สภาพอากาศ</span>
        </a>

        <a
          href="https://www.ryt9.com/tag/%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7?fbclid=IwZXh0bgNhZW0CMTAAAR1lXF7c_fZEl3deJag3AkEvFuEa6Ve3FIoY0NxeZsXld7lYjqrIB5Pon84_aem_AYKeXYzGWE0xgQ7lQYJ13gJF9n7ZoxO_RLFaklexBq6syASl5isz1fjwXhA8CLjnIKD7ZWsvLoGUG1u8d3vsIrbz"
          target="_blank"
          className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow hover:bg-sky-700 hover:text-white rounded-md w-full"
        >
          <div className="rounded-full p-4 text-sky-700 bg-sky-100 animate-bounce">
            <FaNewspaper />
          </div>
          <span className="text-sm">ข่าวสารข้าว</span>
        </a>
        <a
          href="https://www.thairath.co.th/tags/%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8"
          target="_blank"
          className="flex flex-col md:flex-row items-center justify-center gap-2 py-2 px-4 bg-gray-50 shadow hover:bg-green-700 hover:text-white rounded-md w-full"
        >
          <div className="rounded-full p-4 text-green-700 bg-green-100 animate-bounce">
            <LiaTemperatureLowSolid />
          </div>
          <span className="text-sm">พยากรณ์อากาศอากาศ</span>
        </a>
      </div>
    </div>
  );
};

export default HomePageFarmer;
