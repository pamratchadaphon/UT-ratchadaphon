import { useEffect, useState } from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import Edit_RiceCaltivation from "./Edit_RiceCaltivation";
import View_RiceCaltivation from "./View_RiceCaltivation";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import Pagonation from "./Pagonation";

const Table_RiceCaltivation = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/riceCaltivation");
        const data = res.data.filter((data) => data.farmer !== null);
        const searchEmail = data.filter((data) =>
          data.farmer.email.includes(search)
        );
        setData(searchEmail);
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [search]);

  data.sort((a, b) => {
    return a.year - b.year;
  });

  const deleteRiceCaltivation = async (id) => {
    Swal.fire({
      title: "ยืนยันการลบ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8080/riceCaltivation/${id}`);
        await Swal.fire({
          title: "ลบสำเร็จ",
          icon: "success",
        });
        window.location.reload();
      }
    });
  };

  const [records, setRecords] = useState([])
  const [firstIndex, setFirstIndex] = useState(0)

  return (
    <div className="hidden lg:flex flex-wrap">
      <table className="w-full text-sm  text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-4">
              ลำดับที่
            </th>
            <th scope="col" className="px-2 py-4">
              ปี
            </th>
            <th scope="col" className="px-2 py-4 text-start">
              พันธุ์ข้าว
            </th>
            <th scope="col" className="px-2 py-4 text-end">
              พื้นที่ (ไร่)
            </th>
            <th scope="col" className="px-2 py-4 text-end">
              ปริมาณข้าวที่ได้ (กิโลกรัม)
            </th>
            <th scope="col" className="px-2 py-4 text-end">
              น้ำหนักสุทธิ (กิโลกรัม)
            </th>
            <th scope="col" className="px-2 py-4 text-end">
              ราคา/กิโลกรัม
            </th>
            <th scope="col" className="px-2 py-4 text-end">
              จำนวนเงิน (บาท)
            </th>
            <th scope="col" className="px-2 py-4">
              อีเมลผู้ปลูก
            </th>
            <th scope="col" className="px-2 py-4">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((data, i) => (
            <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {i + 1}
              </th>
              <th scope="row" className="p-2 font-normal">
                {data.year}
              </th>
              <th scope="row" className="p-2 font-normal text-start">
                {data.riceVariety}
              </th>
              <th scope="row" className="p-2 font-normal text-end">
                {data.area.toLocaleString()}
              </th>
              <th scope="row" className="p-2 font-normal text-end">
                {data.total_yield.toLocaleString()}
              </th>
              <th scope="row" className="p-2 font-normal text-end">
                {data.yield.toLocaleString()}
              </th>
              <th scope="row" className="p-2 font-normal text-end">
                {data.rice_price_per_kg.toLocaleString()}
              </th>
              <th scope="row" className="p-2 font-normal text-end">
                {(data.yield * data.rice_price_per_kg).toLocaleString()}
              </th>
              <th scope="row" className="p-2 font-normal text-start">
                {data.farmer.email}
              </th>

              <th scope="row" className="p-2 font-normal">
                <div className="flex justify-center items-center gap-2">
                  <View_RiceCaltivation id={data.riceCaltivation_id} />
                  <Edit_RiceCaltivation />
                  <button
                    className="flex justify-center items-center"
                    onClick={() => deleteRiceCaltivation(data.riceCaltivation_id)}
                  >
                    <div className="hover:bg-red-400 rounded-md bg-red-100 text-red-500 hover:text-white w-8 h-8 flex justify-center items-center border border-red-300">
                      <IoTrashOutline className="w-5 h-5" />
                    </div>
                  </button>
                </div>
              </th>
            </tr>
          ))}
          {/* {records.length === 0 ? (
            <tr>
              <td className="text-center py-4" colSpan="8">
                ไม่พบข้อมูล
              </td>
            </tr>
          ) : null} */}
        </tbody>
      </table>
      <Pagonation
        data={data}
        setRecords={setRecords}
        setFirstIndex={setFirstIndex}
      />
    </div>
  );
};

Table_RiceCaltivation.propTypes = {
  search: PropTypes.string,
};

export default Table_RiceCaltivation;
