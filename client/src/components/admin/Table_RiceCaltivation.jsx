import { useEffect, useState } from "react";
import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import Edit_RiceCaltivation from "./Edit_RiceCaltivation";
import View_RiceCaltivation from "./View_RiceCaltivation";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import Pagination from "./Pagination";
import { FaSort } from "react-icons/fa";

const Table_RiceCaltivation = ({ search }) => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");

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

  const [records, setRecords] = useState([]);

  const sortingEmail = (column) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a.farmer[column].toLowerCase() > b.farmer[column].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a.farmer[column].toLowerCase() < b.farmer[column].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  const sorting = (column) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => (a[column] > b[column] ? 1 : -1));
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => (a[column] < b[column] ? 1 : -1));
      setData(sorted);
      setOrder("ASC");
    }
  };

  const sortingPrice = () => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a.yield * a.rice_price_per_kg > b.yield * b.rice_price_per_kg ? 1 : -1
      );
      setData(sorted)
      setOrder("DSC")
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a.yield * a.rice_price_per_kg < b.yield * b.rice_price_per_kg ? 1 : -1
      );
      setData(sorted)
      setOrder("ASC")
    }
  };

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

  return (
    <div className="hidden lg:flex flex-wrap">
      <table className="w-full text-sm  text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-end">
                รหัส
                <button
                  className="button"
                  onClick={() => sorting("riceCaltivation_id")}
                >
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-center">
                ผู้ปลูก
                <button
                  className="button"
                  onClick={() => sortingEmail("fname")}
                >
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-end">
                ปี{" "}
                <button type="button" onClick={() => sorting("year")}>
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4 text-start">
              <div className="flex items-center gap-2 justify-start">
                พันธุ์ข้าว
                <button type="button" onClick={() => sorting("riceVariety")}>
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-end">
                พื้นที่ (ไร่)
                <button className="button" onClick={() => sorting("area")}>
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-end">
                ปริมาณข้าวที่ได้ (กิโลกรัม)
                <button
                  className="button"
                  onClick={() => sorting("total_yield")}
                >
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-end">
                ปริมาณข้าวที่ขาย (กิโลกรัม)
                <button className="button" onClick={() => sorting("yield")}>
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-end">
                ราคา/กิโลกรัม
                <button
                  className="button"
                  onClick={() => sorting("rice_price_per_kg")}
                >
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              <div className="flex items-center gap-2 justify-end">
                จำนวนเงิน (บาท)
                <button className="button" onClick={() => sortingPrice()}>
                  <FaSort />
                </button>
              </div>
            </th>
            <th scope="col" className="px-2 py-4">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, i) => (
            <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
              <th scope="row" className="p-2 font-normal text-end">
                {data.riceCaltivation_id}
              </th>
              <th scope="row" className="p-2 font-normal text-start">
                {data.farmer.fname} {data.farmer.lname}
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
              <th scope="row" className="p-2 font-normal">
                <div className="flex justify-center items-center gap-2">
                  <View_RiceCaltivation id={data.riceCaltivation_id} />
                  <Edit_RiceCaltivation />
                  <button
                    className="flex justify-center items-center"
                    onClick={() =>
                      deleteRiceCaltivation(data.riceCaltivation_id)
                    }
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
      <Pagination data={data} setRecords={setRecords} recodesPerPage={10} />
    </div>
  );
};

Table_RiceCaltivation.propTypes = {
  search: PropTypes.string,
};

export default Table_RiceCaltivation;
