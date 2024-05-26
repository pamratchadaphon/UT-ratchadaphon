import ModalAddIncome from "../../components/farmer/ModalAddIncome";
import ModalAddExpense from "../../components/farmer/ModalAddExpense";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
  const id = useParams();
  const idAsInt = Number(id.farmer_id);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8080/farmer/riceCaltivation_incomeExpense/${idAsInt}`
      );
      const resRiceCaltivation = res.data[0].riceCaltivation;
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
        <ModalAddExpense />
        <ModalAddIncome />
      </div>

      <div className="mt-8">
        <a
          href={`/ricecrop/history`}
          className="text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-700 py-2 px-4 rounded-full hover:duration-200"
        >
          ดูรายการย้อนหลัง
        </a>
      </div>
    </div>
  );
};

export default Content;
