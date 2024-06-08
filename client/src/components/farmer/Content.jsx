import ModalAddIncome from "../../components/farmer/ModalAddIncome";
import ModalAddExpense from "../../components/farmer/ModalAddExpense";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
  const id = useParams();
  const farmer_id = Number(id.farmer_id);
  const [data, setData] = useState({});
  const [showModalExpense, setShowModalExpense] = useState(false);
  const [showModalIncome, setShowModalIncome] = useState(false);
  const [riceCaltivation_id, setRiceCaltivation_id] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:8080/farmer/riceCaltivation_incomeExpense/${farmer_id}`
      );
      const resRiceCaltivation = res.data[0].riceCaltivation;
      setData(resRiceCaltivation[resRiceCaltivation.length - 1]);
      setRiceCaltivation_id(resRiceCaltivation[resRiceCaltivation.length - 1].riceCaltivation_id);
    };
    fetchData();
  }, [farmer_id]);

  const handleModalExpense = () => setShowModalExpense(!showModalExpense);

  const handleModalIncome = () => setShowModalIncome(!showModalIncome);

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
      <div className="flex gap-2 md:gap-3 justify-center items-center">
        <button
          className="bg-red-400 h-36 w-36 rounded-full text-white lg:text-red-700 lg:bg-red-200 lg:hover:bg-red-500 lg:hover:text-white hover:duration-200"
          onClick={handleModalExpense}
        >
          บันทึกรายจ่าย
        </button>
        <ModalAddExpense
          showModalExpense={showModalExpense}
          handleModalExpense={handleModalExpense}
          farmer_id={farmer_id}
          riceCaltivation_id={riceCaltivation_id}
        />
        <button
          className="bg-green-400 lg:bg-green-300 h-36 w-36 rounded-full  text-white lg:text-green-700 lg:hover:bg-green-500 lg:hover:text-white shadow-md hover:duration-200"
          onClick={handleModalIncome}
        >
          บันทึกรายรับ
        </button>
        <ModalAddIncome
          showModalIncome={showModalIncome}
          handleModalIncome={handleModalIncome}
          farmer_id={farmer_id}
          riceCaltivation_id={riceCaltivation_id}
        />
      </div>

      <div className="mt-8">
        <Link
          to={`/ricecrop/history/${farmer_id}/${riceCaltivation_id}`}
          className="text-white bg-orange-400 hover:bg-orange-100 hover:text-orange-700 py-2 px-4 rounded-full hover:duration-700"
        >
          ดูรายการย้อนหลัง
        </Link>
      </div>
    </div>
  );
};

export default Content;
