import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [dataById, setDataById] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/riceVariety/");
      setData(res.data);
    };
    fetchData();
  });

  const handleModal = async (id) => {
    setModal(!modal);
    const res = await axios.get(`http://localhost:8080/riceVariety/${id}`);
    setDataById(res.data);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full p-4">
      {data.map((d, i) => (
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
          key={i}
        >
          <img
            className="rounded-t-lg w-full h-48"
            src={`http://localhost:8080/${d.image}`}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white text-green-800">
              name
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {d.yield_variety}
            </p>
            <div className="flex justify-end items-center">
              <button
                className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-100 hover:text-green-700 hover:duration-200"
                onClick={() => handleModal(d.riceVariety_id)}
              >
                <span>ดูข้อมูล</span>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      ))}
      {modal ? (
        <div className="fixed top-0 left-0 right-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center bg-black bg-opacity-50 h-screen">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow p-4">
              <div className="space-y-4">
                <img src={`http://localhost:8080/${dataById.image}`} />
                <div>
                  <span className="font-bold text-green-900">ข้อมูลพันธุ์ข้าว กข65</span>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-700">อายุเก็บเกี่ยว </span>
                    <span className="w-1/2 text-sm">120-130 วัน (หว่านน้ำตม)</span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium">คุณสมบัติ</span>
                    <span className="w-1/2 text-sm">พันธุ์ต้านทานโรคและแมลง</span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm">ความไวแสง</span>
                    <span className="w-1/2 text-sm">ไวต่อช่วงแสง</span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm">ความนุ่มนวล</span>
                    <span className="w-1/2 text-sm">เป็นข้าวหอม ข้าวนุ่ม</span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm">ความสูงเฉลี่ย</span>
                    <span className="w-1/2 text-sm">130 เซนติเมตร</span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm">ผลผลิต</span>
                    <span className="w-1/2 text-sm">ประมาณ 673 กก./ไร่</span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm">ความสามารถพิเศษ</span>
                    <span className="w-1/2 text-sm">ค่อนข้างต้านทานโรคไหม้ในระยะกล้า</span>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <button
                    type="button"
                    onClick={() => setModal(!modal)}
                    className="bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-100 hover:text-green-700 hover:duration-200"
                  >
                    ปิด
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
