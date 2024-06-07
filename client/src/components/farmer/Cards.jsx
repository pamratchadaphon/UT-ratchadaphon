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
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 w-full pb-4 px-4">
      {data.map((d, i) => (
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:-translate-y-1 hover:scale-100 hover:shadow-lg hover:duration-700"
          key={i}
        >
          <img
            className="rounded-t-lg w-full h-32 md:h-48"
            src={`http://localhost:8080/${d.image}`}
            alt=""
          />

          <div className="p-5">
            <h5 className="md:text-2xl font-bold tracking-tight  text-green-700">
              พันธุ์ {d.name}
            </h5>

            <p className="text-sm text-gray-700 mb-3">
              ผลผลิต : ประมาณ {d.yield} กก./ไร่
            </p>
            <div className="flex items-center">
              <button
                className="inline-flex gap-2 items-center px-3 py-2 text-sm font-medium text-center rounded-lg  bg-green-100 text-green-700 hover:duration-500 hover:text-white hover:bg-green-600"
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
          <div className="relative p-4 w-full max-w-sm max-h-full">
            <div className="relative bg-white rounded-lg shadow p-4">
              <div>
                <img
                  src={`http://localhost:8080/${dataById.image}`}
                  className="rounded-lg h-48 w-full"
                />
                <div>
                  <div className="pt-2 pb-1">
                    <span className="font-semibold text-lg text-green-700">
                      ข้อมูลพันธุ์ข้าว {dataById.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-800">
                      อายุเก็บเกี่ยว
                    </span>
                    <span className="w-1/2 text-sm text-gray-600">
                      {dataById.age} วัน (หว่านน้ำตม)
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-800">
                      คุณสมบัติ
                    </span>
                    <span className="w-1/2 text-sm text-gray-600">
                      {dataById.feature}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-800">
                      ความไวแสง
                    </span>
                    <span className="w-1/2 text-sm text-gray-600">
                      {dataById.photosensitivity}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-800">
                      ความสูงเฉลี่ย
                    </span>
                    <span className="w-1/2 text-sm text-gray-600">
                      {dataById.height} เซนติเมตร
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-800">
                      ผลผลิต
                    </span>
                    <span className="w-1/2 text-sm text-gray-600">
                      ประมาณ {dataById.yield} กก./ไร่
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-800">
                      ลักษณะเด่น
                    </span>
                    <span className="w-1/2 text-sm text-gray-600">
                      {dataById.stability}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-1/2 pr-2 text-sm font-medium text-gray-800">
                      ข้อจำกัด
                    </span>
                    <span className="w-1/2 text-sm text-gray-600">
                      {dataById.precautions}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <button
                    type="button"
                    onClick={() => setModal(!modal)}
                    className="bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-100 hover:text-green-700 hover:duration-500"
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
