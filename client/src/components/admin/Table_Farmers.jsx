import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import Pagonation from "./Pagonation";
import PropTypes from "prop-types";
import axios from "axios";
import EditFarmer from "./EditFarmer";
import Swal from "sweetalert2";

const Table_Farmers = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/farmer`);
        const searchName = res.data.filter((data) =>
          data.fname.includes(search)
        );
        setData(searchName)
      } catch (error) {
        console.log("Error : " + error);
      }
    };
    fetchData();
  }, [search]);

  const [records, setRecords] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);

  const deleteFarmer = async (id, fname, lname) => {
    try {
      Swal.fire({
        title: "ยืนยันการลบ?",
        text: `คุณต้องการลบ ${fname} ${lname}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:8080/farmer/${id}`);
          await Swal.fire({
            title: "ลบสำเร็จ",
            icon: "success",
          });
          window.location.reload();
        }
      });
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  return (
    <div className="hidden lg:flex flex-wrap">
      <table className="w-full text-sm  text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ลำดับที่
            </th>
            <th scope="col" className="px-6 py-3">
              ชื่อ
            </th>
            <th scope="col" className="px-6 py-3">
              นามสกุล
            </th>
            <th scope="col" className="px-6 py-3">
              เบอร์โทรศัพท์
            </th>
            <th scope="col" className="px-6 py-3">
              ตำบล
            </th>
            <th scope="col" className="px-6 py-3">
              อำเภอ
            </th>
            <th scope="col" className="px-6 py-3">
              จังหวัด
            </th>
            <th scope="col" className="px-6 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {firstIndex + i + 1}
              </th>

              <th scope="row" className="px-6 py-4 font-normal">
                {d.fname}
              </th>
              <th scope="row" className="px-6 py-4 font-normal">
                {d.lname}
              </th>
              <th scope="row" className="px-6 py-4 font-normal">
                0{d.phone}
              </th>
              <th scope="row" className="px-6 py-4 font-normal">
                {d.subdistrict}
              </th>
              <th scope="row" className="px-6 py-4 font-normal">
                {d.district}
              </th>
              <th scope="row" className="px-6 py-4 font-normal">
                {d.province}
              </th>
              <th scope="row" className="px-6 py-4 font-normal">
                <div className="flex justify-center items-center gap-2">
                  <EditFarmer id={d.farmer_id} />
                  <button
                    className="flex justify-center items-center"
                    onClick={() => deleteFarmer(d.farmer_id, d.fname, d.lname)}
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
      <Pagonation
        data={data}
        setRecords={setRecords}
        setFirstIndex={setFirstIndex}
      />
    </div>
  );
};

Table_Farmers.propTypes = {
  search: PropTypes.string,
};

export default Table_Farmers;
