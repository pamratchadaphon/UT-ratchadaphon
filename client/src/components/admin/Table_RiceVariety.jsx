import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import ViewRiceVariety from "./ViewRiceVariety";
import EditRiceVariety from "./EditRiceVariety";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

const Table_RiceVariety = ({ search }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/riceVariety/");
        const searchName = res.data.filter((data) =>
          data.name.includes(search)
        );
        setData(searchName);
      } catch (error) {
        console.log("Error" + error);
      }
    };
    fetchData();
  }, [search]);

  const [records, setRecords] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);

  const deleteRiceVariety = async (id, name) => {
    Swal.fire({
      title: "ยืนยันการลบ?",
      text: `คุณต้องการลบพันธุ์ข้าว ${name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8080/riceVariety/${id}`);
        await Swal.fire({
          title: "ลบสำเร็จ",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };

  return (
    <div className="hidden lg:block">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              ลำดับที่
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              รูปภาพ
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ชื่อพันธุ์
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              อายุเก็บเกี่ยว
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ผลผลิต
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ความสูงเฉลี่ย
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              ความไวแสง
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {firstIndex + i + 1}
              </th>
              <th
                scope="row"
                className="p-2 font-normal flex justify-center"
              >
                <img
                  src={`http://localhost:8080/${d.image}`}
                  className="h-16 w-24"
                />
              </th>
              <th scope="row" className="p-2 font-normal  text-center">
                {d.name}
              </th>
              <th scope="row" className="p-2 font-normal text-center">
                {d.age} วัน
              </th>
              <th scope="row" className="p-2 font-normal text-center">
                ประมาณ {d.yield} กก./ไร่
              </th>
              <th scope="row" className="p-2 font-normal text-center">
                {d.height} ซม.
              </th>
              <th scope="row" className="p-2 font-normal text-center">
                {d.photosensitivity}
              </th>
              <th scope="row" className="p-2 font-normal text-center">
                <div className="flex justify-center items-center gap-2">
                  <ViewRiceVariety id={d.riceVariety_id} />
                  <EditRiceVariety id={d.riceVariety_id} />
                  <button
                    className="flex justify-center items-center"
                    onClick={() => deleteRiceVariety(d.riceVariety_id, d.name)}
                  >
                    <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-8 h-8 flex justify-center items-center border border-red-300">
                      <IoTrashOutline className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </th>
            </tr>
          ))}
          {records.length === 0 ? (
            <tr>
              <td className="text-center py-4" colSpan="8">
                ไม่พบข้อมูล
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <Pagination
        data={data}
        setRecords={setRecords}
        setFirstIndex={setFirstIndex}
        recodesPerPage={10}
      />
    </div>
  );
};

Table_RiceVariety.propTypes = {
  search: PropTypes.string,
};

export default Table_RiceVariety;
